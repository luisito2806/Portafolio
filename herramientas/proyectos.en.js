// English version of each project. Keys match proyectos.js (slug) and the photo file names.
// Each photo: [title, explanation].
// After editing run:  node herramientas/generar.js

module.exports = {
  offrly: {
    etiqueta: 'Team project · 4 members',
    queEs: 'Hyperlocal platform that connects households in Morelia with tradespeople.',
    descripcion: [
      'A client posts what they need and nearby electricians and plumbers send an offer. The price is negotiated in a chat with offers and counteroffers, and at the end both sides rate each other.',
      'We built a complete, mobile-first demo to pitch to investors. The photos follow a client who posts a water leak and receives three quotes.',
    ],
    aportes: [
      'Negotiation chat: reference price range, warning when an offer is too low, − and + buttons in $50 steps, and a 4-step progress line for the deal.',
      'Posting a request: time slots, approximate location, up to 3 photos of the problem and a screen to compare quotes.',
      'Profile, chats and home: WhatsApp-style chat list with filters, a grid portfolio for tradespeople and a “New” badge for those with few reviews.',
      'Automated tests: full walkthrough in Firefox at phone size (16 of 16 passing), and I fixed the test runner on Windows.',
      'Demo content: 45 photos of profiles, portfolios and problems so everything looks real.',
      "I reviewed and merged the team's pull requests.",
    ],
    repoTexto: 'Private team repository',
    fotos: {
      '01-entrada': ['Entry screen: the visitor chooses whether they need a pro or are one.', 'The app asks for the user type first because clients and tradespeople see different screens: clients post needs, tradespeople receive them and quote.'],
      '02-perfiles': ['Client sign-in with the demo profiles.', 'It is an investor demo, so sign-in is simulated with 6 prebuilt profiles. Each visitor gets their own “world” on the server: what one guest does is not seen by another, and “Reset demo” restores everything.'],
      '03-inicio': ["Client home with their requests and tradespeople's recent work.", 'Home combines the client’s requests with a feed of recent jobs. Everything arrives over WebSocket, so the screen updates on its own.'],
      '04-oferta-oficio': ['New request, question 1: type of professional.', 'Posting a need takes 5 short questions. The first one sets the trade, which defines the jobs offered in the next one.'],
      '05-oferta-horario': ['Question 3: when, and preferred time slots.', 'The client picks when and one or more slots (morning, midday, afternoon, night) or an exact time. Slots and exact time are mutually exclusive, and the button stays disabled until the choice is valid.'],
      '06-oferta-zona-y-foto': ['Question 4: approximate area, description and a photo of the problem.', 'Only the neighborhood is asked: the exact address is shared once a deal is closed. Up to 3 photos can be uploaded; the server only accepts images and videos up to 50 MB and serves them from the same machine, no cloud.'],
      '07-oferta-presupuesto': ['Question 5: budget and summary before notifying tradespeople.', 'A summary is shown before posting. The budget is only a guide: “you can always negotiate” makes clear the final price is agreed in the chat.'],
      '08-buscando-profesionistas': ['The request is posted and nearby tradespeople are searched.', 'Once posted, the request goes out to tradespeople in that trade and the screen says quotes will show up in a few seconds.'],
      '09-chats': ['Quotes arrive as chats in negotiation.', 'Each quote opens a chat. The top banner sums up how many arrived and links straight to the comparison. The “Unread” and “Negotiating” filters come from each conversation’s state.'],
      '10-negociacion': ['Chat with the deal progress line and the reference price.', 'The 4-step line (quote, negotiation, agreement, done) shows where the deal stands. The reference range comes from the job’s base price ±20 %, rounded to $50.'],
      '11-contraoferta': ['Pending offer with buttons to accept, write or counter.', 'Offers have their own card with an accept button. Prices are not decided by the chat text but by a deterministic rules engine: each tradesperson has a limit, makes at most 3 counteroffers and ignores absurd offers.'],
      '12-comparar-cotizaciones': ['Comparing the 3 quotes, with the cheapest one marked.', 'The comparison lists quotes in arrival order and marks the cheapest, showing each tradesperson’s rating and area so the decision is based on more than price.'],
      '13-perfil-cliente': ['Client profile with reviews.', 'Clients also have a profile with reviews, because ratings go both ways: tradespeople know who they will work with.'],
      '14-inicio-profesionista': ['An electrician’s home, waiting for nearby requests.', 'Tradespeople see real-time requests for their trade near their area, plus the same feed of recent work.'],
      '15-perfil-profesionista': ['Tradesperson profile with cover photo and specialties.', 'The profile works like a professional network: cover, specialties, years of experience and rating. Nothing says “verified”, by brand decision, so the demo never promises something it does not check.'],
      '16-portafolio-profesionista': ['Grid portfolio and client reviews.', 'The portfolio is a 3-column grid and tradespeople can add jobs with photos or videos. Videos are served with range requests so they can be scrubbed.'],
    },
  },

  minisuper: {
    queEs: 'Point-of-sale system for a small grocery store in a rural area.',
    descripcion: [
      'The store sells, charges and stores everything on its own computer, so it works without internet. From the city, the owner can check the store with a USB drive, a remote connection or a cloud dashboard.',
      'The photos come from the demo with test data: the cash register is opened, three sales are rung up and then show up in the sales history and reports.',
    ],
    aportes: [
      'Sales and cash register: barcode scanner, keyboard shortcuts, opening and closing the register, configurable VAT.',
      'Inventory and purchasing: low-stock alerts and a suggested shopping list based on what sold.',
      'Reports: daily profit, best sellers, payroll and worker credit, Excel export.',
      'Built for the store: automatic daily backup, USB copy and an installer that makes the system start on its own on Windows.',
      'Automated tests for the API, the database, money calculations and syncing.',
    ],
    fotos: {
      '01-login': ['Sign-in.', 'Passwords are stored with bcrypt. If the user does not exist, the server compares against a dummy hash so the response takes the same time and does not reveal which users exist. The session is regenerated on login, and the cookie is httpOnly, SameSite=strict and lasts 12 hours.'],
      '02-caja-cerrada': ['Sales screen with the register closed and a low-stock warning.', 'If the store requires it in Settings, nothing can be charged without an open register. The low-stock warning compares each product’s stock with its minimum.'],
      '03-venta': ['A sale with products added by name or barcode.', 'Products are added by name or barcode (a USB scanner works like a keyboard). Amounts are computed with integers in cents, not decimals, to avoid rounding errors; quantities accept thousandths to sell by the kilo.'],
      '04-cobro': ['Cash payment with the change calculated.', 'F2 charges and F8 switches between cash and credit. Only an admin can apply discounts, and the server rejects the charge if the amount received does not cover the total.'],
      '05-venta-cobrada': ['Sale recorded with its receipt number.', 'The sale is saved in a transaction: product rows are locked, stock is checked and inventory is deducted. If anything fails, nothing is saved halfway. Each sale gets a consecutive number.'],
      '06-caja': ['Open register: starting cash, cash sales and closing.', 'Expected cash = starting cash + cash sales + deposits − withdrawals. You cannot withdraw more than should be there, and closing records the counted amount and the difference.'],
      '07-ventas': ['Sales history with the option to cancel.', 'Cancelling a sale returns the products to inventory inside a transaction. If that sale’s register is already closed, it warns that the refunded cash must be recorded as a withdrawal.'],
      '08-productos': ['Product catalog with cost, price and stock.', 'Catalog with code, category, supplier, cost, price, VAT and stock. It can be imported from and exported to Excel. Only an admin can change it: the permission is checked on the server, not just in the UI.'],
      '09-inventario': ['Inventory with a suggested shopping list.', 'The suggested list takes products at or below their minimum and proposes buying enough to reach twice the minimum, or what sold in the last 2 weeks if that is more.'],
      '10-compras': ['Purchases from suppliers.', 'Recording a purchase creates an inventory entry and, if requested, updates the product cost.'],
      '11-nomina': ['Payroll deductions for workers’ credit purchases.', 'Workers can buy on credit. Payroll gathers their purchases from Saturday to Friday to deduct them from their pay; cancelled sales do not count.'],
      '12-reportes': ['Sales report with estimated profit.', 'Sales, estimated profit (sales before VAT minus cost of goods), average ticket and cancellations over a date range. It can be filtered by cashier and exported to Excel or printed.'],
      '13-usuarios': ['Users and permissions (admin and cashier).', 'Two roles: admin and cashier. The user is re-read from the database on every request, so disabling them or changing their role takes effect immediately.'],
      '14-configuracion': ['Store settings and receipt preview.', 'Store details, VAT handling, date format and receipt with preview. This is also where the automatic daily backup (30 kept) and the USB copy to take data to the city live.'],
    },
  },

  'doo-barber': {
    etiqueta: 'Personal project',
    queEs: 'Appointment system for barbershops, designed to be sold to several businesses.',
    descripcion: [
      'Clients choose a service, barber, date and time, and book in under a minute without calling. The owner gets a dashboard with the schedule, walk-ins, blocked hours and reports. Each barbershop can set its own color and logo.',
    ],
    aportes: [
      'No double-booking: weekly hours, service duration and blocked hours; the server works out which times are free.',
      'Security: hashed password, token sessions, prices that always come from the server and XSS protection.',
      'WhatsApp notifications with prefilled messages.',
      'I worked section by section, each on its own branch and pull request.',
    ],
    fotos: {
      '01-reserva': ['Public booking page.', 'Public page for clients. Services, prices and durations come from the server; each shop sets its own color and logo from the dashboard.'],
      '02-servicio-y-barbero': ['Step 1: service and barber.', 'Step 1 of 3. Choosing a service sets its duration, which the server uses to work out which times fit before closing.'],
      '03-fecha-y-hora': ['Step 2: calendar and available times.', 'The server computes free times from weekly hours, the slot interval (15, 30 or 60 min), blocked days and hours, and each barber’s appointments, so no service overlaps another. Bookings are allowed up to 30 days ahead.'],
      '03b-confirmar': ['Step 3: confirm with name and WhatsApp.', 'On confirm, the server re-checks availability inside a booking queue that handles one request at a time, so two people can never get the same slot. The price is never taken from the browser: it is read from the database. A phone number with 2 no-shows cannot book.'],
      '04-reserva-celular': ['Booking on a phone.', 'Mobile-first, since most bookings happen on phones. Clients get a cancellation code to check or cancel their appointment, so nobody can see other people’s bookings by guessing numbers.'],
      '05-login': ['Owner dashboard sign-in.', 'The owner’s password is stored as a salted scrypt hash and compared in constant time. After 5 failed attempts from the same IP, login is locked for 15 minutes. If no password is configured, a random one is generated and shown only once.'],
      '06-agenda': ['Weekly schedule with income, completed and pending appointments.', 'The session is a random 32-byte token; only its SHA-256 hash is stored, and it expires after 7 days. From the schedule, appointments are marked done or “no-show”, rescheduled or cancelled; rescheduling goes through the same overlap check.'],
      '07-nueva-cita': ['Recording a walk-in appointment.', 'For clients who walk in or call. The owner can record past appointments or clients with no-shows, but the no-overlap rule still applies.'],
      '08-bloqueos': ['Blocking whole days or ranges of hours.', 'Whole days or hour ranges can be blocked. If the day already has bookings, the system says how many and only cancels them if the owner confirms.'],
      '09-reportes': ['Income report by service.', 'Income by service counting only completed appointments, filterable by date and barber. Exports to Excel (CSV) or prints to PDF.'],
      '10-configuracion': ['Brand settings, WhatsApp messages and barber team.', 'Only options from an allow-list are accepted, each with its own validator. The logo is compressed in the browser before upload, WhatsApp messages are built from templates (wa.me), and all text is escaped before rendering to prevent XSS.'],
    },
  },

  'duelo-ronin': {
    queEs: 'Real-time two-player fighting game in the browser.',
    descripcion: [
      'Two people join from their browsers and fight two rounds with punches, kicks, jumps and blocks. The server simulates physics and hits; browsers only send key presses.',
    ],
    aportes: [
      'Authoritative server: it computes physics, hits and health; browsers only send keys, so nobody can cheat.',
      'Capped at 2: a third visitor sees “Duel full”; if someone disconnects they have 10 seconds to return.',
      'Rounds, countdown, rematch and a practice mode against a punching bag while the opponent arrives.',
      '32 automated tests for the game logic and networking.',
    ],
    fotos: {
      '01-practica': ['Practice mode against the punching bag while the opponent arrives.', 'While waiting, you practice on a punching bag: hits do no damage. The character and the stage are drawn with code on Canvas.'],
      '02-rival-conectado': ['The second player arrives and both press “Ready”.', 'The 2-player cap is enforced only on the server, before joining. Both must press “Ready”; anyone who doesn’t within 60 seconds is removed so the duel isn’t blocked.'],
      '03-cuenta-regresiva': ['Countdown before the fight.', 'The duel is a state machine: waiting → ready → countdown → fighting → round end → game over. Whoever wins 2 rounds wins.'],
      '04-pelea': ['Fight in progress with health bars and timer.', 'The server simulates the fight 60 times per second: gravity, platforms, hits and health. Browsers only send keys and draw the state, interpolating between updates, so nobody can cheat.'],
      '05-hitboxes': ['Hitbox view (H key).', 'Press H to see hitboxes. Each attack has startup, active and recovery time: the punch is fast and deals 7; the kick is slow, deals 13 and pushes back. Blocking cuts damage to 20 %.'],
      '06-duelo-lleno': ['A third visitor sees “Duel full”.', 'A third visitor sees “Duel full” and never receives the game state. If a player disconnects, their spot is held for 10 seconds and the fight pauses.'],
    },
  },

  tecnoaula: {
    queEs: 'School platform with a different dashboard for each role.',
    descripcion: [
      'Admins, directors, teachers and students each get their own dashboard. Courses are organized in blocks and topics; students see their progress, submit assignments, check their calendar and grades, and take part in forums and chat.',
      "The photos were taken with the repository's sample data, signing in as a user of each role.",
    ],
    aportes: [
      'Secure sign-in: “Remember me”, failed-attempt limits and token-based password reset.',
      'Roles and permissions: a main role plus extra roles and permissions per user.',
      'Full courses: blocks, topics, materials, assignments, forums and per-course chat, with each student’s progress.',
      'Progress and grade reports per course.',
      'Database credentials are kept out of the repository.',
    ],
    fotos: {
      '01-login': ['Sign-in and sign-up.', 'Passwords use password_hash. There is a limit of 5 attempts per email and 20 per IP in 15 minutes, the session is regenerated on login and the cookie is httpOnly and SameSite. Every form carries a CSRF token.'],
      '03-admin-dashboard': ['Admin: overview of users, courses, enrollments and submissions.', 'Every page checks the role on the server before rendering; if it doesn’t match, it returns 403. The overview is built with count queries over users, courses, enrollments and submissions.'],
      '04-admin-usuarios': ['Admin: user and role management.', 'Disabling or deleting someone ends all their sessions, including “Remember me”. Users are soft-deleted with a timestamp, and every change is written to the activity log.'],
      '05-admin-roles': ['Admin: roles and permissions.', 'Each user has a main role and can have extra roles and permissions (create courses, view reports, manage users), stored in separate tables.'],
      '06-admin-cursos': ['Admin: all courses on the platform.', 'List of every course with its status (draft or published), teacher, students and start date.'],
      '07-reportes': ['Performance reports by course.', 'Average progress, submissions and grade per course, computed in MySQL with aggregations.'],
      '08-configuracion': ['Platform settings.', 'General options like the platform name and whether student sign-up is open. Database credentials live in a config.php that is not committed.'],
      '09-docente-inicio': ['Teacher: their courses with students and submissions to grade.', 'Teachers only see their own courses. The cards show students, submissions to grade and average progress.'],
      '10-docente-cursos': ['Teacher: course list.', 'From here they create new courses and open their own to edit.'],
      '11-docente-curso': ['Teacher: editing blocks, topics and assessments of a course.', 'A course is built from blocks, topics and materials. Blocks and topics are reordered by dragging, and the new order is saved with a request to the server.'],
      '12-docente-alumnos': ['Teacher: student progress.', 'Each student’s progress, computed from the topics they have marked as completed.'],
      '13-director': ['Director: student follow-up.', 'Directors follow students and courses without being able to change system settings.'],
      '14-alumno-cursos': ['Student: their courses with progress percentage.', 'Students see their courses with progress and a shortcut to pick up where they left off.'],
      '15-alumno-curso': ['Student: course content and upcoming assignments.', 'Course view with tabs for content, materials, forums, chat, assignments and grades. Each completed topic updates progress.'],
      '16-alumno-tareas': ['Student: assignments to submit.', 'Pending, submitted and graded assignments, with due date and points.'],
      '17-alumno-calendario': ['Student: due-date calendar.', 'Monthly calendar with due dates from all their courses.'],
      '18-alumno-calificaciones': ['Student: grades by course.', 'Overall average and the grade of each submission with its comment.'],
      '19-foros': ['Course forums.', 'Per-course forums for questions and discussion.'],
      '20-foro': ['A conversation inside a forum.', 'Replies are saved with prepared statements and all text is escaped with htmlspecialchars before rendering, to prevent XSS.'],
      '21-mensajes': ['Course chat messages.', 'The course chat polls for new messages every 5 seconds, asking only for those after the last one it already has.'],
      '22-perfil': ['Profile and password change.', 'Users update their details and password. “Forgot password” sends a link that expires in 1 hour; only the token’s hash is stored, and the response is the same whether or not the email exists.'],
    },
  },

  calificaciones: {
    queEs: 'Portal where each student signs up and checks their grades.',
    descripcion: ['Students create an account with their student ID, sign in and see their grades by subject.'],
    aportes: [
      'Sign-up and sign-in with PHP sessions.',
      'Passwords stored as hashes (password_hash and password_verify).',
      'Prepared statements to prevent SQL injection.',
      'Student dashboard with their details and grade table.',
    ],
    fotos: {
      '01-login': ['Sign-in.', 'Looks up the user by email with a prepared statement and checks the password with password_verify. If it matches, their id is stored in the PHP session.'],
      '02-registro': ['Sign-up with student ID.', 'Before signing up it checks that the student ID and email are not taken. The password is stored with password_hash, never in plain text.'],
      '03-panel': ['Student dashboard with details and grades.', 'The dashboard only opens with an active session; otherwise it redirects to sign-in. Data and grades are queried with the session id, so each student only sees their own.'],
      '04-todas-las-calificaciones': ['General list of grades.', 'General list from the grades table, with every value escaped with htmlspecialchars.'],
    },
  },

  pokedex: {
    queEs: 'Pokémon search that queries the PokéAPI from the server.',
    descripcion: ['Search a Pokémon by name or number and the server fetches its data from the PokéAPI. Below there is a catalog to pick them by hand.'],
    aportes: [
      'Calling an external API from PHP, without exposing it to the browser.',
      'Normal and shiny sprites, types, height, weight and abilities.',
      'Base stats as colored bars.',
      'Catalog of the first Pokémon to pick without typing.',
    ],
    fotos: {
      '01-charizard': ['Searching for Charizard.', 'The form sends the name via GET. PHP cleans it, URL-encodes it and queries the PokéAPI from the server with file_get_contents; if it doesn’t exist, it shows a notice instead of an error.'],
      '02-estadisticas': ['Details and base stats.', 'The JSON response is decoded in PHP and each stat is drawn as a bar with its own color. All text coming from the API is escaped before rendering.'],
      '03-catalogo': ['Catalog to pick a Pokémon.', 'The catalog asks the API for the first 24 Pokémon; each card is a link that runs the search.'],
      '04-pikachu': ['Searching for Pikachu.', 'Each search shows the animated normal and shiny sprites, types and abilities.'],
      '05-gengar': ['Searching for Gengar.', 'Type colors come from one CSS class per type.'],
    },
  },

  catalogo: {
    queEs: 'Electronics catalog where the server calculates the purchase total.',
    descripcion: ['The client enters their name, ticks products and the server calculates the total from the form.'],
    aportes: [
      'Catalog generated from a PHP array.',
      'Validates the name and that at least one product was chosen.',
      'Subtotal, 10 % discount on purchases over $500, and total to pay.',
    ],
    fotos: {
      '01-formulario': ['Form with the catalog.', 'The catalog and prices live in a PHP array; the form only sends the names of the chosen products.'],
      '02-resumen-con-descuento': ['Summary of a purchase with a discount.', 'The server ignores any product not in its catalog and takes the price from its own array, so prices cannot be tampered with from the browser. If the subtotal is over $500, a 10 % discount applies.'],
      '03-resumen-sin-descuento': ['Summary of a purchase under $500.', 'If it doesn’t reach the minimum, it explains why there was no discount. The client’s name is escaped with htmlspecialchars before rendering.'],
    },
  },

  'chat-socket': {
    queEs: 'Chat where each person joins with a name and gets a color.',
    descripcion: ['Shows who is online and announces when someone joins or leaves. Messages are cleaned and length-limited on the server.'],
    fotos: {
      '01-entrada': ['Join with a username.', 'On join, the server registers the person with their name (20 characters max) and assigns a color from a palette of 10.'],
      '02-conversacion': ['A conversation between three people.', 'Socket.IO relays each message to everyone instantly. The server trims messages to 500 characters and ignores anyone who hasn’t joined.'],
      '03-usuario-salio': ['Notice when someone leaves the chat.', 'When someone disconnects, the server removes them from the list and tells everyone; the online list updates on its own.'],
    },
  },

  'lightship-weather': {
    queEs: 'Weather API that reads each city’s data from Markdown files.',
    descripcion: ['The Express server exposes /api/clima/:ciudad and the page consumes it to show each city’s weather as cards.'],
    fotos: {
      '01-mexico': ['Mexico City.', 'The page requests /api/clima/mexico from the Express server, which reads mexico.md and returns it as JSON. The Markdown is converted to HTML in the browser.'],
      '02-tokio': ['Tokyo.', 'Adding a city is just adding its .md file to the datos/ folder, without touching the code.'],
      '03-madrid': ['Madrid.', 'Each city has its own image, coordinates and main metrics.'],
      '04-italia': ['Rome.', 'Requesting a city that doesn’t exist returns 404 with the list of available cities.'],
      '05-respuesta-api': ['JSON response from the API.', 'A real API response: status, city, file name and the content in Markdown. CORS is open so it can be consumed from another page.'],
    },
  },

  duomath: {
    queEs: 'Platform to practice 6th-grade math.',
    descripcion: ['Inspired by language-learning apps: 20-question lessons per module, with experience points, crowns and lives.'],
    fotos: {
      '01-ruta': ['Module path.', 'Five modules: addition, subtraction, multiplication, division and word problems. Finishing one earns its crown.'],
      '02-ingresar': ['Student profile.', 'The profile is saved in the browser with localStorage: XP, crowns and lives per user. It is a practice project, there is no server.'],
      '03-leccion': ['A lesson question.', 'Each lesson has 20 multiple-choice questions on fractions, decimals and integers.'],
      '04-opcion-elegida': ['Option chosen before checking.', 'The “Check” button only becomes active after choosing an option.'],
      '05-retroalimentacion': ['Correct answer with the explanation.', 'It always shows how to solve it. Each mistake costs a life; with 3 mistakes the lesson ends.'],
    },
  },

  'bio-terminal': {
    queEs: 'Virtual pet with a terminal look.',
    descripcion: ['You have to keep it alive for 24 simulated hours (1 hour = 6 seconds) by feeding, playing and cleaning. It has three difficulty levels.'],
    fotos: {
      '01-inicio': ['Start: name and difficulty.', 'You pick a name and difficulty. Difficulty changes how fast fun and hygiene drop and how likely events are.'],
      '02-incubado': ['The freshly hatched pet.', 'A timer advances the clock: 1 simulated hour = 6 seconds. The goal is to reach 24 hours. Every 6 hours it asks for food.'],
      '03-desgaste': ['Bars drop over time and alerts appear.', 'Every second the bars drop according to difficulty (on hard, fun drops 1.2 per second) and events like dirt or wanting to play can appear, with alerts.'],
      '04-alimentado': ['After feeding it.', 'Each button handles a need. Ignore 2 food requests, or feed it 3 times in a row while full, and it turns into a ghost and the game ends with a summary.'],
    },
  },

  reproductor: {
    queEs: 'Music player with user accounts and favorite songs.',
    descripcion: ['Song list, shuffle, repeat, progress bar and volume. Each user signs in and keeps their favorites in the browser.'],
    fotos: {
      '01-inicio': ['Song list.', 'Songs and covers are local files; the player uses the HTML audio element with custom controls.'],
      '02-registro': ['Sign-in or sign-up.', 'Accounts are stored in the browser with localStorage. It is a practice project for client-side data, not a real security system: there is no server.'],
      '03-reproduciendo': ['Playing, with songs marked as favorites.', 'Shuffle, repeat, progress bar, volume and per-song “Like”, all handled with JavaScript.'],
      '04-me-gusta': ['“My Likes” view.', 'Each user has their own favorites list that persists after reloading or signing back in.'],
    },
  },

  pong: {
    queEs: 'Single-player Pong against a wall.',
    descripcion: ['Choose keys, colors, points per hit and speed. Every 5 hits the level goes up, and the top 3 scores are saved.'],
    fotos: {
      '01-configuracion': ['Game setup.', 'Before playing you choose your name, keys, colors, points per hit and starting speed.'],
      '02-partida': ['Game in progress.', 'The game runs on Canvas with an animation loop. The ball bounces off the right wall and you return it with the paddle.'],
      '03-fin-de-partida': ['Game over and the top 3 scores.', 'Every 5 hits the level and speed go up. When you lose, the score is saved in localStorage and the top 3 are shown.'],
    },
  },

  cotizador: {
    queEs: 'Calculates how much a website costs.',
    descripcion: ['Based on the number of pages and extra services (domain, hosting, database, SEO). Accepts discount coupons and shows the breakdown with VAT.'],
    fotos: {
      '01-formulario': ['Quote form.', 'The first 3 pages cost $5,000 and each extra page $2,000. Each extra service has its price stored on its own checkbox.'],
      '02-cotizacion': ['Quote with breakdown and VAT.', 'The “septiembre” coupon gives 15 % off. 16 % VAT is computed on the discounted subtotal and the result is shown in a window with the breakdown.'],
      '03-primera-version': ['First version, unstyled (cotizador-web repository).', 'The first version, HTML only, before adding styles and the JavaScript logic.'],
    },
  },

  'estructuras-datos': {
    queEs: 'Java desktop programs for the data structures course.',
    descripcion: ['A 10×10 maze that solves itself with recursive backtracking, shown step by step: the path found turns green. Also a playlist app built on a circular doubly linked list.'],
    repoTexto: 'Private repository',
    fotos: {
      '01-laberinto-nivel-1': ['Maze, level 1, solved.', 'The maze is a 10×10 matrix. “Resolver IA” tries moving down, right, up and left recursively; when it hits a dead end, it backtracks.'],
      '02-laberinto-nivel-2': ['Maze, level 2, solved.', 'The search is drawn step by step: green is the current path and red the discarded cells. It runs on a separate thread so the window doesn’t freeze.'],
      '03-laberinto-nivel-3': ['Maze, level 3, solved.', 'You can also play with the arrow keys, and clicking adds or removes walls to build your own maze.'],
      '04-laberinto-nivel-4': ['Maze, level 4, solved.', 'Each level places walls differently. If there is no possible path (like level 5), the recursion exhausts every option and reports “Sin solución”.'],
      '05-playlist': ['Playlist app playing a song.', 'Each playlist is a circular doubly linked list: each node points to the next and previous song, and the last links back to the first, so « » never run out.'],
    },
  },

  poo: {
    queEs: 'Java console practice projects.',
    descripcion: ['Inheritance, abstract classes and polymorphism. I turned in each assignment on its own branch with a pull request reviewed by the professor. The screenshots are real runs with sample data; what the user types is in green.'],
    repoTexto: 'Private repository',
    fotos: {
      '01-renta-de-vehiculos': ['Vehicle rental: register a car and a motorcycle, view their details and calculate the rental.', 'Vehiculo is an abstract class and Auto, Camion and Moto extend it, each with its own mostrarInfo(). They all go in the same list and the program treats them the same thanks to polymorphism.'],
      '02-banco': ['Bank: create an account, sign in, deposit, check balance and view stats.', 'Each account is an object with private holder and balance. The bank counters (accounts created and total money) are static attributes shared by all accounts.'],
    },
  },

  'lista-tareas': {
    queEs: 'To-do list saved in the browser.',
    descripcion: ['Add, mark as done and delete, without losing anything when the page reloads.'],
    fotos: {
      '01-tareas': ['Tasks added.', 'Each task is an object with id, text and whether it’s done. The whole array is saved to localStorage as JSON every time it changes.'],
      '02-despues-de-recargar': ['Tasks are still there after reloading, with two completed.', 'On load it reads from localStorage, so tasks and their state survive even after closing the browser.'],
    },
  },
};
