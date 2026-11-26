// Apartado "Seguridad" de cada proyecto (se ve en su tarjeta de la portada y en su galería).
//   aplica: lo que el proyecto ya hace para protegerse.
//   mejora: lo que le falta y cómo lo resolvería (opcional). Mostrarlo es honesto y
//           demuestra que sabes revisar tu propio código; si lo corriges en el repo, bórralo de aquí.
// Un proyecto que no aparece aquí no muestra el apartado.
// Después de editar ejecuta:  node herramientas/generar.js

module.exports = {
  minisuper: {
    aplica: [
      { es: 'Contraseñas con bcrypt. Si el usuario no existe se compara contra un hash falso, para que la respuesta tarde lo mismo y no revele qué usuarios hay.', en: "Passwords hashed with bcrypt. If the user doesn't exist, a dummy hash is compared so the response takes the same time and doesn't reveal which users exist." },
      { es: 'Sesión en una cookie httpOnly y SameSite=strict que caduca a las 12 horas.', en: 'Session in an httpOnly, SameSite=strict cookie that expires after 12 hours.' },
      { es: 'El servidor revisa el rol (administrador o cajero) en cada petición; esconder un botón no es lo único que protege.', en: 'The server checks the role (admin or cashier) on every request; hiding a button is not the only protection.' },
      { es: 'Cabeceras Content-Security-Policy, X-Frame-Options y nosniff, y una API que solo acepta JSON.', en: 'Content-Security-Policy, X-Frame-Options and nosniff headers, and an API that only accepts JSON.' },
      { es: 'Consultas con Sequelize (sin SQL armado a mano) y cada venta en una transacción con bloqueo de filas, para que caja e inventario nunca queden a medias.', en: 'Queries through Sequelize (no hand-built SQL) and every sale in a transaction with row locks, so the till and inventory never end up half-saved.' },
    ],
  },
  'doo-barber': {
    aplica: [
      { es: 'Contraseña del dueño con scrypt y sal aleatoria, comparada en tiempo constante (timingSafeEqual).', en: "Owner's password hashed with scrypt and a random salt, compared in constant time (timingSafeEqual)." },
      { es: 'Después de 5 intentos fallidos desde la misma IP, el acceso se bloquea 15 minutos.', en: 'After 5 failed attempts from the same IP, login is locked for 15 minutes.' },
      { es: 'Token de sesión aleatorio de 32 bytes; en la base solo se guarda su hash SHA-256 y caduca a los 7 días.', en: 'Random 32-byte session token; only its SHA-256 hash is stored, and it expires after 7 days.' },
      { es: 'El precio de cada servicio sale de la base de datos, nunca del navegador, y el servidor rechaza citas que se empalman.', en: 'Each service price comes from the database, never from the browser, and the server rejects overlapping bookings.' },
      { es: 'escapeHtml en todo lo que se pinta, cabeceras X-Frame-Options y nosniff, y un código de cancelación aleatorio que no se puede adivinar.', en: 'escapeHtml on everything rendered, X-Frame-Options and nosniff headers, and a random cancellation code that cannot be guessed.' },
    ],
  },
  'duelo-ronin': {
    aplica: [
      { es: 'Servidor autoritativo: la física, los golpes y la vida se calculan en el servidor. El navegador solo dice qué teclas están presionadas, así que no puede mandar “gané” ni mover al personaje a otra parte.', en: 'Authoritative server: physics, hits and health are computed on the server. The browser only reports which keys are pressed, so it cannot send “I won” or teleport the character.' },
      { es: 'Cada mensaje del jugador se limpia: solo se aceptan los botones conocidos con valor verdadero o falso; todo lo demás se descarta.', en: "Every player message is sanitized: only known buttons with a true/false value are accepted; anything else is dropped." },
      { es: 'El cupo de 2 se decide al conectarse: un tercer visitante recibe “Duelo lleno” y nunca entra a la sala ni recibe el estado de la pelea.', en: 'The 2-player limit is enforced on connect: a third visitor gets “Duel full” and never joins the room or receives the fight state.' },
      { es: 'El identificador del jugador se valida con una expresión regular; si no es válido, el servidor genera uno nuevo con crypto.randomUUID.', en: 'The player ID is validated with a regular expression; if it is invalid, the server issues a new one with crypto.randomUUID.' },
    ],
  },
  tecnoaula: {
    aplica: [
      { es: 'Contraseñas con password_hash y la sesión se regenera al entrar (session_regenerate_id) para evitar fijación de sesión.', en: 'Passwords with password_hash, and the session is regenerated on login (session_regenerate_id) to prevent session fixation.' },
      { es: 'Límite de intentos: 5 por correo y 20 por IP cada 15 minutos.', en: 'Attempt limits: 5 per email and 20 per IP every 15 minutes.' },
      { es: 'Token CSRF en cada formulario, comparado con hash_equals.', en: 'CSRF token on every form, compared with hash_equals.' },
      { es: '“Recordarme” con selector y validador generados con random_bytes, en cookie httpOnly y SameSite; se revocan al desactivar al usuario.', en: '“Remember me” with a selector and validator generated with random_bytes, in an httpOnly, SameSite cookie; revoked when the user is disabled.' },
      { es: 'PDO con consultas preparadas, y respuesta 403 si el rol no corresponde a la página.', en: 'PDO prepared statements, and a 403 response if the role does not match the page.' },
      { es: 'La recuperación de contraseña responde igual exista o no el correo, el enlace dura 1 hora y config.php con las credenciales queda fuera del repositorio.', en: 'Password reset gives the same response whether or not the email exists, the link lasts 1 hour, and config.php with the credentials stays out of the repository.' },
    ],
  },
  calificaciones: {
    aplica: [
      { es: 'Contraseñas con password_hash y password_verify.', en: 'Passwords with password_hash and password_verify.' },
      { es: 'La sesión se regenera al iniciar sesión y se destruye al salir.', en: 'The session is regenerated on login and destroyed on logout.' },
      { es: 'El panel y la lista de calificaciones redirigen al login si no hay sesión, y cada alumno solo ve sus propias calificaciones. La lista antes se abría sin sesión: lo encontré revisando mi código y lo corregí.', en: 'The dashboard and the grades list redirect to login without a session, and each student only sees their own grades. The list used to open without a session: I found it reviewing my own code and fixed it.' },
      { es: 'Consultas preparadas con mysqli para evitar inyección SQL.', en: 'Prepared mysqli statements to prevent SQL injection.' },
      { es: 'htmlspecialchars al mostrar los datos, para que nadie pueda inyectar HTML.', en: 'htmlspecialchars when rendering data, so nobody can inject HTML.' },
    ],
  },
  pokedex: {
    aplica: [
      { es: 'La PokéAPI se consulta desde PHP: el navegador nunca llama a la API externa directamente.', en: 'The PokéAPI is called from PHP: the browser never calls the external API directly.' },
      { es: 'Lo que escribe el usuario pasa por urlencode antes de ir a la API, así no puede cambiar la ruta de la petición.', en: "The user's search goes through urlencode before reaching the API, so it can't change the request path." },
      { es: 'La búsqueda y los datos se muestran con htmlspecialchars, sin riesgo de inyectar HTML.', en: 'The search term and data are rendered with htmlspecialchars, with no risk of HTML injection.' },
    ],
  },
  catalogo: {
    aplica: [
      { es: 'El precio y los productos salen del arreglo del servidor: si alguien altera el formulario, los productos que no existen se ignoran y el precio no se puede cambiar.', en: "Prices and products come from the server's array: if someone tampers with the form, unknown products are ignored and prices can't be changed." },
      { es: 'El nombre del cliente se muestra con htmlspecialchars.', en: "The customer's name is rendered with htmlspecialchars." },
      { es: 'Se valida que haya nombre y al menos un producto antes de calcular.', en: 'It checks there is a name and at least one product before calculating.' },
    ],
  },
  'chat-socket': {
    aplica: [
      { es: 'Los mensajes se pintan con textContent, no como HTML: nadie puede inyectar código en el chat de los demás.', en: "Messages are rendered with textContent, not as HTML: nobody can inject code into other people's chat." },
      { es: 'El servidor recorta el nombre a 20 caracteres y cada mensaje a 500, y descarta los vacíos.', en: 'The server trims names to 20 characters and messages to 500, and drops empty ones.' },
      { es: 'Solo puede mandar mensajes quien ya se registró con un nombre; el nombre y el color los guarda el servidor, no el navegador.', en: 'Only someone who has joined with a name can send messages; the server, not the browser, keeps the name and color.' },
    ],
  },
  'lightship-weather': {
    aplica: [
      { es: 'API de solo lectura: no recibe datos del usuario ni guarda nada.', en: "Read-only API: it doesn't take user data or store anything." },
      { es: 'La ciudad de la URL se valida contra una lista blanca antes de leer el disco, así nadie puede pedir “../algo” para leer archivos fuera de la carpeta de datos.', en: 'The city in the URL is checked against an allow-list before reading from disk, so nobody can request “../something” to read files outside the data folder.' },
      { es: 'Si la ciudad no existe responde 404 en JSON con la lista de ciudades disponibles, sin mostrar errores internos.', en: "If the city doesn't exist it returns a JSON 404 with the available cities, without exposing internal errors." },
    ],
  },
  duomath: {
    aplica: [
      { es: 'Todo corre en el navegador: no hay servidor ni base de datos que atacar, y no se envían datos a ningún lado.', en: 'Everything runs in the browser: there is no server or database to attack, and no data is sent anywhere.' },
      { es: 'Las preguntas y opciones se pintan con textContent.', en: 'Questions and options are rendered with textContent.' },
    ],
    mejora: [
      { es: 'La clave del perfil solo separa a los alumnos que usan la misma computadora y se guarda tal cual en localStorage. En un sistema real iría con hash en un servidor, como en Doo Barber.', en: 'The profile password only separates students on the same computer and is stored as-is in localStorage. In a real system it would be hashed on a server, as in Doo Barber.' },
    ],
  },
  'bio-terminal': {
    aplica: [
      { es: 'Todo corre en el navegador, sin servidor ni datos personales.', en: 'Everything runs in the browser, with no server and no personal data.' },
      { es: 'El nombre de la mascota se limita a 12 caracteres y se muestra con textContent, así que no puede inyectar HTML.', en: "The pet's name is limited to 12 characters and rendered with textContent, so it can't inject HTML." },
    ],
  },
  reproductor: {
    aplica: [
      { es: 'Todo corre en el navegador; las canciones y favoritas no salen de él.', en: 'Everything runs in the browser; songs and favorites never leave it.' },
      { es: 'El nombre de usuario se muestra con textContent.', en: 'The username is rendered with textContent.' },
    ],
    mejora: [
      { es: 'La contraseña solo separa perfiles en el mismo navegador y se guarda tal cual en localStorage. En un sistema real iría con hash en un servidor.', en: 'The password only separates profiles in the same browser and is stored as-is in localStorage. In a real system it would be hashed on a server.' },
    ],
  },
  pong: {
    aplica: [
      { es: 'El historial guardado se valida al cargarlo: si alguien lo altera en localStorage, los registros con formato inválido se descartan y el juego sigue funcionando.', en: 'Saved history is validated on load: if someone tampers with it in localStorage, malformed records are dropped and the game keeps working.' },
      { es: 'El nombre del jugador se limita a 20 caracteres y se muestra con textContent.', en: "The player's name is limited to 20 characters and rendered with textContent." },
    ],
  },
  cotizador: {
    aplica: [
      { es: 'Todo corre en el navegador, sin servidor ni datos guardados.', en: 'Everything runs in the browser, with no server and no stored data.' },
      { es: 'El nombre del cliente y el desglose se muestran con textContent; los números se convierten antes de calcular.', en: "The customer's name and the breakdown are rendered with textContent; numbers are parsed before calculating." },
    ],
  },
  'lista-tareas': {
    aplica: [
      { es: 'Las tareas solo viven en el navegador de quien las escribe; no se envían a ningún servidor.', en: "Tasks only live in the writer's browser; they're never sent to a server." },
      { es: 'Cada tarea se arma con textContent, así una tarea como <img onerror=…> se ve como texto y no ejecuta nada. Antes usaba innerHTML: lo encontré revisando mi código y lo corregí.', en: "Each task is built with textContent, so a task like <img onerror=…> shows up as text and runs nothing. It used to use innerHTML: I found it reviewing my own code and fixed it." },
      { es: 'Lo guardado en localStorage se valida al cargar: si está dañado o alterado se descarta en lugar de romper la página.', en: 'Data saved in localStorage is validated on load: if it is corrupted or tampered with, it is discarded instead of breaking the page.' },
      { es: 'No se guardan tareas vacías.', en: 'Empty tasks are not saved.' },
    ],
  },
};
