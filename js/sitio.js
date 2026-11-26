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

  // ── Animaciones al deslizar ─────────────────────────────────────────────
  // La entrada de la portada es CSS puro. Aquí solo se ocultan los bloques que
  // aún están debajo de la pantalla y aparecen al llegar a ellos; lo que ya se ve
  // al cargar no se toca, así no parpadea. Sin JavaScript todo queda visible.
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!sinMovimiento && 'IntersectionObserver' in window) {
    const selector = [
      'section > h2', 'section > .intro-seccion', '.subtitulo-grupo', '.filtros',
      '.destacado', '.tarjeta', '.practica', '.hito', '.grupos-habilidades > div',
      '.contacto li', '.foto-galeria', '.entre-proyectos',
    ].join(',');
    const observador = new IntersectionObserver((entradas) => {
      // Los que entran juntos aparecen uno tras otro
      entradas.filter((e) => e.isIntersecting).forEach((e, i) => {
        e.target.style.setProperty('--retraso', `${Math.min(i, 6) * 90}ms`);
        e.target.classList.add('visible');
        observador.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll(selector).forEach((nodo) => {
      if (nodo.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      nodo.classList.add('revelar');
      observador.observe(nodo);
    });
    // Al terminar, se quita la clase para no interferir con otros efectos
    document.addEventListener('transitionend', (e) => {
      if (e.target.classList && e.target.classList.contains('visible') && e.propertyName === 'transform') {
        e.target.classList.remove('revelar', 'visible');
        e.target.style.removeProperty('--retraso');
      }
    });

    // Las cifras de la portada cuentan desde cero
    document.querySelectorAll('.cifras strong').forEach((n) => {
      const final = parseInt(n.textContent, 10);
      if (!Number.isFinite(final) || final < 2) return;
      const inicio = performance.now() + 350;
      const duracion = 1100;
      n.textContent = '0';
      (function paso(ahora) {
        const avance = Math.min(Math.max((ahora - inicio) / duracion, 0), 1);
        n.textContent = String(Math.round(final * (1 - Math.pow(1 - avance, 3))));
        if (avance < 1) requestAnimationFrame(paso);
      })(performance.now());
    });
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
      // Los que quedan se acomodan con una entrada suave
      if (!p.hidden && !sinMovimiento) {
        p.classList.remove('aparecer');
        void p.offsetWidth; // reinicia la animación
        p.classList.add('aparecer');
      }
    });
    // Oculta los grupos que se quedaron sin proyectos visibles
    grupos.forEach((g) => {
      g.hidden = ![...g.querySelectorAll('[data-etiquetas]')].some((p) => !p.hidden);
    });
  }
  filtros.forEach((f) => f.addEventListener('click', () => aplicar(f.dataset.filtro)));
})();
