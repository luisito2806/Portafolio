// Sección "Seguridad en mis proyectos". Cada práctica enlaza a la foto de la galería
// donde se ve aplicada (proyecto + nombre del archivo de la foto).
// Después de editar ejecuta:  node herramientas/generar.js

module.exports = [
  {
    clave: 'contrasenas',
    titulo: { es: 'Contraseñas que no se pueden leer', en: 'Passwords nobody can read' },
    texto: {
      es: 'Ninguna contraseña se guarda en texto plano: se guarda un hash con sal (bcrypt o scrypt) y se compara en tiempo constante.',
      en: 'No password is stored in plain text: a salted hash (bcrypt or scrypt) is stored and compared in constant time.',
    },
    casos: [
      { slug: 'doo-barber', foto: '05-login', texto: { es: 'Doo Barber: scrypt con sal aleatoria', en: 'Doo Barber: scrypt with random salt' } },
      { slug: 'minisuper', foto: '01-login', texto: { es: 'Mini Súper: bcrypt', en: 'Mini Súper: bcrypt' } },
      { slug: 'tecnoaula', foto: '01-login', texto: { es: 'TecnoAula: password_hash', en: 'TecnoAula: password_hash' } },
      { slug: 'calificaciones', foto: '02-registro', texto: { es: 'Portal de calificaciones', en: 'Grades portal' } },
    ],
  },
  {
    clave: 'fuerza-bruta',
    titulo: { es: 'Freno a los ataques de fuerza bruta', en: 'Brute-force protection' },
    texto: {
      es: 'Después de varios intentos fallidos el inicio de sesión se bloquea por un tiempo, por usuario y por dirección IP.',
      en: 'After several failed attempts, login is locked for a while, per user and per IP address.',
    },
    casos: [
      { slug: 'doo-barber', foto: '05-login', texto: { es: 'Doo Barber: 5 intentos por IP, bloqueo de 15 min', en: 'Doo Barber: 5 attempts per IP, 15-min lockout' } },
      { slug: 'tecnoaula', foto: '01-login', texto: { es: 'TecnoAula: 5 por correo y 20 por IP en 15 min', en: 'TecnoAula: 5 per email and 20 per IP in 15 min' } },
    ],
  },
  {
    clave: 'sesiones',
    titulo: { es: 'Sesiones seguras', en: 'Secure sessions' },
    texto: {
      es: 'La sesión se regenera al entrar para evitar fijación de sesión, las cookies son httpOnly y SameSite, y los tokens se guardan como hash y caducan.',
      en: 'The session is regenerated on login to prevent session fixation, cookies are httpOnly and SameSite, and tokens are stored hashed and expire.',
    },
    casos: [
      { slug: 'doo-barber', foto: '06-agenda', texto: { es: 'Doo Barber: token de 32 bytes con hash SHA-256, 7 días', en: 'Doo Barber: 32-byte token hashed with SHA-256, 7 days' } },
      { slug: 'minisuper', foto: '01-login', texto: { es: 'Mini Súper: cookie httpOnly y SameSite=strict de 12 h', en: 'Mini Súper: httpOnly, SameSite=strict 12-hour cookie' } },
      { slug: 'tecnoaula', foto: '04-admin-usuarios', texto: { es: 'TecnoAula: “Recordarme” con selector y validador; se cierran al desactivar al usuario', en: 'TecnoAula: “Remember me” with selector and validator; revoked when the user is disabled' } },
    ],
  },
  {
    clave: 'inyeccion-sql',
    titulo: { es: 'Sin inyección SQL', en: 'No SQL injection' },
    texto: {
      es: 'Los datos del usuario nunca se pegan dentro de una consulta: se usan consultas preparadas o el ORM.',
      en: 'User input is never concatenated into a query: prepared statements or the ORM are used.',
    },
    casos: [
      { slug: 'tecnoaula', foto: '20-foro', texto: { es: 'TecnoAula: PDO con consultas preparadas', en: 'TecnoAula: PDO prepared statements' } },
      { slug: 'calificaciones', foto: '01-login', texto: { es: 'Portal de calificaciones: mysqli preparado', en: 'Grades portal: prepared mysqli' } },
      { slug: 'minisuper', foto: '07-ventas', texto: { es: 'Mini Súper: Sequelize', en: 'Mini Súper: Sequelize' } },
    ],
  },
  {
    clave: 'xss-csrf',
    titulo: { es: 'Protección contra XSS y CSRF', en: 'XSS and CSRF protection' },
    texto: {
      es: 'Todo texto del usuario se escapa antes de mostrarse, y los formularios que cambian datos llevan un token o solo aceptan JSON desde el mismo sitio.',
      en: 'All user text is escaped before rendering, and forms that change data carry a token or only accept same-site JSON.',
    },
    casos: [
      { slug: 'tecnoaula', foto: '01-login', texto: { es: 'TecnoAula: token CSRF en cada formulario', en: 'TecnoAula: CSRF token on every form' } },
      { slug: 'doo-barber', foto: '10-configuracion', texto: { es: 'Doo Barber: escapeHtml en todo lo que se pinta', en: 'Doo Barber: escapeHtml on everything rendered' } },
      { slug: 'minisuper', foto: '03-venta', texto: { es: 'Mini Súper: Content-Security-Policy y API solo JSON', en: 'Mini Súper: Content-Security-Policy and JSON-only API' } },
    ],
  },
  {
    clave: 'autorizacion',
    titulo: { es: 'El servidor decide, no el navegador', en: 'The server decides, not the browser' },
    texto: {
      es: 'Permisos, precios y reglas se validan en el servidor. Esconder un botón no basta: si alguien manda la petición a mano, el servidor la rechaza.',
      en: "Permissions, prices and rules are validated on the server. Hiding a button isn't enough: if someone sends the request by hand, the server rejects it.",
    },
    casos: [
      { slug: 'minisuper', foto: '13-usuarios', texto: { es: 'Mini Súper: rol revisado en cada petición', en: 'Mini Súper: role checked on every request' } },
      { slug: 'tecnoaula', foto: '03-admin-dashboard', texto: { es: 'TecnoAula: 403 si el rol no corresponde', en: 'TecnoAula: 403 if the role does not match' } },
      { slug: 'doo-barber', foto: '03b-confirmar', texto: { es: 'Doo Barber: el precio sale de la base, no del navegador', en: 'Doo Barber: price comes from the database, not the browser' } },
      { slug: 'catalogo', foto: '02-resumen-con-descuento', texto: { es: 'Catálogo: ignora productos y precios alterados', en: 'Catalog: ignores tampered products and prices' } },
      { slug: 'duelo-ronin', foto: '04-pelea', texto: { es: 'Duelo Ronin: servidor autoritativo contra trampas', en: 'Duelo Ronin: authoritative server against cheating' } },
    ],
  },
  {
    clave: 'enumeracion',
    titulo: { es: 'No regalar información', en: "Don't leak information" },
    texto: {
      es: 'Las respuestas no revelan si un usuario existe y los identificadores públicos no se pueden adivinar.',
      en: "Responses don't reveal whether a user exists, and public identifiers can't be guessed.",
    },
    casos: [
      { slug: 'minisuper', foto: '01-login', texto: { es: 'Mini Súper: hash falso para tardar lo mismo', en: 'Mini Súper: dummy hash so timing is equal' } },
      { slug: 'tecnoaula', foto: '22-perfil', texto: { es: 'TecnoAula: recuperación con la misma respuesta; enlace de 1 hora', en: 'TecnoAula: same reset response either way; 1-hour link' } },
      { slug: 'doo-barber', foto: '04-reserva-celular', texto: { es: 'Doo Barber: código de cancelación aleatorio', en: 'Doo Barber: random cancellation code' } },
    ],
  },
  {
    clave: 'integridad',
    titulo: { es: 'Datos consistentes y secretos fuera del código', en: 'Consistent data, secrets out of the code' },
    texto: {
      es: 'Las operaciones de dinero e inventario son transacciones que no se guardan a medias, y las credenciales viven fuera del repositorio.',
      en: 'Money and inventory operations are transactions that never save halfway, and credentials live outside the repository.',
    },
    casos: [
      { slug: 'minisuper', foto: '05-venta-cobrada', texto: { es: 'Mini Súper: transacción con bloqueo de filas', en: 'Mini Súper: transaction with row locks' } },
      { slug: 'doo-barber', foto: '03b-confirmar', texto: { es: 'Doo Barber: fila de reservas sin empalmes', en: 'Doo Barber: booking queue with no double-booking' } },
      { slug: 'tecnoaula', foto: '08-configuracion', texto: { es: 'TecnoAula: config.php fuera del repo', en: 'TecnoAula: config.php kept out of the repo' } },
    ],
  },
];
