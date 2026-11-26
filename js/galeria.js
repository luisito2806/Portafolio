// Página de galería: arma la cabecera del proyecto, la rejilla de fotos y el visor.
// Los datos vienen de js/proyectos.js y los textos de window.GALERIA (los pone generar.js).
(function () {
  const cfg = window.GALERIA;
  const T = cfg.textos;
  const proyectos = (window.PROYECTOS || {})[cfg.lang] || [];
  const slug = new URLSearchParams(location.search).get('p');
  const indice = proyectos.findIndex((p) => p.slug === slug);
  const proyecto = proyectos[indice];
  const cabecera = document.getElementById('cabecera');
  const rejilla = document.getElementById('rejilla');

  // El enlace al otro idioma conserva el proyecto y la foto
  const otro = document.getElementById('otro-idioma');
  if (otro) otro.href = otro.getAttribute('href') + location.search + location.hash;

  // Crea un elemento con atributos y texto sin usar innerHTML.
  function el(etiqueta, atributos, ...hijos) {
    const nodo = document.createElement(etiqueta);
    for (const [k, v] of Object.entries(atributos || {})) {
      if (v !== undefined && v !== null) nodo.setAttribute(k, v);
    }
    for (const h of hijos) if (h !== '' && h !== null && h !== undefined) nodo.append(h);
    return nodo;
  }

  if (!proyecto) {
    cabecera.replaceChildren(
      el('h1', {}, T.noEncontrado),
      el('p', { class: 'que-es' }, T.noEncontradoTexto),
      el('p', {}, el('a', { href: 'index.html#proyectos' }, T.verTodos))
    );
    return;
  }

  document.title = `${proyecto.titulo} · ${T.titulo} | ${cfg.nombre}`;

  // Cabecera del proyecto
  const partes = [];
  if (proyecto.etiqueta) partes.push(el('span', { class: 'etiqueta-equipo' }, proyecto.etiqueta));
  partes.push(el('h1', {}, proyecto.titulo));
  partes.push(el('p', { class: 'que-es' }, proyecto.queEs));
  const texto = el('div', { class: 'texto-proyecto' });
  for (const parrafo of proyecto.descripcion) texto.append(el('p', {}, parrafo));
  partes.push(texto);
  if (proyecto.aportes) {
    const lista = el('ul', { class: 'aportes' });
    for (const a of proyecto.aportes) {
      const m = a.match(/^([^:]{3,45}):\s(.+)$/);
      lista.append(m ? el('li', {}, el('strong', {}, m[1] + ':'), ' ' + m[2]) : el('li', {}, a));
    }
    partes.push(el('h2', { class: 'subtitulo-aportes' }, T.queHice), lista);
  }
  if (proyecto.seguridad) {
    const lista = (items, clase) => {
      const ul = el('ul', clase ? { class: clase } : {});
      for (const x of items) ul.append(el('li', {}, x));
      return ul;
    };
    const bloque = el('section', { class: 'seguridad-galeria', 'aria-label': T.seguridad },
      el('h2', { class: 'subtitulo-aportes' }, T.seguridad),
      lista(proyecto.seguridad.aplica));
    if (proyecto.seguridad.mejora.length) {
      bloque.append(el('p', { class: 'mejora-titulo' }, T.mejoraria), lista(proyecto.seguridad.mejora, 'mejoras'));
    }
    partes.push(bloque);
  }
  const tecnologias = el('ul', { class: 'tecnologias' });
  for (const t of proyecto.tecnologias) tecnologias.append(el('li', {}, t));
  partes.push(tecnologias);
  const n = proyecto.fotos.length;
  partes.push(el('div', { class: 'enlaces' },
    proyecto.demo ? el('a', { class: 'ver-vivo', href: proyecto.demo, target: '_blank', rel: 'noopener' }, T.verVivo) : '',
    el('span', { class: 'privado' }, T.capturas(n)),
    proyecto.repo
      ? el('a', { href: proyecto.repo, target: '_blank', rel: 'noopener' }, T.codigoGithub)
      : el('span', { class: 'privado' }, proyecto.repoTexto)
  ));
  if (proyecto.demoNota) partes.push(el('p', { class: 'nota-demo' }, proyecto.demoNota));
  cabecera.replaceChildren(...partes);

  // Rejilla de fotos. Las capturas de celular van en una rejilla más angosta.
  const esMovil = (f) => f.h > f.w * 1.4;
  rejilla.classList.toggle('rejilla-movil', proyecto.fotos.every(esMovil));
  proyecto.fotos.forEach((foto, i) => {
    const boton = el('button', { type: 'button', class: 'miniatura' + (esMovil(foto) ? ' movil' : ''), 'aria-label': T.ampliar(i + 1, foto.pie) },
      el('img', { src: cfg.base + foto.src, alt: foto.pie, width: foto.w, height: foto.h, loading: i < 6 ? 'eager' : 'lazy' }));
    boton.addEventListener('click', () => abrir(i));
    const pie = el('figcaption', {},
      el('span', { class: 'titulo-foto' }, el('span', { class: 'numero' }, String(i + 1).padStart(2, '0')), ' ', foto.pie));
    if (foto.explicacion) pie.append(el('span', { class: 'explicacion' }, foto.explicacion));
    rejilla.append(el('figure', { class: 'foto-galeria', id: `foto-${i + 1}` }, boton, pie));
  });

  // Proyecto anterior y siguiente
  const anterior = proyectos[(indice - 1 + proyectos.length) % proyectos.length];
  const siguiente = proyectos[(indice + 1) % proyectos.length];
  document.getElementById('entre-proyectos').append(
    el('a', { href: `galeria.html?p=${anterior.slug}`, class: 'anterior' }, el('span', {}, T.anterior), el('strong', {}, anterior.titulo)),
    el('a', { href: `galeria.html?p=${siguiente.slug}`, class: 'siguiente' }, el('span', {}, T.siguiente), el('strong', {}, siguiente.titulo))
  );

  // Visor
  const visor = document.getElementById('visor');
  const visorImg = document.getElementById('visor-img');
  const visorPie = document.getElementById('visor-pie');
  const contador = document.getElementById('visor-contador');
  let actual = 0;
  let origen = null;

  function mostrar(i) {
    actual = (i + n) % n;
    const foto = proyecto.fotos[actual];
    visorImg.src = cfg.base + foto.src;
    visorImg.alt = foto.pie;
    visorImg.width = foto.w;
    visorImg.height = foto.h;
    visorPie.replaceChildren(el('strong', {}, foto.pie));
    if (foto.explicacion) visorPie.append(el('span', {}, foto.explicacion));
    contador.textContent = `${actual + 1} / ${n}`;
    history.replaceState(null, '', `#foto-${actual + 1}`);
    if (otro) otro.href = otro.getAttribute('href').split('#')[0] + `#foto-${actual + 1}`;
    new Image().src = cfg.base + proyecto.fotos[(actual + 1) % n].src; // precarga la siguiente
  }
  function abrir(i) {
    origen = document.activeElement;
    mostrar(i);
    visor.showModal();
  }
  visor.addEventListener('close', () => {
    history.replaceState(null, '', location.pathname + location.search);
    if (otro) otro.href = otro.getAttribute('href').split('#')[0];
    if (origen) origen.focus();
  });
  document.getElementById('visor-cerrar').addEventListener('click', () => visor.close());
  document.getElementById('visor-anterior').addEventListener('click', () => mostrar(actual - 1));
  document.getElementById('visor-siguiente').addEventListener('click', () => mostrar(actual + 1));
  visor.addEventListener('click', (e) => { if (e.target === visor) visor.close(); });
  visor.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
    if (e.key === 'ArrowRight') mostrar(actual + 1);
  });
  if (n < 2) visor.classList.add('una-foto');

  // Deslizar en el celular
  let x0 = null;
  visor.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  visor.addEventListener('pointerup', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
  });

  // Abrir directo una foto si el enlace trae #foto-N
  const m = location.hash.match(/^#foto-(\d+)$/);
  if (m && +m[1] >= 1 && +m[1] <= n) abrir(+m[1] - 1);
})();
