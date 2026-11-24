// Crea el ícono de la pestaña y las imágenes de vista previa para compartir (WhatsApp, LinkedIn…).
// Ejecútalo si cambias tu foto, tu nombre, tu título o tu frase:  node herramientas/crear-imagenes.js
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { abrirNavegador } = require('./navegador.js');
const perfil = require('./perfil.js');

const RAIZ = path.resolve(__dirname, '..');
const IMG = path.join(RAIZ, 'img');
const VERDE = '#1f6f5c';

const ICONO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${VERDE}"/>
  <path d="M16 22l11 10-11 10" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 44h16" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function tarjeta(lang) {
  const foto = pathToFileURL(path.join(RAIZ, perfil.foto)).href;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; background: #f7f5f0; font-family: system-ui, "Segoe UI", sans-serif; color: #22252a;
      background-image: linear-gradient(rgb(31 111 92 / .08) 1px, transparent 1px), linear-gradient(90deg, rgb(31 111 92 / .08) 1px, transparent 1px);
      background-size: 40px 40px; display: flex; align-items: center; gap: 64px; padding: 0 80px; }
    .foto { flex: 0 0 340px; height: 425px; border-radius: 22px; overflow: hidden; box-shadow: 18px 18px 0 #e3f0ec, 18px 18px 0 2px ${VERDE}; }
    .foto img { width: 100%; height: 100%; object-fit: cover; }
    .kicker { display: inline-block; padding: 8px 18px; border: 2px solid #dfdbd2; border-radius: 999px; background: #fff; color: #5c626b;
      font: 600 22px Consolas, monospace; margin-bottom: 22px; }
    .kicker b { color: ${VERDE}; }
    h1 { font: 500 66px/1.05 Georgia, serif; margin-bottom: 22px; }
    p { font: 32px/1.3 Georgia, serif; color: ${VERDE}; }
    .web { margin-top: 30px; font: 600 24px system-ui, sans-serif; color: #5c626b; }
  </style></head><body>
    <div class="foto"><img src="${foto}"></div>
    <div>
      <span class="kicker"><b>&gt;_</b> ${lang === 'es' ? 'Portafolio' : 'Portfolio'}</span>
      <h1>${esc(perfil.nombre)}</h1>
      <p>${esc(perfil.lema[lang])}</p>
      <div class="web">${esc(perfil.titulo[lang])}</div>
    </div>
  </body></html>`;
}

async function crearImagenes() {
  fs.mkdirSync(IMG, { recursive: true });
  fs.writeFileSync(path.join(IMG, 'icono.svg'), ICONO);
  console.log('  ✓ img/icono.svg');
  const navegador = await abrirNavegador();
  try {
    const p = await navegador.newPage();
    for (const lado of [32, 180]) {
      await p.setViewport({ width: lado, height: lado });
      await p.setContent(`<style>*{margin:0}</style>${ICONO.replace('<svg ', `<svg width="${lado}" height="${lado}" `)}`);
      await p.screenshot({ path: path.join(IMG, `icono-${lado}.png`), omitBackground: true });
      console.log(`  ✓ img/icono-${lado}.png`);
    }
    for (const lang of ['es', 'en']) {
      const temporal = path.join(IMG, `_tarjeta-${lang}.html`);
      fs.writeFileSync(temporal, tarjeta(lang));
      await p.setViewport({ width: 1200, height: 630 });
      await p.goto(pathToFileURL(temporal).href, { waitUntil: 'load' });
      const nombre = lang === 'es' ? 'vista-previa.jpg' : 'vista-previa-en.jpg';
      await p.screenshot({ path: path.join(IMG, nombre), type: 'jpeg', quality: 86 });
      fs.unlinkSync(temporal);
      console.log(`  ✓ img/${nombre}`);
    }
  } finally {
    await navegador.close();
  }
}

crearImagenes().catch((e) => {
  console.error('No se pudieron crear las imágenes:', e.message);
  process.exit(1);
});
