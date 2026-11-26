// Genera todas las páginas del portafolio a partir de los archivos de esta carpeta.
//
//   node herramientas/generar.js
//
// Escribe: index.html, galeria.html, cv.html (español), en/index.html, en/galeria.html,
// en/cv.html (inglés) y js/proyectos.js. No edites esas páginas a mano: edita
// perfil.js, proyectos.js, proyectos.en.js, explicaciones.js, seguridad.js o
// seguridad-proyectos.js y vuelve a generar.

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const perfil = require('./perfil.js');
const proyectosEs = require('./proyectos.js');
const proyectosEn = require('./proyectos.en.js');
const explicaciones = require('./explicaciones.js');
const seguridad = require('./seguridad.js');
const seguridadProyectos = require('./seguridad-proyectos.js');
const medidas = require('./medidas.json');

// ── Textos fijos de la interfaz ──────────────────────────────────────────────
const UI = {
  es: {
    lang: 'es',
    otroIdioma: 'English',
    otroIdiomaCorto: 'EN',
    menu: { 'sobre-mi': 'Sobre mí', proyectos: 'Proyectos', seguridad: 'Seguridad', formacion: 'Formación', habilidades: 'Habilidades', contacto: 'Contacto' },
    tema: 'Cambiar entre modo claro y oscuro',
    verProyectos: 'Ver proyectos',
    descargarCv: 'Descargar CV',
    contacto: 'Contacto',
    cifras: (n, f, v) => [[n, 'proyectos'], [f, 'capturas con explicación'], [v, 'proyectos en vivo']],
    sobreMi: 'Sobre mí',
    proyectos: 'Proyectos',
    introProyectos: (f) => `Lo que he construido en la universidad y por mi cuenta: desde sistemas con base de datos que resuelven un problema real hasta juegos y prácticas para aprender una tecnología nueva. Cada proyecto tiene una galería con sus pantallas y cómo funciona cada una (${f} capturas en total).`,
    filtrar: 'Filtrar proyectos por tecnología',
    filtros: { todos: 'Todos', javascript: 'JavaScript', node: 'Node.js', php: 'PHP', java: 'Java', bd: 'Bases de datos', 'tiempo-real': 'Tiempo real', 'en-vivo': 'En vivo' },
    grupos: {
      destacados: ['Proyectos principales', 'Sistemas completos, de principio a fin.'],
      php: ['Backend con PHP y MySQL', 'Sistemas con inicio de sesión, roles y base de datos, hechos para la materia de ambientes web.'],
      web: ['Aplicaciones web y juegos', 'Proyectos más cortos para practicar JavaScript, APIs y tiempo real.'],
      java: ['Java y otras prácticas', 'Programas de escritorio en Java, estructuras de datos y prácticas cortas.'],
    },
    verGaleria: (n) => `Ver galería · ${n} ${n === 1 ? 'foto' : 'fotos'} →`,
    verVivo: 'Ver en vivo →',
    codigo: 'Código →',
    codigoGithub: 'Código en GitHub →',
    fotoDe: (t, i) => `Ver ${t} en la galería, foto ${i}`,
    seguridad: 'Seguridad en mis proyectos',
    introSeguridad: 'Estudio ciberseguridad, así que la aplico en lo que construyo. Estas son las prácticas que uso; cada enlace lleva a la pantalla donde se ve en funcionamiento.',
    dondeLoApliqué: 'Dónde lo apliqué',
    seguridadProyecto: 'Seguridad',
    medidas: (n) => `${n} ${n === 1 ? 'medida' : 'medidas'}`,
    mejoraria: 'Lo que mejoraría',
    formacion: 'Formación',
    habilidades: 'Habilidades',
    introHabilidades: 'Las tecnologías que he usado en los proyectos de arriba.',
    contactoTitulo: 'Contacto',
    introContacto: '¿Tienes una vacante, un proyecto o una pregunta? Escríbeme.',
    correo: 'Correo',
    cvCompleto: 'CV en PDF',
    galeria: {
      titulo: 'Galería',
      volver: '← Todos los proyectos',
      queHice: 'Qué hice',
      capturas: (n) => `${n} ${n === 1 ? 'captura' : 'capturas'}`,
      anterior: '← Proyecto anterior',
      siguiente: 'Proyecto siguiente →',
      noEncontrado: 'Proyecto no encontrado',
      noEncontradoTexto: 'Ese enlace no corresponde a ningún proyecto.',
      verTodos: 'Ver todos los proyectos',
      ampliar: (i, p) => `Ampliar foto ${i}: ${p}`,
      cerrar: 'Cerrar',
      fotoAnterior: 'Foto anterior',
      fotoSiguiente: 'Foto siguiente',
      sinJs: 'Esta galería necesita JavaScript.',
    },
    cv: {
      titulo: 'Currículum',
      guardar: 'Descargar PDF',
      archivo: 'CV-Luis-Angel-Vazquez-Estrada.pdf',
      verEnLinea: 'ver en línea',
      volver: '← Volver al portafolio',
      perfil: 'Perfil',
      formacion: 'Formación',
      proyectos: 'Proyectos destacados',
      seguridad: 'Seguridad',
      habilidades: 'Habilidades',
      portafolio: 'Portafolio con capturas y demos',
    },
  },
  en: {
    lang: 'en',
    otroIdioma: 'Español',
    otroIdiomaCorto: 'ES',
    menu: { 'sobre-mi': 'About', proyectos: 'Projects', seguridad: 'Security', formacion: 'Education', habilidades: 'Skills', contacto: 'Contact' },
    tema: 'Toggle light and dark mode',
    verProyectos: 'See projects',
    descargarCv: 'Download CV',
    contacto: 'Contact',
    cifras: (n, f, v) => [[n, 'projects'], [f, 'screenshots, each explained'], [v, 'live projects']],
    sobreMi: 'About me',
    proyectos: 'Projects',
    introProyectos: (f) => `What I've built at university and on my own: from database-driven systems that solve a real problem to games and exercises for learning a new technology. Each project has a gallery of its screens and how each one works (${f} screenshots in total).`,
    filtrar: 'Filter projects by technology',
    filtros: { todos: 'All', javascript: 'JavaScript', node: 'Node.js', php: 'PHP', java: 'Java', bd: 'Databases', 'tiempo-real': 'Real time', 'en-vivo': 'Live' },
    grupos: {
      destacados: ['Main projects', 'Complete systems, end to end.'],
      php: ['Backend with PHP and MySQL', 'Systems with sign-in, roles and a database, built for the web development course.'],
      web: ['Web apps and games', 'Shorter projects to practice JavaScript, APIs and real-time features.'],
      java: ['Java and other exercises', 'Java desktop programs, data structures and short exercises.'],
    },
    verGaleria: (n) => `See gallery · ${n} ${n === 1 ? 'photo' : 'photos'} →`,
    verVivo: 'See it live →',
    codigo: 'Code →',
    codigoGithub: 'Code on GitHub →',
    fotoDe: (t, i) => `See ${t} in the gallery, photo ${i}`,
    seguridad: 'Security in my projects',
    introSeguridad: "I study cybersecurity, so I apply it to what I build. These are the practices I use; each link opens the screen where you can see it at work.",
    dondeLoApliqué: 'Where I applied it',
    seguridadProyecto: 'Security',
    medidas: (n) => `${n} ${n === 1 ? 'measure' : 'measures'}`,
    mejoraria: "What I'd improve",
    formacion: 'Education',
    habilidades: 'Skills',
    introHabilidades: "The technologies I've used in the projects above.",
    contactoTitulo: 'Contact',
    introContacto: 'Have an opening, a project or a question? Get in touch.',
    correo: 'Email',
    cvCompleto: 'CV (PDF)',
    galeria: {
      titulo: 'Gallery',
      volver: '← All projects',
      queHice: 'What I did',
      capturas: (n) => `${n} ${n === 1 ? 'screenshot' : 'screenshots'}`,
      anterior: '← Previous project',
      siguiente: 'Next project →',
      noEncontrado: 'Project not found',
      noEncontradoTexto: "That link doesn't match any project.",
      verTodos: 'See all projects',
      ampliar: (i, p) => `Enlarge photo ${i}: ${p}`,
      cerrar: 'Close',
      fotoAnterior: 'Previous photo',
      fotoSiguiente: 'Next photo',
      sinJs: 'This gallery needs JavaScript.',
    },
    cv: {
      titulo: 'Résumé',
      guardar: 'Download PDF',
      archivo: 'Resume-Luis-Angel-Vazquez-Estrada.pdf',
      verEnLinea: 'view online',
      volver: '← Back to portfolio',
      perfil: 'Profile',
      formacion: 'Education',
      proyectos: 'Featured projects',
      seguridad: 'Security',
      habilidades: 'Skills',
      portafolio: 'Portfolio with screenshots and demos',
    },
  },
};

// ── Utilidades ───────────────────────────────────────────────────────────────
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const t = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] : v);
// Texto que el dueño aún tiene que llenar: se resalta en la página
const txt = (s) => (String(s ?? '').includes('PENDIENTE') ? `<mark class="pendiente">${esc(s)}</mark>` : esc(s));
function aporte(s) {
  const m = s.match(/^([^:]{3,45}):\s(.+)$/);
  return m ? `<strong>${esc(m[1])}:</strong> ${esc(m[2])}` : esc(s);
}
function escribir(rel, contenido) {
  const destino = path.join(RAIZ, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido);
  console.log('  ✓', rel);
}

// ── Datos de proyectos por idioma ────────────────────────────────────────────
const faltan = [];
// Apartado de seguridad de un proyecto en el idioma pedido (undefined si no tiene)
function seguridadDe(slug, lang) {
  const s = seguridadProyectos[slug];
  if (!s) return undefined;
  const lista = (items = []) => items.map((x) => {
    if (!x[lang]) faltan.push(`traducción de la seguridad de ${slug}`);
    return x[lang] || x.es;
  });
  return { aplica: lista(s.aplica), mejora: lista(s.mejora) };
}
function proyectos(lang) {
  return proyectosEs.map((p) => {
    const en = proyectosEn[p.slug] || {};
    if (lang === 'en' && !proyectosEn[p.slug]) faltan.push(`traducción de ${p.slug}`);
    const pick = (campo) => (lang === 'en' && en[campo] !== undefined ? en[campo] : p[campo]);
    return {
      slug: p.slug,
      titulo: p.titulo,
      etiqueta: pick('etiqueta'),
      queEs: pick('queEs'),
      descripcion: pick('descripcion'),
      aportes: pick('aportes'),
      tecnologias: p.tecnologias,
      repo: p.repo,
      repoTexto: lang === 'en' ? en.repoTexto || p.repoTexto : p.repoTexto,
      demo: p.demo,
      demoNota: p.demo ? pick('demoNota') : undefined,
      seguridad: seguridadDe(p.slug, lang),
      fotos: p.fotos.map(([f, pie]) => {
        const clave = `${p.slug}/${f}.webp`;
        if (!medidas[clave]) faltan.push(`medidas de ${clave}`);
        const [w, h] = medidas[clave] || [0, 0];
        let explicacion = explicaciones[p.slug]?.[f];
        if (lang === 'en') {
          const tr = en.fotos?.[f];
          if (!tr) faltan.push(`traducción de la foto ${clave}`);
          [pie, explicacion] = tr || [pie, explicacion];
        }
        if (!explicacion) faltan.push(`explicación de ${clave}`);
        return { archivo: f, src: `img/galeria/${clave}`, pie, explicacion, w, h };
      }),
    };
  });
}

// Etiquetas para los filtros
function etiquetas(p) {
  const e = new Set();
  for (const tec of p.tecnologias) {
    if (['JavaScript', 'TypeScript', 'React', 'Canvas', 'localStorage', 'Audio API'].includes(tec)) e.add('javascript');
    if (tec === 'Node.js') e.add('node').add('javascript');
    if (tec === 'PHP') e.add('php');
    if (tec === 'Java') e.add('java');
    if (['MySQL', 'PostgreSQL', 'SQLite', 'Sequelize', 'PDO'].includes(tec)) e.add('bd');
    if (['Socket.IO', 'WebSocket'].includes(tec)) e.add('tiempo-real');
  }
  if (p.demo) e.add('en-vivo');
  return [...e].join(' ');
}

// ── Piezas comunes de las páginas ────────────────────────────────────────────
const scriptTema = `<script>(function(){try{var t=localStorage.getItem('tema');if(t)document.documentElement.setAttribute('data-tema',t);}catch(e){}})();</script>`;

function cabeza({ lang, base, titulo, descripcion, ruta, extra = '' }) {
  const url = perfil.sitio + ruta;
  const imagen = perfil.sitio + (lang === 'es' ? 'img/vista-previa.jpg' : 'img/vista-previa-en.jpg');
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(descripcion)}">
  <link rel="icon" href="${base}img/icono.svg" type="image/svg+xml">
  <link rel="icon" href="${base}img/icono-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="${base}img/icono-180.png">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(perfil.nombre)}">
  <meta property="og:title" content="${esc(titulo)}">
  <meta property="og:description" content="${esc(descripcion)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${imagen}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(perfil.nombre)}: ${esc(t(perfil.titulo, lang))}">
  <meta property="og:locale" content="${lang === 'es' ? 'es_MX' : 'en_US'}">
  <meta name="twitter:card" content="summary_large_image">
  ${scriptTema}
  <link rel="stylesheet" href="${base}css/estilos.css">${extra}
</head>`;
}

function nav({ ui, inicio, otraUrl, idOtro = '' }) {
  const items = Object.entries(ui.menu).map(([id, nombre]) => `<li><a href="${inicio}#${id}">${nombre}</a></li>`).join('\n        ');
  return `  <nav class="barra">
    <div class="contenedor barra-interior">
      <ul class="menu">
        ${items}
      </ul>
      <div class="acciones-barra">
        <a class="cambiar-idioma" href="${otraUrl}"${idOtro} hreflang="${ui.lang === 'es' ? 'en' : 'es'}" lang="${ui.lang === 'es' ? 'en' : 'es'}" title="${ui.otroIdioma}">${ui.otroIdiomaCorto}</a>
        <button type="button" class="cambiar-tema" id="cambiar-tema" aria-label="${ui.tema}" title="${ui.tema}">
          <svg class="icono-sol" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>
          <svg class="icono-luna" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/></svg>
        </button>
      </div>
    </div>
  </nav>`;
}

const pie = () => `  <footer>
    <div class="contenedor">${esc(perfil.nombre)}</div>
  </footer>`;

// ── Portada ──────────────────────────────────────────────────────────────────
function portada(lang) {
  const ui = UI[lang];
  const base = lang === 'es' ? '' : '../';
  const lista = proyectos(lang);
  const P = Object.fromEntries(lista.map((p) => [p.slug, p]));
  const totalFotos = lista.reduce((n, p) => n + p.fotos.length, 0);
  const enVivo = lista.filter((p) => p.demo).length;
  const galeria = (slug) => `galeria.html?p=${slug}`;

  function img(slug, f, s) {
    const p = P[slug];
    const i = p.fotos.findIndex((x) => x.archivo === f);
    if (i < 0) throw new Error(`No existe la foto ${slug}/${f}`);
    const foto = p.fotos[i];
    return `${s}<a class="captura" href="${galeria(slug)}#foto-${i + 1}" aria-label="${esc(ui.fotoDe(p.titulo, i + 1))}">
${s}  <img src="${base}${foto.src}" alt="${esc(p.titulo)}: ${esc(foto.pie)}" width="${foto.w}" height="${foto.h}" loading="lazy">
${s}</a>`;
  }
  function enlaces(p, s, corto) {
    const partes = [`<a class="ver-galeria" href="${galeria(p.slug)}">${ui.verGaleria(p.fotos.length)}</a>`];
    if (p.demo) partes.push(`<a class="ver-vivo" href="${p.demo}" target="_blank" rel="noopener">${ui.verVivo}</a>`);
    partes.push(p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">${corto ? ui.codigo : ui.codigoGithub}</a>` : `<span class="privado">${esc(p.repoTexto)}</span>`);
    const nota = p.demoNota ? `\n${s}<p class="nota-demo">${esc(p.demoNota)}</p>` : '';
    return `${s}<div class="enlaces">\n${partes.map((x) => `${s}  ${x}`).join('\n')}\n${s}</div>${nota}`;
  }
  const tecs = (p) => `<ul class="tecnologias">${p.tecnologias.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  // Apartado plegable con la seguridad del proyecto
  const candado = '<svg class="candado" viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';
  function segProyecto(p, s) {
    if (!p.seguridad) return '';
    const { aplica, mejora } = p.seguridad;
    const li = (x) => `${s}      <li>${esc(x)}</li>`;
    const mejoras = mejora.length
      ? `${s}    <p class="mejora-titulo">${ui.mejoraria}</p>\n${s}    <ul class="mejoras">\n${mejora.map(li).join('\n')}\n${s}    </ul>\n`
      : '';
    return `${s}<details class="seguridad-proyecto">
${s}  <summary>${candado}<span>${ui.seguridadProyecto}</span><small>${ui.medidas(aplica.length)}</small></summary>
${s}  <div class="contenido-seguridad">
${s}    <ul>
${aplica.map(li).join('\n')}
${s}    </ul>
${mejoras}${s}  </div>
${s}</details>
`;
  }

  function destacado(slug, portadas, telefonos = false) {
    const p = P[slug];
    const s = '        ';
    const medios = telefonos
      ? `${s}    <div class="telefonos">\n${portadas.map((f) => img(slug, f, s + '      ')).join('\n')}\n${s}    </div>`
      : portadas.map((f) => img(slug, f, s + '    ')).join('\n');
    return `${s}<article class="destacado" data-etiquetas="${etiquetas(p)}">
${s}  <div class="medios">
${medios}
${s}  </div>
${s}  <div>
${p.etiqueta ? `${s}    <span class="etiqueta-equipo">${esc(p.etiqueta)}</span>\n` : ''}${s}    <h3>${esc(p.titulo)}</h3>
${s}    <p class="que-es">${esc(p.queEs)}</p>
${s}    <p>${esc(p.descripcion[0])}</p>
${p.aportes ? `${s}    <ul class="aportes">\n${p.aportes.map((a) => `${s}      <li>${aporte(a)}</li>`).join('\n')}\n${s}    </ul>\n` : ''}${segProyecto(p, s + '    ')}${s}    ${tecs(p)}
${enlaces(p, s + '    ')}
${s}  </div>
${s}</article>`;
  }
  function tarjeta(slug, portadas) {
    const p = P[slug];
    const s = '          ';
    const medios = portadas.length > 1
      ? `${s}  <div class="par">\n${portadas.map((f) => img(slug, f, s + '    ')).join('\n')}\n${s}  </div>`
      : img(slug, portadas[0], s + '  ');
    return `${s}<article class="tarjeta" data-etiquetas="${etiquetas(p)}">
${medios}
${s}  <div class="cuerpo">
${s}    <h3>${esc(p.titulo)}</h3>
${s}    <p>${esc(p.queEs)} ${esc(p.descripcion[0])}</p>
${segProyecto(p, s + '    ')}${s}    ${tecs(p)}
${enlaces(p, s + '    ', true)}
${s}  </div>
${s}</article>`;
  }
  const grupo = (clave, contenido) => `      <div class="grupo-proyectos">
        <h3 class="subtitulo-grupo">${ui.grupos[clave][0]}</h3>
        <p class="intro-seccion">${ui.grupos[clave][1]}</p>
${contenido}
      </div>`;

  // Cuántos proyectos tiene cada filtro
  const conteo = {};
  for (const p of lista) for (const e of etiquetas(p).split(' ').filter(Boolean)) conteo[e] = (conteo[e] || 0) + 1;
  const filtros = Object.entries(ui.filtros)
    .map(([clave, nombre]) => `<button type="button" class="filtro" data-filtro="${clave}" aria-pressed="${clave === 'todos'}">${nombre} <span>${clave === 'todos' ? lista.length : conteo[clave] || 0}</span></button>`)
    .join('\n          ');

  const seccionProyectos = `<section id="proyectos">
      <h2>${ui.proyectos}</h2>
      <p class="intro-seccion">${ui.introProyectos(totalFotos)}</p>

      <div class="filtros" role="group" aria-label="${ui.filtrar}">
          ${filtros}
      </div>

${grupo('destacados', [destacado('offrly', ['03-inicio', '10-negociacion'], true), destacado('minisuper', ['03-venta', '12-reportes']), destacado('doo-barber', ['01-reserva', '06-agenda']), destacado('duelo-ronin', ['04-pelea'])].join('\n\n'))}

${grupo('php', [destacado('tecnoaula', ['03-admin-dashboard', '15-alumno-curso']), destacado('calificaciones', ['03-panel', '04-todas-las-calificaciones']), destacado('pokedex', ['01-charizard', '03-catalogo']), destacado('catalogo', ['02-resumen-con-descuento', '01-formulario'])].join('\n\n'))}

${grupo('web', `        <div class="tarjetas">\n${[tarjeta('chat-socket', ['02-conversacion']), tarjeta('lightship-weather', ['01-mexico']), tarjeta('duomath', ['01-ruta']), tarjeta('bio-terminal', ['03-desgaste']), tarjeta('reproductor', ['03-reproduciendo']), tarjeta('pong', ['02-partida']), tarjeta('cotizador', ['02-cotizacion'])].join('\n\n')}\n        </div>`)}

${grupo('java', `        <div class="tarjetas">\n${[tarjeta('estructuras-datos', ['03-laberinto-nivel-3', '05-playlist']), tarjeta('poo', ['01-renta-de-vehiculos']), tarjeta('lista-tareas', ['02-despues-de-recargar'])].join('\n\n')}\n        </div>`)}
    </section>`;

  const tarjetasSeguridad = seguridad.map((s) => {
    const casos = s.casos.map((c) => {
      const p = P[c.slug];
      const i = p.fotos.findIndex((x) => x.archivo === c.foto);
      if (i < 0) throw new Error(`Seguridad: no existe la foto ${c.slug}/${c.foto}`);
      return `<li><a href="${galeria(c.slug)}#foto-${i + 1}">${esc(t(c.texto, lang))}</a></li>`;
    }).join('\n            ');
    return `        <article class="practica" id="seguridad-${s.clave}">
          <h3>${esc(t(s.titulo, lang))}</h3>
          <p>${esc(t(s.texto, lang))}</p>
          <p class="donde">${ui.dondeLoApliqué}</p>
          <ul>
            ${casos}
          </ul>
        </article>`;
  }).join('\n');

  const linea = perfil.formacion.map((f) => `        <li class="hito">
          <p class="periodo">${txt(t(f.periodo, lang))}</p>
          <h3>${txt(t(f.titulo, lang))}</h3>
          <p class="lugar">${txt(t(f.lugar, lang))}</p>
${t(f.detalle, lang) ? `          <p>${txt(t(f.detalle, lang))}</p>\n` : ''}        </li>`).join('\n');

  const habilidades = perfil.habilidades.map((g) => `        <div>
          <h3>${esc(t(g.grupo, lang))}</h3>
          <ul class="habilidades">
            ${g.items.map((x) => `<li>${esc(t(x, lang))}</li>`).join('\n            ')}
          </ul>
        </div>`).join('\n');

  const contacto = [
    `<li><span>${ui.correo}</span><a href="mailto:${perfil.correo}">${perfil.correo}</a></li>`,
    `<li><span>GitHub</span><a href="${perfil.github}" target="_blank" rel="noopener">${perfil.github.replace('https://github.com/', '')}</a></li>`,
    perfil.linkedin ? `<li><span>LinkedIn</span><a href="${perfil.linkedin}" target="_blank" rel="noopener">${perfil.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '')}</a></li>` : '',
    `<li><span>CV</span><a href="cv.pdf" download="${ui.cv.archivo}">${ui.cvCompleto}</a> · <a href="cv.html">${ui.cv.verEnLinea}</a></li>`,
  ].filter(Boolean).join('\n        ');

  const cifras = ui.cifras(lista.length, totalFotos, enVivo).map(([n, s]) => `<li><strong>${n}</strong><span>${s}</span></li>`).join('\n          ');

  return `${cabeza({ lang, base, titulo: `${perfil.nombre} | ${lang === 'es' ? 'Portafolio' : 'Portfolio'}`, descripcion: t(perfil.resumen, lang), ruta: lang === 'es' ? '' : 'en/', extra: `\n  <link rel="alternate" hreflang="${lang === 'es' ? 'en' : 'es'}" href="${lang === 'es' ? 'en/' : '../'}">` })}
<body>
${nav({ ui, inicio: '', otraUrl: lang === 'es' ? 'en/' : '../' })}

  <main class="contenedor">
    <header class="encabezado" id="inicio">
      <div class="foto">
        <img src="${base}${perfil.foto}" alt="${esc(perfil.nombre)}" width="480" height="600" onerror="this.parentElement.classList.add('sin-foto');this.remove()">
      </div>

      <div class="presentacion">
        <p class="kicker"><span aria-hidden="true">&gt;<i class="cursor">_</i></span> ${esc(t(perfil.titulo, lang))}</p>
        <h1>${esc(perfil.nombre)}</h1>
        <p class="lema">${esc(t(perfil.lema, lang))}</p>
        <p class="resumen">${esc(t(perfil.resumen, lang))}</p>
        <div class="botones">
          <a class="boton principal" href="#proyectos">${ui.verProyectos}</a>
          <a class="boton" href="cv.pdf" download="${ui.cv.archivo}">${ui.descargarCv}</a>
          <a class="boton" href="#contacto">${ui.contacto}</a>
        </div>
        <ul class="cifras">
          ${cifras}
        </ul>
      </div>
    </header>

    <section id="sobre-mi">
      <h2>${ui.sobreMi}</h2>
      ${t(perfil.sobreMi, lang).map((x) => `<p>${esc(x)}</p>`).join('\n      ')}
    </section>

    ${seccionProyectos}

    <section id="seguridad">
      <h2>${ui.seguridad}</h2>
      <p class="intro-seccion">${ui.introSeguridad}</p>
      <div class="practicas">
${tarjetasSeguridad}
      </div>
    </section>

    <section id="formacion">
      <h2>${ui.formacion}</h2>
      <ol class="linea-tiempo">
${linea}
      </ol>
    </section>

    <section id="habilidades">
      <h2>${ui.habilidades}</h2>
      <p class="intro-seccion">${ui.introHabilidades}</p>
      <div class="grupos-habilidades">
${habilidades}
      </div>
    </section>

    <section id="contacto">
      <h2>${ui.contactoTitulo}</h2>
      <p class="intro-seccion">${ui.introContacto}</p>
      <ul class="contacto">
        ${contacto}
      </ul>
    </section>
  </main>

${pie()}
  <script src="${base}js/sitio.js"></script>
</body>
</html>
`;
}

// ── Galería ──────────────────────────────────────────────────────────────────
function paginaGaleria(lang) {
  const ui = UI[lang];
  const g = ui.galeria;
  const base = lang === 'es' ? '' : '../';
  const textos = { ...g, capturas: undefined, ampliar: undefined, queHice: g.queHice, verVivo: ui.verVivo, codigoGithub: ui.codigoGithub, seguridad: ui.seguridadProyecto, mejoraria: ui.mejoraria };
  return `${cabeza({ lang, base, titulo: `${g.titulo} | ${perfil.nombre}`, descripcion: t(perfil.resumen, lang), ruta: (lang === 'es' ? '' : 'en/') + 'galeria.html' })}
<body>
${nav({ ui, inicio: 'index.html', otraUrl: lang === 'es' ? 'en/galeria.html' : '../galeria.html', idOtro: ' id="otro-idioma"' })}

  <main class="contenedor">
    <a class="volver" href="index.html#proyectos">${g.volver}</a>

    <header class="cabecera-galeria" id="cabecera">
      <h1>${g.titulo}</h1>
      <noscript><p>${g.sinJs} <a href="index.html#proyectos">${g.verTodos}</a></p></noscript>
    </header>

    <section class="galeria" aria-label="${g.titulo}">
      <div class="rejilla" id="rejilla"></div>
    </section>

    <nav class="entre-proyectos" id="entre-proyectos" aria-label="${g.anterior} / ${g.siguiente}"></nav>
  </main>

  <dialog class="visor" id="visor" aria-label="${g.titulo}">
    <div class="visor-barra">
      <span id="visor-contador"></span>
      <button type="button" class="visor-cerrar" id="visor-cerrar" aria-label="${g.cerrar}">✕</button>
    </div>
    <figure class="visor-figura">
      <img id="visor-img" alt="">
      <figcaption id="visor-pie"></figcaption>
    </figure>
    <button type="button" class="visor-flecha anterior" id="visor-anterior" aria-label="${g.fotoAnterior}">‹</button>
    <button type="button" class="visor-flecha siguiente" id="visor-siguiente" aria-label="${g.fotoSiguiente}">›</button>
  </dialog>

${pie()}
  <script>
    window.GALERIA = ${JSON.stringify({ lang, base, nombre: perfil.nombre, textos })};
    window.GALERIA.textos.capturas = ${ui.galeria.capturas.toString()};
    window.GALERIA.textos.ampliar = ${ui.galeria.ampliar.toString()};
  </script>
  <script src="${base}js/proyectos.js"></script>
  <script src="${base}js/galeria.js"></script>
  <script src="${base}js/sitio.js"></script>
</body>
</html>
`;
}

// ── CV ───────────────────────────────────────────────────────────────────────
function paginaCv(lang) {
  const ui = UI[lang];
  const c = ui.cv;
  const base = lang === 'es' ? '' : '../';
  const lista = proyectos(lang);
  const P = Object.fromEntries(lista.map((p) => [p.slug, p]));
  const sitio = perfil.sitio + (lang === 'en' ? 'en/' : '');
  const destacados = ['offrly', 'minisuper', 'doo-barber', 'tecnoaula', 'duelo-ronin'].map((s) => {
    const p = P[s];
    return `        <li><strong>${esc(p.titulo)}</strong>${p.etiqueta ? ` <em>(${esc(p.etiqueta)})</em>` : ''}. ${esc(p.queEs)} <span class="tec">${p.tecnologias.map(esc).join(' · ')}</span></li>`;
  }).join('\n');
  const formacion = perfil.formacion.map((f) => `        <li><p class="periodo">${txt(t(f.periodo, lang))}</p><p><strong>${txt(t(f.titulo, lang))}</strong>, ${txt(t(f.lugar, lang))}</p>${t(f.detalle, lang) ? `<p>${txt(t(f.detalle, lang))}</p>` : ''}</li>`).join('\n');
  const contacto = [
    `<a href="mailto:${perfil.correo}">${perfil.correo}</a>`,
    `<a href="${perfil.github}">${perfil.github.replace('https://', '')}</a>`,
    perfil.linkedin ? `<a href="${perfil.linkedin}">${perfil.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>` : '',
    `<a href="${sitio}">${sitio.replace('https://', '')}</a>`,
  ].filter(Boolean).join(' · ');
  return `${cabeza({ lang, base, titulo: `${c.titulo} | ${perfil.nombre}`, descripcion: t(perfil.resumen, lang), ruta: (lang === 'es' ? '' : 'en/') + 'cv.html' })}
<body class="pagina-cv">
  <div class="cv-acciones">
    <a href="index.html">${c.volver}</a>
    <a class="boton principal" href="cv.pdf" download="${c.archivo}">${c.guardar}</a>
  </div>

  <article class="cv">
    <header>
      <h1>${esc(perfil.nombre)}</h1>
      <p class="cv-titulo">${esc(t(perfil.titulo, lang))}</p>
      <p class="cv-contacto">${contacto}</p>
    </header>

    <section>
      <h2>${c.perfil}</h2>
      <p>${esc(t(perfil.resumen, lang))}</p>
    </section>

    <section>
      <h2>${c.formacion}</h2>
      <ul class="cv-formacion">
${formacion}
      </ul>
    </section>

    <section>
      <h2>${c.proyectos}</h2>
      <ul class="cv-proyectos">
${destacados}
      </ul>
      <p class="cv-nota">${c.portafolio}: <a href="${sitio}">${sitio.replace('https://', '')}</a></p>
    </section>

    <section>
      <h2>${c.seguridad}</h2>
      <p>${esc(t(perfil.cvSeguridad, lang))}</p>
    </section>

    <section>
      <h2>${c.habilidades}</h2>
      <ul class="cv-habilidades">
${perfil.habilidades.map((g) => `        <li><strong>${esc(t(g.grupo, lang))}:</strong> ${g.items.map((x) => esc(t(x, lang))).join(', ')}</li>`).join('\n')}
      </ul>
    </section>
  </article>
  <script src="${base}js/sitio.js"></script>
</body>
</html>
`;
}

// ── Escribir todo ────────────────────────────────────────────────────────────
console.log('Generando portafolio…');
escribir('js/proyectos.js', `// Generado por herramientas/generar.js. No lo edites a mano.\nwindow.PROYECTOS = ${JSON.stringify({ es: proyectos('es'), en: proyectos('en') }, null, 1)};\n`);
escribir('index.html', portada('es'));
escribir('en/index.html', portada('en'));
escribir('galeria.html', paginaGaleria('es'));
escribir('en/galeria.html', paginaGaleria('en'));
escribir('cv.html', paginaCv('es'));
escribir('en/cv.html', paginaCv('en'));

const pendientes = JSON.stringify(perfil).match(/PENDIENTE[^"]*/g) || [];
if (faltan.length) console.log('\n⚠ Falta:', [...new Set(faltan)].join('\n  '));
if (pendientes.length) console.log(`\n⚠ Datos por completar en perfil.js (${pendientes.length}):\n  ` + pendientes.join('\n  '));
if (!perfil.linkedin) console.log('\nℹ LinkedIn vacío: el enlace no se muestra.');
require('./generar-pdf.js')()
  .then(() => console.log('\nListo.'))
  .catch((e) => console.log('\n⚠ Las páginas quedaron listas, pero no se generaron los PDF del CV: ' + e.message));
