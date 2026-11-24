// Comportamiento compartido: botón de modo claro/oscuro y filtros de proyectos.
(function () {
  const raiz = document.documentElement;

  // ── Modo claro / oscuro ─────────────────────────────────────────────────
  // Sin elección guardada se sigue el modo del sistema. Al pulsar el botón se
  // guarda la elección en localStorage y se respeta en todas las páginas.
  const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)');
  const temaActual = () => raiz.getAttribute('data-tema') || (sistemaOscuro.matches ? 'oscuro' : 'claro');
  const boton = document.getElementById('cambiar-tema');
  function pintarBoton() {
    if (boton) boton.setAttribute('aria-pressed', String(temaActual() === 'oscuro'));
  }
  if (boton) {
    boton.addEventListener('click', () => {
      const nuevo = temaActual() === 'oscuro' ? 'claro' : 'oscuro';
      raiz.setAttribute('data-tema', nuevo);
      try { localStorage.setItem('tema', nuevo); } catch (e) { /* modo privado: no se guarda */ }
      pintarBoton();
    });
    sistemaOscuro.addEventListener('change', pintarBoton);
    pintarBoton();
  }

  // ── Filtros de proyectos ────────────────────────────────────────────────
  const filtros = document.querySelectorAll('.filtro');
  if (!filtros.length) return;
  const proyectos = document.querySelectorAll('#proyectos [data-etiquetas]');
  const grupos = document.querySelectorAll('#proyectos .grupo-proyectos');

  function aplicar(clave) {
    filtros.forEach((f) => f.setAttribute('aria-pressed', String(f.dataset.filtro === clave)));
    proyectos.forEach((p) => {
      p.hidden = clave !== 'todos' && !p.dataset.etiquetas.split(' ').includes(clave);
    });
    // Oculta los grupos que se quedaron sin proyectos visibles
    grupos.forEach((g) => {
      g.hidden = ![...g.querySelectorAll('[data-etiquetas]')].some((p) => !p.hidden);
    });
  }
  filtros.forEach((f) => f.addEventListener('click', () => aplicar(f.dataset.filtro)));
})();
