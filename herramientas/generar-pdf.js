// Convierte cv.html y en/cv.html en cv.pdf y en/cv.pdf (tamaño A4).
// Lo llama generar.js al final; también se puede ejecutar solo: node herramientas/generar-pdf.js
const path = require('path');
const { pathToFileURL } = require('url');
const { abrirNavegador } = require('./navegador.js');

const RAIZ = path.resolve(__dirname, '..');

async function generarPdf() {
  const navegador = await abrirNavegador();
  try {
    const pagina = await navegador.newPage();
    for (const [html, pdf] of [['cv.html', 'cv.pdf'], ['en/cv.html', 'en/cv.pdf']]) {
      await pagina.goto(pathToFileURL(path.join(RAIZ, html)).href, { waitUntil: 'load' });
      await pagina.emulateMediaType('print');
      await pagina.pdf({ path: path.join(RAIZ, pdf), format: 'A4', printBackground: true, preferCSSPageSize: true });
      console.log('  ✓', pdf);
    }
  } finally {
    await navegador.close();
  }
}

module.exports = generarPdf;

if (require.main === module) {
  generarPdf().catch((e) => {
    console.error('No se pudo generar el PDF:', e.message);
    process.exit(1);
  });
}
