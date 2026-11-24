// Generado por herramientas/generar.js. No lo edites a mano.
window.PROYECTOS = {
 "es": [
  {
   "slug": "offrly",
   "titulo": "Offrly",
   "etiqueta": "Proyecto en equipo · 4 integrantes",
   "queEs": "Plataforma hiperlocal que conecta hogares de Morelia con profesionistas de oficios.",
   "descripcion": [
    "Un cliente publica lo que necesita y los electricistas y plomeros cercanos le mandan una oferta. El precio se negocia en un chat con oferta y contraoferta, y al final los dos se califican.",
    "Construimos una demo completa, pensada para el celular, para presentarla a inversionistas. Las fotos muestran el recorrido de un cliente que publica una fuga de agua y recibe tres cotizaciones."
   ],
   "aportes": [
    "Chat de negociación: rango de precio de referencia, aviso cuando una oferta es demasiado baja, botones − y + de $50 y una línea de 4 pasos con el avance del trato.",
    "Publicar una oferta: horario por franjas, ubicación aproximada, hasta 3 fotos del problema y una pantalla para comparar cotizaciones.",
    "Perfil, chats e inicio: lista de chats tipo WhatsApp con filtros, portafolio del profesionista en cuadrícula y etiqueta “Nuevo” para quien tiene pocas reseñas.",
    "Pruebas automáticas: recorrido completo en Firefox a tamaño de celular (16 de 16 pasando) y arreglé el arranque de las pruebas en Windows.",
    "Contenido de la demo: 45 fotos de perfiles, portafolios y problemas para que todo se vea real.",
    "Revisé y uní los pull requests del equipo."
   ],
   "tecnologias": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "WebSocket",
    "Selenium"
   ],
   "repo": null,
   "repoTexto": "Repositorio privado del equipo",
   "fotos": [
    {
     "archivo": "01-entrada",
     "src": "img/galeria/offrly/01-entrada.webp",
     "pie": "Pantalla de entrada: el visitante elige si busca un profesionista o si es uno.",
     "explicacion": "La app pregunta primero el tipo de usuario porque cliente y profesionista ven pantallas distintas: el cliente publica necesidades y el profesionista las recibe y cotiza.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "02-perfiles",
     "src": "img/galeria/offrly/02-perfiles.webp",
     "pie": "Acceso de cliente con los perfiles de demostración.",
     "explicacion": "Es una demo para inversionistas, así que el acceso es simulado con 6 perfiles prearmados. Cada visitante tiene su propio “mundo” en el servidor: lo que hace un invitado no lo ve otro, y “Reiniciar demo” lo deja como al entrar.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "03-inicio",
     "src": "img/galeria/offrly/03-inicio.webp",
     "pie": "Inicio del cliente con sus ofertas y trabajos recientes de profesionistas.",
     "explicacion": "El inicio junta las ofertas del cliente y un muro con trabajos recientes de profesionistas. Todo llega por WebSocket, así que la pantalla se actualiza sola cuando hay novedades.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "04-oferta-oficio",
     "src": "img/galeria/offrly/04-oferta-oficio.webp",
     "pie": "Nueva oferta, pregunta 1: el tipo de profesionista.",
     "explicacion": "Publicar una necesidad son 5 preguntas cortas. La primera define el oficio y de ella dependen los trabajos que se ofrecen en la siguiente.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "05-oferta-horario",
     "src": "img/galeria/offrly/05-oferta-horario.webp",
     "pie": "Pregunta 3: para cuándo y en qué franjas de horario.",
     "explicacion": "El cliente elige para cuándo y una o varias franjas (mañana, mediodía, tarde, noche) o una hora exacta. Franjas y hora exacta se excluyen entre sí y el botón no avanza hasta que la elección es válida.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "06-oferta-zona-y-foto",
     "src": "img/galeria/offrly/06-oferta-zona-y-foto.webp",
     "pie": "Pregunta 4: zona aproximada, descripción y foto del problema.",
     "explicacion": "Solo se pide la colonia: la dirección exacta se comparte hasta cerrar el acuerdo. Se pueden subir hasta 3 fotos; el servidor solo acepta imágenes y videos de hasta 50 MB y las sirve desde la misma computadora, sin nube.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "07-oferta-presupuesto",
     "src": "img/galeria/offrly/07-oferta-presupuesto.webp",
     "pie": "Pregunta 5: presupuesto y resumen antes de avisar a los profesionistas.",
     "explicacion": "Antes de publicar se muestra un resumen con todo lo capturado. El presupuesto es orientativo: la frase “siempre puedes negociar” deja claro que el precio final se acuerda en el chat.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "08-buscando-profesionistas",
     "src": "img/galeria/offrly/08-buscando-profesionistas.webp",
     "pie": "La oferta se publica y se buscan profesionistas cerca.",
     "explicacion": "Al publicar, la oferta se reparte a los profesionistas del oficio y la pantalla avisa que las cotizaciones aparecerán en unos segundos.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "09-chats",
     "src": "img/galeria/offrly/09-chats.webp",
     "pie": "Llegan las cotizaciones como chats en negociación.",
     "explicacion": "Cada cotización abre un chat. El aviso superior resume cuántas llegaron y lleva directo a compararlas. Los filtros “No leídos” y “En negociación” se calculan con el estado de cada conversación.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "10-negociacion",
     "src": "img/galeria/offrly/10-negociacion.webp",
     "pie": "Chat con la línea de avance del trato y el precio de referencia.",
     "explicacion": "Arriba, la línea de 4 pasos (cotización, negociación, acuerdo, realizado) muestra en qué va el trato. El rango de referencia sale del precio base del trabajo ±20 %, redondeado a $50.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "11-contraoferta",
     "src": "img/galeria/offrly/11-contraoferta.webp",
     "pie": "Oferta pendiente con botones para aceptar, escribir o contraofertar.",
     "explicacion": "Las ofertas tienen su propia tarjeta con botón para aceptar. Los precios no los decide el texto del chat sino un motor de reglas determinista: cada profesionista tiene un límite, hace como máximo 3 contraofertas y no se mueve ante ofertas absurdas.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "12-comparar-cotizaciones",
     "src": "img/galeria/offrly/12-comparar-cotizaciones.webp",
     "pie": "Comparación de las 3 cotizaciones, marcando la más barata.",
     "explicacion": "La comparación ordena las cotizaciones como llegaron y marca la más barata, con la calificación y la zona de cada profesionista para decidir con más datos que el precio.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "13-perfil-cliente",
     "src": "img/galeria/offrly/13-perfil-cliente.webp",
     "pie": "Perfil del cliente con sus reseñas.",
     "explicacion": "El cliente también tiene perfil con reseñas, porque la calificación es de ida y vuelta: los profesionistas saben con quién van a trabajar.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "14-inicio-profesionista",
     "src": "img/galeria/offrly/14-inicio-profesionista.webp",
     "pie": "Inicio de un electricista esperando ofertas cerca.",
     "explicacion": "El profesionista ve las ofertas en tiempo real de su oficio cerca de su zona y el mismo muro de trabajos recientes.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "15-perfil-profesionista",
     "src": "img/galeria/offrly/15-perfil-profesionista.webp",
     "pie": "Perfil del profesionista con portada y especialidades.",
     "explicacion": "El perfil funciona como red profesional: portada, especialidades, años de experiencia y calificación. Nada dice “verificado”, por decisión de marca, para no prometer algo que la demo no comprueba.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "16-portafolio-profesionista",
     "src": "img/galeria/offrly/16-portafolio-profesionista.webp",
     "pie": "Portafolio en cuadrícula y reseñas de clientes.",
     "explicacion": "El portafolio se muestra en cuadrícula de 3 columnas y el profesionista puede agregar trabajos con fotos o videos. Los videos se sirven por rangos para poder adelantarlos.",
     "w": 600,
     "h": 1298
    }
   ]
  },
  {
   "slug": "minisuper",
   "titulo": "Mini Súper",
   "queEs": "Punto de venta para una tienda de abarrotes en una zona rural.",
   "descripcion": [
    "La tienda vende, cobra y guarda todo en su propia computadora, así que funciona aunque no haya internet. Desde la ciudad el dueño puede revisar la tienda con una USB, con una conexión remota o con un panel en la nube.",
    "Las fotos son de la demo con datos de prueba: se abre la caja, se cobran tres ventas y luego aparecen en el historial y en los reportes."
   ],
   "aportes": [
    "Ventas y caja: lector de código de barras, atajos de teclado, apertura y corte de caja, IVA configurable.",
    "Inventario y compras: alertas de productos por agotarse y una lista de compra sugerida según lo que se vendió.",
    "Reportes: utilidad por día, más vendidos, nómina y crédito de trabajadores, exportación a Excel.",
    "Pensado para la tienda: respaldo automático diario, copia a USB e instalador que deja el sistema arrancando solo en Windows.",
    "Pruebas automáticas de la API, la base de datos, los cálculos de dinero y la sincronización."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "ExcelJS",
    "PowerShell"
   ],
   "repo": "https://github.com/luisito2806/minisuper",
   "demo": "https://minisuper-demo.onrender.com/",
   "demoNota": "Entra con admin / Admin123! (o cajero / Cajero123!). Los datos se reinician solos. Al estar en un servidor gratuito, puede tardar alrededor de un minuto en despertar.",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/minisuper/01-login.webp",
     "pie": "Inicio de sesión.",
     "explicacion": "La contraseña se guarda con bcrypt. Si el usuario no existe, el servidor compara contra un hash falso para tardar lo mismo y no revelar qué usuarios existen. Al entrar se regenera la sesión, y la cookie es httpOnly, SameSite=strict y dura 12 horas.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-caja-cerrada",
     "src": "img/galeria/minisuper/02-caja-cerrada.webp",
     "pie": "Pantalla de venta con la caja cerrada y aviso de productos por agotarse.",
     "explicacion": "Si la tienda lo exige en Configuración, no se puede cobrar sin una caja abierta. El aviso de productos por agotarse compara la existencia contra el mínimo de cada producto.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-venta",
     "src": "img/galeria/minisuper/03-venta.webp",
     "pie": "Venta con productos agregados por nombre o código de barras.",
     "explicacion": "Se agrega por nombre o código de barras (el lector USB funciona como teclado). Los importes se calculan con enteros en centavos, no con decimales, para evitar errores de redondeo; las cantidades aceptan milésimas para vender por kilo.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-cobro",
     "src": "img/galeria/minisuper/04-cobro.webp",
     "pie": "Cobro en efectivo con el cambio calculado.",
     "explicacion": "F2 cobra y F8 cambia entre efectivo y crédito. Solo un administrador puede aplicar descuentos, y el servidor rechaza el cobro si lo recibido no cubre el total.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-venta-cobrada",
     "src": "img/galeria/minisuper/05-venta-cobrada.webp",
     "pie": "Venta registrada con su folio.",
     "explicacion": "La venta se guarda en una transacción: se bloquean las filas de los productos, se revisa que haya existencia y se descuenta el inventario. Si algo falla, no se guarda nada a medias. Cada venta recibe un folio consecutivo.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-caja",
     "src": "img/galeria/minisuper/06-caja.webp",
     "pie": "Caja abierta: fondo inicial, ventas en efectivo y corte.",
     "explicacion": "El efectivo esperado se calcula como fondo inicial + ventas en efectivo + ingresos − retiros. No se puede retirar más de lo que debería haber, y al cerrar se registra lo contado y la diferencia.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-ventas",
     "src": "img/galeria/minisuper/07-ventas.webp",
     "pie": "Historial de ventas con opción de cancelar.",
     "explicacion": "Cancelar una venta regresa los productos al inventario dentro de una transacción. Si la caja de esa venta ya se cerró, avisa que hay que registrar el retiro del efectivo devuelto.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-productos",
     "src": "img/galeria/minisuper/08-productos.webp",
     "pie": "Catálogo de productos con costo, precio y existencia.",
     "explicacion": "Catálogo con código, categoría, proveedor, costo, precio, IVA y existencia. Se puede importar y exportar en Excel. Solo el administrador puede modificarlo: el permiso se valida en el servidor, no solo en la interfaz.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-inventario",
     "src": "img/galeria/minisuper/09-inventario.webp",
     "pie": "Inventario con lista de compra sugerida.",
     "explicacion": "La lista de compra sugerida toma los productos en o por debajo de su mínimo y propone comprar lo necesario para llegar al doble del mínimo, o a lo que se vendió en las últimas 2 semanas si es más.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-compras",
     "src": "img/galeria/minisuper/10-compras.webp",
     "pie": "Compras a proveedores.",
     "explicacion": "Registrar una compra a proveedor genera una entrada de inventario y, si se indica, actualiza el costo del producto.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "11-nomina",
     "src": "img/galeria/minisuper/11-nomina.webp",
     "pie": "Descuentos de nómina por compras a crédito de los trabajadores.",
     "explicacion": "Los trabajadores pueden comprar a crédito. La nómina junta sus compras de sábado a viernes para descontarlas del sueldo; las ventas canceladas no cuentan.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "12-reportes",
     "src": "img/galeria/minisuper/12-reportes.webp",
     "pie": "Reporte de ventas con utilidad estimada.",
     "explicacion": "Ventas, utilidad estimada (venta sin IVA menos costo de lo vendido), ticket promedio y canceladas en un rango de fechas. Se puede filtrar por cajero y exportar a Excel o imprimir.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "13-usuarios",
     "src": "img/galeria/minisuper/13-usuarios.webp",
     "pie": "Usuarios y permisos (administrador y cajero).",
     "explicacion": "Dos roles: administrador y cajero. En cada petición se vuelve a leer el usuario de la base, así que si se desactiva o se le cambia el rol, el cambio aplica de inmediato.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "14-configuracion",
     "src": "img/galeria/minisuper/14-configuracion.webp",
     "pie": "Configuración de la tienda y vista previa del ticket.",
     "explicacion": "Datos de la tienda, manejo del IVA, formato de fecha y ticket con vista previa. Aquí también están el respaldo diario automático (se conservan 30) y la copia a USB para llevar los datos a la ciudad.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "doo-barber",
   "titulo": "Doo Barber",
   "etiqueta": "Proyecto personal",
   "queEs": "Sistema de citas para barberías, pensado para venderse a varios negocios.",
   "descripcion": [
    "El cliente elige servicio, barbero, fecha y hora, y reserva en menos de un minuto sin llamar. El dueño tiene un panel con su agenda, citas sin reserva, bloqueos de horario y reportes. Cada barbería puede poner su propio color y logo."
   ],
   "aportes": [
    "Agenda sin empalmes: horario semanal, duración de cada servicio y horas bloqueadas; el servidor calcula qué horas quedan libres.",
    "Seguridad: contraseña con hash, sesiones con token, precios que siempre vienen del servidor y protección contra XSS.",
    "Avisos por WhatsApp con mensajes precargados.",
    "Lo trabajé por secciones, cada una en su propia rama y pull request."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "SQLite",
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/PW",
   "demo": "https://doo-barber.onrender.com/",
   "demoNota": "Puedes hacer una reserva de prueba. Al estar en un servidor gratuito, puede tardar alrededor de un minuto en despertar.",
   "fotos": [
    {
     "archivo": "01-reserva",
     "src": "img/galeria/doo-barber/01-reserva.webp",
     "pie": "Página pública para reservar.",
     "explicacion": "Página pública para el cliente. Los servicios, precios y duraciones vienen del servidor; cada barbería configura su propio color y logo desde el panel.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-servicio-y-barbero",
     "src": "img/galeria/doo-barber/02-servicio-y-barbero.webp",
     "pie": "Paso 1: servicio y barbero.",
     "explicacion": "Paso 1 de 3. Al elegir servicio se conoce su duración, que el servidor usa para calcular qué horas caben antes del cierre.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-fecha-y-hora",
     "src": "img/galeria/doo-barber/03-fecha-y-hora.webp",
     "pie": "Paso 2: calendario y horas disponibles.",
     "explicacion": "El servidor calcula las horas libres con el horario semanal, el intervalo de turnos (15, 30 o 60 min), los días y horas bloqueados y las citas de cada barbero, para que ningún servicio se empalme con otro. Solo se puede reservar hasta 30 días adelante.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03b-confirmar",
     "src": "img/galeria/doo-barber/03b-confirmar.webp",
     "pie": "Paso 3: confirmar el turno con nombre y WhatsApp.",
     "explicacion": "Al confirmar, el servidor vuelve a revisar la disponibilidad dentro de una fila de reservas que procesa una a la vez, así dos personas no pueden quedarse con el mismo turno. El precio nunca se toma del navegador: se lee de la base. Si el teléfono tiene 2 faltas sin aviso, no deja reservar.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-reserva-celular",
     "src": "img/galeria/doo-barber/04-reserva-celular.webp",
     "pie": "La reserva en el celular.",
     "explicacion": "Diseño pensado para el celular, donde se hace la mayoría de las reservas. El cliente recibe un código de cancelación para consultar o cancelar su cita sin que nadie pueda ver citas ajenas probando números.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "05-login",
     "src": "img/galeria/doo-barber/05-login.webp",
     "pie": "Acceso al panel del dueño.",
     "explicacion": "La contraseña del dueño se guarda con hash scrypt y sal aleatoria, y se compara en tiempo constante. Tras 5 intentos fallidos desde la misma IP se bloquea 15 minutos. Si no hay contraseña configurada, se genera una al azar y se muestra una sola vez.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-agenda",
     "src": "img/galeria/doo-barber/06-agenda.webp",
     "pie": "Agenda de la semana con ingresos, citas completadas y pendientes.",
     "explicacion": "La sesión es un token aleatorio de 32 bytes; en la base solo se guarda su hash SHA-256 y expira a los 7 días. Desde la agenda se marcan citas como completadas o “no asistió”, se reagenda o se cancela; reagendar pasa por la misma revisión de empalmes.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-nueva-cita",
     "src": "img/galeria/doo-barber/07-nueva-cita.webp",
     "pie": "Registrar una cita sin reserva (walk-in).",
     "explicacion": "Para clientes que llegan sin reserva o llaman por teléfono. El dueño sí puede registrar citas pasadas o de clientes con faltas, pero la regla de no empalmar se mantiene.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-bloqueos",
     "src": "img/galeria/doo-barber/08-bloqueos.webp",
     "pie": "Bloquear días completos o rangos de horas.",
     "explicacion": "Se bloquean días completos o rangos de horas. Si el día ya tiene citas, el sistema avisa cuántas y solo las cancela si el dueño lo confirma.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-reportes",
     "src": "img/galeria/doo-barber/09-reportes.webp",
     "pie": "Reporte de ingresos por servicio.",
     "explicacion": "Ingresos por servicio contando solo citas completadas, con filtros por fecha y barbero. Se exporta a Excel (CSV) o se imprime en PDF.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-configuracion",
     "src": "img/galeria/doo-barber/10-configuracion.webp",
     "pie": "Configuración de marca, mensajes de WhatsApp y equipo de barberos.",
     "explicacion": "Solo se aceptan las opciones de una lista permitida, cada una con su validador. El logo se comprime en el navegador antes de subirlo, los mensajes de WhatsApp se arman con plantillas (wa.me) y todo texto se escapa antes de mostrarse para evitar XSS.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "duelo-ronin",
   "titulo": "Duelo Ronin 1 vs 1",
   "queEs": "Juego de pelea en tiempo real para dos jugadores en el navegador.",
   "descripcion": [
    "Dos personas entran desde su navegador y pelean a dos rondas con puñetazos, patadas, saltos y bloqueo. El servidor calcula la física y los golpes; los navegadores solo envían teclas."
   ],
   "aportes": [
    "Servidor que manda: el servidor calcula la física, los golpes y la vida; los navegadores solo envían teclas, así nadie puede hacer trampa.",
    "Cupo de 2: un tercer visitante ve “Duelo lleno”; si alguien se desconecta tiene 10 segundos para volver.",
    "Rondas, cuenta regresiva, revancha y modo práctica contra un costal mientras llega el rival.",
    "32 pruebas automáticas de la lógica del juego y de la conexión."
   ],
   "tecnologias": [
    "Node.js",
    "Socket.IO",
    "Canvas",
    "JavaScript"
   ],
   "repo": "https://github.com/luisito2806/1vs1",
   "demo": "https://duelo-ronin.onrender.com/",
   "demoNota": "Ábrelo en dos navegadores o dispositivos para pelear; con uno solo puedes practicar. Al estar en un servidor gratuito, puede tardar alrededor de un minuto en despertar.",
   "fotos": [
    {
     "archivo": "01-practica",
     "src": "img/galeria/duelo-ronin/01-practica.webp",
     "pie": "Modo práctica contra el costal mientras llega el rival.",
     "explicacion": "Mientras llega el rival se practica contra un costal: los golpes no quitan vida. El personaje y el escenario están dibujados con código en Canvas.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-rival-conectado",
     "src": "img/galeria/duelo-ronin/02-rival-conectado.webp",
     "pie": "Llega el segundo jugador y ambos marcan “Listo”.",
     "explicacion": "El cupo se revisa solo en el servidor, antes de entrar al duelo. Los dos deben marcar “Listo”; si alguien no lo hace en 60 segundos se le saca para no bloquear el duelo.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-cuenta-regresiva",
     "src": "img/galeria/duelo-ronin/03-cuenta-regresiva.webp",
     "pie": "Cuenta regresiva antes de la pelea.",
     "explicacion": "El duelo es una máquina de estados: esperando → listos → cuenta regresiva → pelea → fin de ronda → fin del juego. Gana quien se lleve 2 rondas.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-pelea",
     "src": "img/galeria/duelo-ronin/04-pelea.webp",
     "pie": "Pelea en curso con barras de vida y reloj.",
     "explicacion": "El servidor simula la pelea 60 veces por segundo: gravedad, plataformas, golpes y vida. Los navegadores solo mandan teclas y dibujan el estado interpolando entre actualizaciones, así nadie puede hacer trampa.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-hitboxes",
     "src": "img/galeria/duelo-ronin/05-hitboxes.webp",
     "pie": "Vista de las cajas de golpe (tecla H).",
     "explicacion": "Con la tecla H se ven las cajas de golpe. Cada ataque tiene arranque, tiempo activo y recuperación: el puñetazo es rápido y quita 7; la patada es lenta, quita 13 y empuja. Bloquear reduce el daño al 20 %.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-duelo-lleno",
     "src": "img/galeria/duelo-ronin/06-duelo-lleno.webp",
     "pie": "Un tercer visitante ve “Duelo lleno”.",
     "explicacion": "Un tercer visitante ve “Duelo lleno” y nunca recibe el estado del juego. Si un jugador se desconecta, su lugar se guarda 10 segundos y la pelea se pausa.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "tecnoaula",
   "titulo": "TecnoAula",
   "queEs": "Plataforma escolar con un panel distinto para cada rol.",
   "descripcion": [
    "Administrador, director, docente y alumno entran a su propio panel. Los cursos se organizan en bloques y temas; el alumno ve su avance, entrega tareas, consulta su calendario y sus calificaciones, y participa en foros y chat.",
    "Las fotos están tomadas con los datos de ejemplo del repositorio, entrando con un usuario de cada rol."
   ],
   "aportes": [
    "Acceso seguro: “Recordarme”, límite de intentos fallidos y recuperación de contraseña con token.",
    "Roles y permisos: un rol principal más roles y permisos adicionales por usuario.",
    "Cursos completos: bloques, temas, materiales, tareas, foros y chat por curso, con el avance de cada alumno.",
    "Reportes de avance y calificaciones por curso.",
    "Las credenciales de la base de datos quedan fuera del repositorio."
   ],
   "tecnologias": [
    "PHP",
    "MySQL",
    "PDO",
    "JavaScript",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/TecnoAula",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/tecnoaula/01-login.webp",
     "pie": "Inicio de sesión y registro.",
     "explicacion": "Contraseñas con password_hash. Hay límite de 5 intentos por correo y 20 por IP en 15 minutos, la sesión se regenera al entrar y la cookie es httpOnly y SameSite. Todos los formularios llevan token CSRF.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-admin-dashboard",
     "src": "img/galeria/tecnoaula/03-admin-dashboard.webp",
     "pie": "Administrador: resumen de usuarios, cursos, inscripciones y entregas.",
     "explicacion": "Cada página revisa el rol en el servidor antes de mostrarse; si no corresponde, responde 403. El resumen se arma con consultas de conteo sobre usuarios, cursos, inscripciones y entregas.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-admin-usuarios",
     "src": "img/galeria/tecnoaula/04-admin-usuarios.webp",
     "pie": "Administrador: gestión de usuarios y roles.",
     "explicacion": "Al desactivar o eliminar a alguien se cierran todas sus sesiones, incluidos los “Recordarme”. Los usuarios se eliminan de forma lógica, guardando la fecha, y cada cambio queda en el historial de actividad.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-admin-roles",
     "src": "img/galeria/tecnoaula/05-admin-roles.webp",
     "pie": "Administrador: roles y permisos.",
     "explicacion": "Cada usuario tiene un rol principal y puede tener roles y permisos extra (crear cursos, ver reportes, gestionar usuarios), guardados en tablas aparte.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-admin-cursos",
     "src": "img/galeria/tecnoaula/06-admin-cursos.webp",
     "pie": "Administrador: todos los cursos de la plataforma.",
     "explicacion": "Lista de todos los cursos con su estado (borrador o publicado), docente, alumnos y fecha de inicio.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-reportes",
     "src": "img/galeria/tecnoaula/07-reportes.webp",
     "pie": "Reportes de desempeño por curso.",
     "explicacion": "Avance promedio, entregas y calificación por curso, calculados en MySQL con agregaciones.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-configuracion",
     "src": "img/galeria/tecnoaula/08-configuracion.webp",
     "pie": "Configuración general de la plataforma.",
     "explicacion": "Opciones generales como el nombre de la plataforma y si el registro de alumnos está abierto. Las credenciales de la base viven en un config.php que no se sube al repositorio.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-docente-inicio",
     "src": "img/galeria/tecnoaula/09-docente-inicio.webp",
     "pie": "Docente: sus cursos con alumnos y entregas por calificar.",
     "explicacion": "El docente solo ve sus cursos. Los indicadores muestran alumnos, entregas por calificar y avance promedio.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-docente-cursos",
     "src": "img/galeria/tecnoaula/10-docente-cursos.webp",
     "pie": "Docente: lista de cursos.",
     "explicacion": "Desde aquí crea cursos nuevos y entra a editar los suyos.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "11-docente-curso",
     "src": "img/galeria/tecnoaula/11-docente-curso.webp",
     "pie": "Docente: editar bloques, temas y evaluaciones de un curso.",
     "explicacion": "El curso se arma en bloques, temas y materiales. Bloques y temas se reordenan arrastrándolos, y el nuevo orden se guarda con una petición al servidor.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "12-docente-alumnos",
     "src": "img/galeria/tecnoaula/12-docente-alumnos.webp",
     "pie": "Docente: avance de sus alumnos.",
     "explicacion": "Avance de cada alumno, calculado con los temas que ya marcó como completados.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "13-director",
     "src": "img/galeria/tecnoaula/13-director.webp",
     "pie": "Director: seguimiento de alumnos.",
     "explicacion": "El director da seguimiento a alumnos y cursos sin poder editar la configuración del sistema.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "14-alumno-cursos",
     "src": "img/galeria/tecnoaula/14-alumno-cursos.webp",
     "pie": "Alumno: sus cursos con porcentaje de avance.",
     "explicacion": "El alumno ve sus cursos con el porcentaje de avance y un acceso para continuar donde se quedó.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "15-alumno-curso",
     "src": "img/galeria/tecnoaula/15-alumno-curso.webp",
     "pie": "Alumno: contenido del curso y próximas tareas.",
     "explicacion": "Vista del curso con pestañas de contenido, materiales, foros, chat, tareas y calificaciones. Cada tema completado actualiza el avance.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "16-alumno-tareas",
     "src": "img/galeria/tecnoaula/16-alumno-tareas.webp",
     "pie": "Alumno: tareas por entregar.",
     "explicacion": "Tareas pendientes, entregadas y calificadas, con fecha de entrega y puntos.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "17-alumno-calendario",
     "src": "img/galeria/tecnoaula/17-alumno-calendario.webp",
     "pie": "Alumno: calendario de entregas.",
     "explicacion": "Calendario mensual con las fechas de entrega de todos sus cursos.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "18-alumno-calificaciones",
     "src": "img/galeria/tecnoaula/18-alumno-calificaciones.webp",
     "pie": "Alumno: calificaciones por curso.",
     "explicacion": "Promedio general y la calificación de cada entrega con su comentario.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "19-foros",
     "src": "img/galeria/tecnoaula/19-foros.webp",
     "pie": "Foros de los cursos.",
     "explicacion": "Foros por curso para dudas y discusión.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "20-foro",
     "src": "img/galeria/tecnoaula/20-foro.webp",
     "pie": "Conversación dentro de un foro.",
     "explicacion": "Las respuestas se guardan con consultas preparadas y todo el texto se escapa con htmlspecialchars antes de mostrarse, para evitar XSS.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "21-mensajes",
     "src": "img/galeria/tecnoaula/21-mensajes.webp",
     "pie": "Mensajes del chat por curso.",
     "explicacion": "El chat del curso consulta mensajes nuevos cada 5 segundos, pidiendo solo los posteriores al último que ya tiene.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "22-perfil",
     "src": "img/galeria/tecnoaula/22-perfil.webp",
     "pie": "Perfil y cambio de contraseña.",
     "explicacion": "El usuario cambia sus datos y su contraseña. “Recuperar contraseña” manda un enlace que expira en 1 hora; en la base solo se guarda el hash del token, y la respuesta es la misma exista o no el correo.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "calificaciones",
   "titulo": "Portal de calificaciones",
   "queEs": "Portal donde cada alumno se registra y consulta sus calificaciones.",
   "descripcion": [
    "El alumno crea su cuenta con su número de control, inicia sesión y ve sus calificaciones por materia."
   ],
   "aportes": [
    "Registro e inicio de sesión con sesiones de PHP.",
    "Contraseñas guardadas con hash (password_hash y password_verify).",
    "Consultas preparadas para evitar inyección SQL.",
    "Panel del alumno con sus datos y la tabla de calificaciones."
   ],
   "tecnologias": [
    "PHP",
    "MySQL",
    "Sesiones"
   ],
   "repo": "https://github.com/luisito2806/Ambientes-web",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/calificaciones/01-login.webp",
     "pie": "Inicio de sesión.",
     "explicacion": "Busca al usuario por correo con una consulta preparada y compara la contraseña con password_verify. Si coincide, guarda su id en la sesión de PHP.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-registro",
     "src": "img/galeria/calificaciones/02-registro.webp",
     "pie": "Registro con número de control.",
     "explicacion": "Antes de registrar revisa que el número de control y el correo no existan. La contraseña se guarda con password_hash, nunca en texto plano.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-panel",
     "src": "img/galeria/calificaciones/03-panel.webp",
     "pie": "Panel del alumno con sus datos y calificaciones.",
     "explicacion": "El panel solo abre con sesión iniciada: si no la hay, redirige al login. Los datos y las calificaciones se consultan con el id de la sesión, así cada alumno ve solo lo suyo.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-todas-las-calificaciones",
     "src": "img/galeria/calificaciones/04-todas-las-calificaciones.webp",
     "pie": "Lista general de calificaciones.",
     "explicacion": "Lista general de la tabla de calificaciones, con cada texto escapado con htmlspecialchars.",
     "w": 1240,
     "h": 420
    }
   ]
  },
  {
   "slug": "pokedex",
   "titulo": "Pokédex",
   "queEs": "Buscador de Pokémon que consulta la PokéAPI desde el servidor.",
   "descripcion": [
    "Se busca un Pokémon por nombre o número y el servidor trae sus datos de la PokéAPI. Abajo hay un catálogo para elegirlos a mano."
   ],
   "aportes": [
    "Consumo de una API externa desde PHP, sin exponerla al navegador.",
    "Sprites normal y shiny, tipos, altura, peso y habilidades.",
    "Estadísticas base con barras de colores.",
    "Catálogo de los primeros Pokémon para elegir sin escribir."
   ],
   "tecnologias": [
    "PHP",
    "API REST",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/Pokedex",
   "fotos": [
    {
     "archivo": "01-charizard",
     "src": "img/galeria/pokedex/01-charizard.webp",
     "pie": "Búsqueda de Charizard.",
     "explicacion": "El formulario manda el nombre por GET. PHP lo limpia, lo codifica para la URL y consulta la PokéAPI desde el servidor con file_get_contents; si no existe, muestra un aviso en lugar de un error.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-estadisticas",
     "src": "img/galeria/pokedex/02-estadisticas.webp",
     "pie": "Datos y estadísticas base.",
     "explicacion": "La respuesta JSON se decodifica en PHP y cada estadística se dibuja como barra con su propio color. Todo texto que viene de la API se escapa antes de mostrarse.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-catalogo",
     "src": "img/galeria/pokedex/03-catalogo.webp",
     "pie": "Catálogo para elegir un Pokémon.",
     "explicacion": "El catálogo pide a la API la lista de los primeros 24 Pokémon; cada tarjeta es un enlace que hace la búsqueda.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-pikachu",
     "src": "img/galeria/pokedex/04-pikachu.webp",
     "pie": "Búsqueda de Pikachu.",
     "explicacion": "Cada búsqueda muestra el sprite animado normal y el shiny, sus tipos y habilidades.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-gengar",
     "src": "img/galeria/pokedex/05-gengar.webp",
     "pie": "Búsqueda de Gengar.",
     "explicacion": "Los colores de los tipos salen de una clase CSS por tipo.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "catalogo",
   "titulo": "Catálogo con carrito",
   "queEs": "Catálogo de electrónica donde el servidor calcula el total de la compra.",
   "descripcion": [
    "El cliente escribe su nombre, marca productos y el servidor calcula el total a partir del formulario."
   ],
   "aportes": [
    "Catálogo generado con un arreglo de PHP.",
    "Validación del nombre y de que haya productos elegidos.",
    "Subtotal, 10 % de descuento en compras de más de $500 y total a pagar."
   ],
   "tecnologias": [
    "PHP",
    "HTML",
    "Formularios GET"
   ],
   "repo": "https://github.com/luisito2806/PHP-formulario",
   "fotos": [
    {
     "archivo": "01-formulario",
     "src": "img/galeria/catalogo/01-formulario.webp",
     "pie": "Formulario con el catálogo.",
     "explicacion": "El catálogo y los precios viven en un arreglo de PHP; el formulario solo manda los nombres de los productos elegidos.",
     "w": 1400,
     "h": 1032
    },
    {
     "archivo": "02-resumen-con-descuento",
     "src": "img/galeria/catalogo/02-resumen-con-descuento.webp",
     "pie": "Resumen de una compra con descuento.",
     "explicacion": "El servidor ignora cualquier producto que no esté en su catálogo y toma el precio de su propio arreglo, así no se puede alterar el precio desde el navegador. Si el subtotal pasa de $500 aplica 10 % de descuento.",
     "w": 1040,
     "h": 580
    },
    {
     "archivo": "03-resumen-sin-descuento",
     "src": "img/galeria/catalogo/03-resumen-sin-descuento.webp",
     "pie": "Resumen de una compra que no llega a $500.",
     "explicacion": "Si no llega al mínimo, explica por qué no hubo descuento. El nombre del cliente se escapa con htmlspecialchars antes de mostrarse.",
     "w": 1040,
     "h": 500
    }
   ]
  },
  {
   "slug": "chat-socket",
   "titulo": "Chat en tiempo real",
   "queEs": "Chat donde cada persona entra con su nombre y recibe un color.",
   "descripcion": [
    "Muestra quién está conectado y avisa cuando alguien entra o sale. Los mensajes se limpian y se limitan en el servidor."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "Socket.IO"
   ],
   "repo": "https://github.com/luisito2806/socket",
   "demo": "https://chat-tiempo-real-zwkv.onrender.com/",
   "demoNota": "Ábrelo en dos pestañas o comparte el enlace para chatear. Al estar en un servidor gratuito, puede tardar alrededor de un minuto en despertar.",
   "fotos": [
    {
     "archivo": "01-entrada",
     "src": "img/galeria/chat-socket/01-entrada.webp",
     "pie": "Entrada con nombre de usuario.",
     "explicacion": "Al entrar, el servidor registra a la persona con su nombre (máximo 20 caracteres) y le asigna un color de una paleta de 10.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-conversacion",
     "src": "img/galeria/chat-socket/02-conversacion.webp",
     "pie": "Conversación entre tres personas.",
     "explicacion": "Socket.IO reenvía cada mensaje a todos los conectados al instante. El servidor recorta los mensajes a 500 caracteres e ignora a quien no se registró.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-usuario-salio",
     "src": "img/galeria/chat-socket/03-usuario-salio.webp",
     "pie": "Aviso cuando alguien sale del chat.",
     "explicacion": "Al desconectarse alguien, el servidor lo quita de la lista y avisa a todos; la lista de conectados se actualiza sola.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "lightship-weather",
   "titulo": "Lightship Weather",
   "queEs": "API de clima que lee la información de cada ciudad desde archivos Markdown.",
   "descripcion": [
    "El servidor con Express expone /api/clima/:ciudad y la página lo consume para mostrar el clima de cada ciudad con tarjetas."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "API REST",
    "Tailwind CSS"
   ],
   "repo": "https://github.com/luisito2806/IA-clima-",
   "demo": "https://lightship-weather.onrender.com/",
   "demoNota": "Al estar en un servidor gratuito, puede tardar alrededor de un minuto en despertar.",
   "fotos": [
    {
     "archivo": "01-mexico",
     "src": "img/galeria/lightship-weather/01-mexico.webp",
     "pie": "Ciudad de México.",
     "explicacion": "La página pide /api/clima/mexico al servidor de Express, que lee el archivo mexico.md y lo devuelve en JSON. El Markdown se convierte a HTML en el navegador.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-tokio",
     "src": "img/galeria/lightship-weather/02-tokio.webp",
     "pie": "Tokio.",
     "explicacion": "Agregar una ciudad es solo agregar su archivo .md en la carpeta datos/, sin tocar el código.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-madrid",
     "src": "img/galeria/lightship-weather/03-madrid.webp",
     "pie": "Madrid.",
     "explicacion": "Cada ciudad tiene su imagen, coordenadas y métricas principales.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-italia",
     "src": "img/galeria/lightship-weather/04-italia.webp",
     "pie": "Roma.",
     "explicacion": "Si se pide una ciudad que no existe, la API responde 404 con la lista de ciudades disponibles.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "05-respuesta-api",
     "src": "img/galeria/lightship-weather/05-respuesta-api.webp",
     "pie": "Respuesta JSON de la API.",
     "explicacion": "Respuesta real de la API: estado, ciudad, nombre del archivo y el contenido en Markdown. Tiene CORS abierto para poder consumirla desde otra página.",
     "w": 1400,
     "h": 560
    }
   ]
  },
  {
   "slug": "duomath",
   "titulo": "DuoMath",
   "queEs": "Plataforma para practicar matemáticas de 6.º de primaria.",
   "descripcion": [
    "Inspirada en las apps de idiomas: lecciones de 20 preguntas por módulo, con puntos de experiencia, coronas y vidas."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/duolingo-matematico",
   "demo": "https://luisito2806.github.io/duolingo-matematico/",
   "fotos": [
    {
     "archivo": "01-ruta",
     "src": "img/galeria/duomath/01-ruta.webp",
     "pie": "Ruta de módulos.",
     "explicacion": "Cinco módulos: sumas, restas, multiplicaciones, divisiones y problemas. Al terminar uno se gana su corona.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-ingresar",
     "src": "img/galeria/duomath/02-ingresar.webp",
     "pie": "Perfil del alumno.",
     "explicacion": "El perfil se guarda en el navegador con localStorage: XP, coronas y vidas por usuario. Es una práctica, no hay servidor.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-leccion",
     "src": "img/galeria/duomath/03-leccion.webp",
     "pie": "Pregunta de una lección.",
     "explicacion": "Cada lección es de 20 preguntas de opción múltiple sobre fracciones, decimales y enteros.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-opcion-elegida",
     "src": "img/galeria/duomath/04-opcion-elegida.webp",
     "pie": "Opción elegida antes de comprobar.",
     "explicacion": "El botón “Comprobar” se activa solo después de elegir una opción.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "05-retroalimentacion",
     "src": "img/galeria/duomath/05-retroalimentacion.webp",
     "pie": "Respuesta correcta con la explicación.",
     "explicacion": "Siempre muestra la explicación del procedimiento. Cada error quita una vida; con 3 errores la lección termina.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "bio-terminal",
   "titulo": "Bio-Terminal",
   "queEs": "Mascota virtual con estética de terminal.",
   "descripcion": [
    "Hay que mantenerla viva 24 horas simuladas (1 hora = 6 segundos) alimentándola, jugando y limpiándola. Tiene tres niveles de dificultad."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/Tamagotchi-web",
   "demo": "https://luisito2806.github.io/Tamagotchi-web/",
   "fotos": [
    {
     "archivo": "01-inicio",
     "src": "img/galeria/bio-terminal/01-inicio.webp",
     "pie": "Inicio: nombre y nivel de dificultad.",
     "explicacion": "Se elige nombre y dificultad. La dificultad cambia qué tan rápido bajan diversión e higiene y la probabilidad de eventos.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-incubado",
     "src": "img/galeria/bio-terminal/02-incubado.webp",
     "pie": "La mascota recién incubada.",
     "explicacion": "Un temporizador avanza el reloj: 1 hora simulada = 6 segundos. Hay que llegar a las 24 horas. Cada 6 horas pide comida.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-desgaste",
     "src": "img/galeria/bio-terminal/03-desgaste.webp",
     "pie": "Las barras bajan con el tiempo y aparecen alertas.",
     "explicacion": "Cada segundo bajan las barras según la dificultad (en difícil la diversión baja 1.2 por segundo) y pueden aparecer eventos como suciedad o ganas de jugar, con alertas.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-alimentado",
     "src": "img/galeria/bio-terminal/04-alimentado.webp",
     "pie": "Después de alimentarla.",
     "explicacion": "Cada botón atiende una necesidad. Si ignoras 2 avisos de comida, o la alimentas 3 veces seguidas estando llena, se vuelve fantasma y termina el juego con un resumen.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "reproductor",
   "titulo": "Reproductor de música",
   "queEs": "Reproductor con cuentas de usuario y canciones favoritas.",
   "descripcion": [
    "Lista de canciones, aleatorio, repetir, barra de avance y volumen. Cada usuario inicia sesión y guarda sus favoritas en el navegador."
   ],
   "tecnologias": [
    "JavaScript",
    "Audio API",
    "localStorage"
   ],
   "repo": "https://github.com/luisito2806/reproductor-musica",
   "fotos": [
    {
     "archivo": "01-inicio",
     "src": "img/galeria/reproductor/01-inicio.webp",
     "pie": "Lista de canciones.",
     "explicacion": "Las canciones y portadas son archivos locales; el reproductor usa la etiqueta audio de HTML con controles propios.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-registro",
     "src": "img/galeria/reproductor/02-registro.webp",
     "pie": "Inicio de sesión o registro.",
     "explicacion": "Las cuentas se guardan en el navegador con localStorage. Es una práctica de manejo de datos en el cliente, no un sistema de seguridad real: no hay servidor.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-reproduciendo",
     "src": "img/galeria/reproductor/03-reproduciendo.webp",
     "pie": "Reproduciendo con canciones marcadas como favoritas.",
     "explicacion": "Aleatorio, repetir, barra de avance, volumen y “Me gusta” por canción, todo controlado con JavaScript.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-me-gusta",
     "src": "img/galeria/reproductor/04-me-gusta.webp",
     "pie": "Vista de “Mis Me Gusta”.",
     "explicacion": "Cada usuario tiene su propia lista de favoritas que se conserva al recargar o volver a entrar.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "pong",
   "titulo": "Pong vs Pared",
   "queEs": "Pong de un jugador contra la pared.",
   "descripcion": [
    "Se eligen teclas, colores, puntos por golpe y velocidad. Cada 5 golpes sube el nivel, y se guardan los 3 mejores resultados."
   ],
   "tecnologias": [
    "JavaScript",
    "Canvas"
   ],
   "repo": "https://github.com/luisito2806/Pingpon",
   "demo": "https://luisito2806.github.io/Pingpon/",
   "fotos": [
    {
     "archivo": "01-configuracion",
     "src": "img/galeria/pong/01-configuracion.webp",
     "pie": "Configuración de la partida.",
     "explicacion": "Antes de jugar se eligen nombre, teclas, colores, puntos por golpe y velocidad inicial.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-partida",
     "src": "img/galeria/pong/02-partida.webp",
     "pie": "Partida en curso.",
     "explicacion": "El juego corre en Canvas con un ciclo de animación. La pelota rebota en la pared derecha y hay que regresarla con la barra.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-fin-de-partida",
     "src": "img/galeria/pong/03-fin-de-partida.webp",
     "pie": "Fin de la partida y los 3 mejores resultados.",
     "explicacion": "Cada 5 golpes sube el nivel y la velocidad. Al perder, el resultado se guarda en localStorage y se muestran los 3 mejores.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "cotizador",
   "titulo": "Cotizador web",
   "queEs": "Calcula cuánto cuesta un sitio web.",
   "descripcion": [
    "Según el número de páginas y los servicios extra (dominio, hosting, base de datos, SEO). Acepta cupones de descuento y muestra el desglose con IVA."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/nav-bars",
   "demo": "https://luisito2806.github.io/nav-bars/cotizador-web/",
   "fotos": [
    {
     "archivo": "01-formulario",
     "src": "img/galeria/cotizador/01-formulario.webp",
     "pie": "Formulario del cotizador.",
     "explicacion": "Las primeras 3 páginas cuestan $5,000 y cada página extra $2,000. Cada servicio extra tiene su precio guardado en el propio checkbox.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-cotizacion",
     "src": "img/galeria/cotizador/02-cotizacion.webp",
     "pie": "Cotización con el desglose y el IVA.",
     "explicacion": "El cupón “septiembre” da 15 % de descuento. Sobre el subtotal con descuento se calcula el IVA del 16 % y el resultado se muestra en una ventana con el desglose.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-primera-version",
     "src": "img/galeria/cotizador/03-primera-version.webp",
     "pie": "Primera versión, sin estilos (repositorio cotizador-web).",
     "explicacion": "La primera versión, solo con HTML, antes de agregar estilos y la lógica en JavaScript.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "estructuras-datos",
   "titulo": "Estructuras de datos",
   "queEs": "Programas de escritorio en Java para la materia de estructuras de datos.",
   "descripcion": [
    "Un laberinto de 10×10 que se resuelve solo con backtracking recursivo y se ve paso a paso: el camino encontrado queda en verde. También una app de playlists hecha con una lista circular doblemente enlazada."
   ],
   "tecnologias": [
    "Java",
    "Swing",
    "Listas enlazadas",
    "Recursividad"
   ],
   "repo": null,
   "repoTexto": "Repositorio privado",
   "fotos": [
    {
     "archivo": "01-laberinto-nivel-1",
     "src": "img/galeria/estructuras-datos/01-laberinto-nivel-1.webp",
     "pie": "Laberinto, nivel 1, resuelto.",
     "explicacion": "El laberinto es una matriz de 10×10. “Resolver IA” prueba moverse abajo, derecha, arriba e izquierda de forma recursiva; si llega a un callejón sin salida, regresa (backtracking).",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "02-laberinto-nivel-2",
     "src": "img/galeria/estructuras-datos/02-laberinto-nivel-2.webp",
     "pie": "Laberinto, nivel 2, resuelto.",
     "explicacion": "La búsqueda se pinta paso a paso: verde es el camino actual y rojo las casillas descartadas. Corre en un hilo aparte para no congelar la ventana.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "03-laberinto-nivel-3",
     "src": "img/galeria/estructuras-datos/03-laberinto-nivel-3.webp",
     "pie": "Laberinto, nivel 3, resuelto.",
     "explicacion": "También se puede jugar con las flechas, y con clic se ponen o quitan paredes para crear un laberinto propio.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "04-laberinto-nivel-4",
     "src": "img/galeria/estructuras-datos/04-laberinto-nivel-4.webp",
     "pie": "Laberinto, nivel 4, resuelto.",
     "explicacion": "Cada nivel acomoda las paredes distinto. Si no hay camino posible (como en el nivel 5), la recursión agota todas las opciones y avisa “Sin solución”.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "05-playlist",
     "src": "img/galeria/estructuras-datos/05-playlist.webp",
     "pie": "App de playlists reproduciendo una canción.",
     "explicacion": "Cada playlist es una lista circular doblemente enlazada: cada nodo apunta a la canción siguiente y a la anterior, y la última conecta con la primera, así los botones « » nunca se acaban.",
     "w": 486,
     "h": 563
    }
   ]
  },
  {
   "slug": "poo",
   "titulo": "Programación orientada a objetos",
   "queEs": "Prácticas de consola en Java.",
   "descripcion": [
    "Herencia, clases abstractas y polimorfismo. Cada práctica la entregué en su propia rama con un pull request que revisó el profesor. Las capturas son ejecuciones reales con datos de ejemplo; en verde, lo que escribe el usuario."
   ],
   "tecnologias": [
    "Java",
    "POO",
    "Git"
   ],
   "repo": null,
   "repoTexto": "Repositorio privado",
   "fotos": [
    {
     "archivo": "01-renta-de-vehiculos",
     "src": "img/galeria/poo/01-renta-de-vehiculos.webp",
     "pie": "Renta de vehículos: registrar un auto y una moto, ver su información y calcular la renta.",
     "explicacion": "Vehiculo es una clase abstracta y Auto, Camión y Moto la heredan, cada una con su propio mostrarInfo(). Todos se guardan en una misma lista y el programa los trata igual gracias al polimorfismo.",
     "w": 1400,
     "h": 875
    },
    {
     "archivo": "02-banco",
     "src": "img/galeria/poo/02-banco.webp",
     "pie": "Banco: crear cuenta, iniciar sesión, depositar, consultar saldo y ver estadísticas.",
     "explicacion": "Cada cuenta es un objeto con titular y saldo privados. Los contadores del banco (cuentas creadas y dinero total) son atributos estáticos compartidos por todas las cuentas.",
     "w": 1400,
     "h": 875
    }
   ]
  },
  {
   "slug": "lista-tareas",
   "titulo": "Lista de tareas",
   "queEs": "Lista de tareas que se guarda en el navegador.",
   "descripcion": [
    "Agregar, marcar como hecha y borrar, sin perder nada al recargar la página."
   ],
   "tecnologias": [
    "JavaScript",
    "localStorage"
   ],
   "repo": "https://github.com/luisito2806/localstorage",
   "demo": "https://luisito2806.github.io/localstorage/",
   "fotos": [
    {
     "archivo": "01-tareas",
     "src": "img/galeria/lista-tareas/01-tareas.webp",
     "pie": "Tareas agregadas.",
     "explicacion": "Cada tarea es un objeto con id, texto y si está completada. El arreglo completo se guarda en localStorage como JSON cada vez que cambia.",
     "w": 1120,
     "h": 460
    },
    {
     "archivo": "02-despues-de-recargar",
     "src": "img/galeria/lista-tareas/02-despues-de-recargar.webp",
     "pie": "Las tareas siguen ahí después de recargar, con dos completadas.",
     "explicacion": "Al cargar la página se lee de localStorage, así las tareas y su estado siguen ahí aunque se cierre el navegador.",
     "w": 1120,
     "h": 460
    }
   ]
  }
 ],
 "en": [
  {
   "slug": "offrly",
   "titulo": "Offrly",
   "etiqueta": "Team project · 4 members",
   "queEs": "Hyperlocal platform that connects households in Morelia with tradespeople.",
   "descripcion": [
    "A client posts what they need and nearby electricians and plumbers send an offer. The price is negotiated in a chat with offers and counteroffers, and at the end both sides rate each other.",
    "We built a complete, mobile-first demo to pitch to investors. The photos follow a client who posts a water leak and receives three quotes."
   ],
   "aportes": [
    "Negotiation chat: reference price range, warning when an offer is too low, − and + buttons in $50 steps, and a 4-step progress line for the deal.",
    "Posting a request: time slots, approximate location, up to 3 photos of the problem and a screen to compare quotes.",
    "Profile, chats and home: WhatsApp-style chat list with filters, a grid portfolio for tradespeople and a “New” badge for those with few reviews.",
    "Automated tests: full walkthrough in Firefox at phone size (16 of 16 passing), and I fixed the test runner on Windows.",
    "Demo content: 45 photos of profiles, portfolios and problems so everything looks real.",
    "I reviewed and merged the team's pull requests."
   ],
   "tecnologias": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "WebSocket",
    "Selenium"
   ],
   "repo": null,
   "repoTexto": "Private team repository",
   "fotos": [
    {
     "archivo": "01-entrada",
     "src": "img/galeria/offrly/01-entrada.webp",
     "pie": "Entry screen: the visitor chooses whether they need a pro or are one.",
     "explicacion": "The app asks for the user type first because clients and tradespeople see different screens: clients post needs, tradespeople receive them and quote.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "02-perfiles",
     "src": "img/galeria/offrly/02-perfiles.webp",
     "pie": "Client sign-in with the demo profiles.",
     "explicacion": "It is an investor demo, so sign-in is simulated with 6 prebuilt profiles. Each visitor gets their own “world” on the server: what one guest does is not seen by another, and “Reset demo” restores everything.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "03-inicio",
     "src": "img/galeria/offrly/03-inicio.webp",
     "pie": "Client home with their requests and tradespeople's recent work.",
     "explicacion": "Home combines the client’s requests with a feed of recent jobs. Everything arrives over WebSocket, so the screen updates on its own.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "04-oferta-oficio",
     "src": "img/galeria/offrly/04-oferta-oficio.webp",
     "pie": "New request, question 1: type of professional.",
     "explicacion": "Posting a need takes 5 short questions. The first one sets the trade, which defines the jobs offered in the next one.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "05-oferta-horario",
     "src": "img/galeria/offrly/05-oferta-horario.webp",
     "pie": "Question 3: when, and preferred time slots.",
     "explicacion": "The client picks when and one or more slots (morning, midday, afternoon, night) or an exact time. Slots and exact time are mutually exclusive, and the button stays disabled until the choice is valid.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "06-oferta-zona-y-foto",
     "src": "img/galeria/offrly/06-oferta-zona-y-foto.webp",
     "pie": "Question 4: approximate area, description and a photo of the problem.",
     "explicacion": "Only the neighborhood is asked: the exact address is shared once a deal is closed. Up to 3 photos can be uploaded; the server only accepts images and videos up to 50 MB and serves them from the same machine, no cloud.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "07-oferta-presupuesto",
     "src": "img/galeria/offrly/07-oferta-presupuesto.webp",
     "pie": "Question 5: budget and summary before notifying tradespeople.",
     "explicacion": "A summary is shown before posting. The budget is only a guide: “you can always negotiate” makes clear the final price is agreed in the chat.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "08-buscando-profesionistas",
     "src": "img/galeria/offrly/08-buscando-profesionistas.webp",
     "pie": "The request is posted and nearby tradespeople are searched.",
     "explicacion": "Once posted, the request goes out to tradespeople in that trade and the screen says quotes will show up in a few seconds.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "09-chats",
     "src": "img/galeria/offrly/09-chats.webp",
     "pie": "Quotes arrive as chats in negotiation.",
     "explicacion": "Each quote opens a chat. The top banner sums up how many arrived and links straight to the comparison. The “Unread” and “Negotiating” filters come from each conversation’s state.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "10-negociacion",
     "src": "img/galeria/offrly/10-negociacion.webp",
     "pie": "Chat with the deal progress line and the reference price.",
     "explicacion": "The 4-step line (quote, negotiation, agreement, done) shows where the deal stands. The reference range comes from the job’s base price ±20 %, rounded to $50.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "11-contraoferta",
     "src": "img/galeria/offrly/11-contraoferta.webp",
     "pie": "Pending offer with buttons to accept, write or counter.",
     "explicacion": "Offers have their own card with an accept button. Prices are not decided by the chat text but by a deterministic rules engine: each tradesperson has a limit, makes at most 3 counteroffers and ignores absurd offers.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "12-comparar-cotizaciones",
     "src": "img/galeria/offrly/12-comparar-cotizaciones.webp",
     "pie": "Comparing the 3 quotes, with the cheapest one marked.",
     "explicacion": "The comparison lists quotes in arrival order and marks the cheapest, showing each tradesperson’s rating and area so the decision is based on more than price.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "13-perfil-cliente",
     "src": "img/galeria/offrly/13-perfil-cliente.webp",
     "pie": "Client profile with reviews.",
     "explicacion": "Clients also have a profile with reviews, because ratings go both ways: tradespeople know who they will work with.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "14-inicio-profesionista",
     "src": "img/galeria/offrly/14-inicio-profesionista.webp",
     "pie": "An electrician’s home, waiting for nearby requests.",
     "explicacion": "Tradespeople see real-time requests for their trade near their area, plus the same feed of recent work.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "15-perfil-profesionista",
     "src": "img/galeria/offrly/15-perfil-profesionista.webp",
     "pie": "Tradesperson profile with cover photo and specialties.",
     "explicacion": "The profile works like a professional network: cover, specialties, years of experience and rating. Nothing says “verified”, by brand decision, so the demo never promises something it does not check.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "16-portafolio-profesionista",
     "src": "img/galeria/offrly/16-portafolio-profesionista.webp",
     "pie": "Grid portfolio and client reviews.",
     "explicacion": "The portfolio is a 3-column grid and tradespeople can add jobs with photos or videos. Videos are served with range requests so they can be scrubbed.",
     "w": 600,
     "h": 1298
    }
   ]
  },
  {
   "slug": "minisuper",
   "titulo": "Mini Súper",
   "queEs": "Point-of-sale system for a small grocery store in a rural area.",
   "descripcion": [
    "The store sells, charges and stores everything on its own computer, so it works without internet. From the city, the owner can check the store with a USB drive, a remote connection or a cloud dashboard.",
    "The photos come from the demo with test data: the cash register is opened, three sales are rung up and then show up in the sales history and reports."
   ],
   "aportes": [
    "Sales and cash register: barcode scanner, keyboard shortcuts, opening and closing the register, configurable VAT.",
    "Inventory and purchasing: low-stock alerts and a suggested shopping list based on what sold.",
    "Reports: daily profit, best sellers, payroll and worker credit, Excel export.",
    "Built for the store: automatic daily backup, USB copy and an installer that makes the system start on its own on Windows.",
    "Automated tests for the API, the database, money calculations and syncing."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "ExcelJS",
    "PowerShell"
   ],
   "repo": "https://github.com/luisito2806/minisuper",
   "demo": "https://minisuper-demo.onrender.com/",
   "demoNota": "Sign in with admin / Admin123! (or cajero / Cajero123!). Data resets on its own. It runs on a free server, so it may take about a minute to wake up.",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/minisuper/01-login.webp",
     "pie": "Sign-in.",
     "explicacion": "Passwords are stored with bcrypt. If the user does not exist, the server compares against a dummy hash so the response takes the same time and does not reveal which users exist. The session is regenerated on login, and the cookie is httpOnly, SameSite=strict and lasts 12 hours.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-caja-cerrada",
     "src": "img/galeria/minisuper/02-caja-cerrada.webp",
     "pie": "Sales screen with the register closed and a low-stock warning.",
     "explicacion": "If the store requires it in Settings, nothing can be charged without an open register. The low-stock warning compares each product’s stock with its minimum.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-venta",
     "src": "img/galeria/minisuper/03-venta.webp",
     "pie": "A sale with products added by name or barcode.",
     "explicacion": "Products are added by name or barcode (a USB scanner works like a keyboard). Amounts are computed with integers in cents, not decimals, to avoid rounding errors; quantities accept thousandths to sell by the kilo.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-cobro",
     "src": "img/galeria/minisuper/04-cobro.webp",
     "pie": "Cash payment with the change calculated.",
     "explicacion": "F2 charges and F8 switches between cash and credit. Only an admin can apply discounts, and the server rejects the charge if the amount received does not cover the total.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-venta-cobrada",
     "src": "img/galeria/minisuper/05-venta-cobrada.webp",
     "pie": "Sale recorded with its receipt number.",
     "explicacion": "The sale is saved in a transaction: product rows are locked, stock is checked and inventory is deducted. If anything fails, nothing is saved halfway. Each sale gets a consecutive number.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-caja",
     "src": "img/galeria/minisuper/06-caja.webp",
     "pie": "Open register: starting cash, cash sales and closing.",
     "explicacion": "Expected cash = starting cash + cash sales + deposits − withdrawals. You cannot withdraw more than should be there, and closing records the counted amount and the difference.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-ventas",
     "src": "img/galeria/minisuper/07-ventas.webp",
     "pie": "Sales history with the option to cancel.",
     "explicacion": "Cancelling a sale returns the products to inventory inside a transaction. If that sale’s register is already closed, it warns that the refunded cash must be recorded as a withdrawal.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-productos",
     "src": "img/galeria/minisuper/08-productos.webp",
     "pie": "Product catalog with cost, price and stock.",
     "explicacion": "Catalog with code, category, supplier, cost, price, VAT and stock. It can be imported from and exported to Excel. Only an admin can change it: the permission is checked on the server, not just in the UI.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-inventario",
     "src": "img/galeria/minisuper/09-inventario.webp",
     "pie": "Inventory with a suggested shopping list.",
     "explicacion": "The suggested list takes products at or below their minimum and proposes buying enough to reach twice the minimum, or what sold in the last 2 weeks if that is more.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-compras",
     "src": "img/galeria/minisuper/10-compras.webp",
     "pie": "Purchases from suppliers.",
     "explicacion": "Recording a purchase creates an inventory entry and, if requested, updates the product cost.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "11-nomina",
     "src": "img/galeria/minisuper/11-nomina.webp",
     "pie": "Payroll deductions for workers’ credit purchases.",
     "explicacion": "Workers can buy on credit. Payroll gathers their purchases from Saturday to Friday to deduct them from their pay; cancelled sales do not count.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "12-reportes",
     "src": "img/galeria/minisuper/12-reportes.webp",
     "pie": "Sales report with estimated profit.",
     "explicacion": "Sales, estimated profit (sales before VAT minus cost of goods), average ticket and cancellations over a date range. It can be filtered by cashier and exported to Excel or printed.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "13-usuarios",
     "src": "img/galeria/minisuper/13-usuarios.webp",
     "pie": "Users and permissions (admin and cashier).",
     "explicacion": "Two roles: admin and cashier. The user is re-read from the database on every request, so disabling them or changing their role takes effect immediately.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "14-configuracion",
     "src": "img/galeria/minisuper/14-configuracion.webp",
     "pie": "Store settings and receipt preview.",
     "explicacion": "Store details, VAT handling, date format and receipt with preview. This is also where the automatic daily backup (30 kept) and the USB copy to take data to the city live.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "doo-barber",
   "titulo": "Doo Barber",
   "etiqueta": "Personal project",
   "queEs": "Appointment system for barbershops, designed to be sold to several businesses.",
   "descripcion": [
    "Clients choose a service, barber, date and time, and book in under a minute without calling. The owner gets a dashboard with the schedule, walk-ins, blocked hours and reports. Each barbershop can set its own color and logo."
   ],
   "aportes": [
    "No double-booking: weekly hours, service duration and blocked hours; the server works out which times are free.",
    "Security: hashed password, token sessions, prices that always come from the server and XSS protection.",
    "WhatsApp notifications with prefilled messages.",
    "I worked section by section, each on its own branch and pull request."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "SQLite",
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/PW",
   "demo": "https://doo-barber.onrender.com/",
   "demoNota": "You can make a test booking. It runs on a free server, so it may take about a minute to wake up.",
   "fotos": [
    {
     "archivo": "01-reserva",
     "src": "img/galeria/doo-barber/01-reserva.webp",
     "pie": "Public booking page.",
     "explicacion": "Public page for clients. Services, prices and durations come from the server; each shop sets its own color and logo from the dashboard.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-servicio-y-barbero",
     "src": "img/galeria/doo-barber/02-servicio-y-barbero.webp",
     "pie": "Step 1: service and barber.",
     "explicacion": "Step 1 of 3. Choosing a service sets its duration, which the server uses to work out which times fit before closing.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-fecha-y-hora",
     "src": "img/galeria/doo-barber/03-fecha-y-hora.webp",
     "pie": "Step 2: calendar and available times.",
     "explicacion": "The server computes free times from weekly hours, the slot interval (15, 30 or 60 min), blocked days and hours, and each barber’s appointments, so no service overlaps another. Bookings are allowed up to 30 days ahead.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03b-confirmar",
     "src": "img/galeria/doo-barber/03b-confirmar.webp",
     "pie": "Step 3: confirm with name and WhatsApp.",
     "explicacion": "On confirm, the server re-checks availability inside a booking queue that handles one request at a time, so two people can never get the same slot. The price is never taken from the browser: it is read from the database. A phone number with 2 no-shows cannot book.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-reserva-celular",
     "src": "img/galeria/doo-barber/04-reserva-celular.webp",
     "pie": "Booking on a phone.",
     "explicacion": "Mobile-first, since most bookings happen on phones. Clients get a cancellation code to check or cancel their appointment, so nobody can see other people’s bookings by guessing numbers.",
     "w": 600,
     "h": 1298
    },
    {
     "archivo": "05-login",
     "src": "img/galeria/doo-barber/05-login.webp",
     "pie": "Owner dashboard sign-in.",
     "explicacion": "The owner’s password is stored as a salted scrypt hash and compared in constant time. After 5 failed attempts from the same IP, login is locked for 15 minutes. If no password is configured, a random one is generated and shown only once.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-agenda",
     "src": "img/galeria/doo-barber/06-agenda.webp",
     "pie": "Weekly schedule with income, completed and pending appointments.",
     "explicacion": "The session is a random 32-byte token; only its SHA-256 hash is stored, and it expires after 7 days. From the schedule, appointments are marked done or “no-show”, rescheduled or cancelled; rescheduling goes through the same overlap check.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-nueva-cita",
     "src": "img/galeria/doo-barber/07-nueva-cita.webp",
     "pie": "Recording a walk-in appointment.",
     "explicacion": "For clients who walk in or call. The owner can record past appointments or clients with no-shows, but the no-overlap rule still applies.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-bloqueos",
     "src": "img/galeria/doo-barber/08-bloqueos.webp",
     "pie": "Blocking whole days or ranges of hours.",
     "explicacion": "Whole days or hour ranges can be blocked. If the day already has bookings, the system says how many and only cancels them if the owner confirms.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-reportes",
     "src": "img/galeria/doo-barber/09-reportes.webp",
     "pie": "Income report by service.",
     "explicacion": "Income by service counting only completed appointments, filterable by date and barber. Exports to Excel (CSV) or prints to PDF.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-configuracion",
     "src": "img/galeria/doo-barber/10-configuracion.webp",
     "pie": "Brand settings, WhatsApp messages and barber team.",
     "explicacion": "Only options from an allow-list are accepted, each with its own validator. The logo is compressed in the browser before upload, WhatsApp messages are built from templates (wa.me), and all text is escaped before rendering to prevent XSS.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "duelo-ronin",
   "titulo": "Duelo Ronin 1 vs 1",
   "queEs": "Real-time two-player fighting game in the browser.",
   "descripcion": [
    "Two people join from their browsers and fight two rounds with punches, kicks, jumps and blocks. The server simulates physics and hits; browsers only send key presses."
   ],
   "aportes": [
    "Authoritative server: it computes physics, hits and health; browsers only send keys, so nobody can cheat.",
    "Capped at 2: a third visitor sees “Duel full”; if someone disconnects they have 10 seconds to return.",
    "Rounds, countdown, rematch and a practice mode against a punching bag while the opponent arrives.",
    "32 automated tests for the game logic and networking."
   ],
   "tecnologias": [
    "Node.js",
    "Socket.IO",
    "Canvas",
    "JavaScript"
   ],
   "repo": "https://github.com/luisito2806/1vs1",
   "demo": "https://duelo-ronin.onrender.com/",
   "demoNota": "Open it in two browsers or devices to fight; with one you can practice. It runs on a free server, so it may take about a minute to wake up.",
   "fotos": [
    {
     "archivo": "01-practica",
     "src": "img/galeria/duelo-ronin/01-practica.webp",
     "pie": "Practice mode against the punching bag while the opponent arrives.",
     "explicacion": "While waiting, you practice on a punching bag: hits do no damage. The character and the stage are drawn with code on Canvas.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-rival-conectado",
     "src": "img/galeria/duelo-ronin/02-rival-conectado.webp",
     "pie": "The second player arrives and both press “Ready”.",
     "explicacion": "The 2-player cap is enforced only on the server, before joining. Both must press “Ready”; anyone who doesn’t within 60 seconds is removed so the duel isn’t blocked.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-cuenta-regresiva",
     "src": "img/galeria/duelo-ronin/03-cuenta-regresiva.webp",
     "pie": "Countdown before the fight.",
     "explicacion": "The duel is a state machine: waiting → ready → countdown → fighting → round end → game over. Whoever wins 2 rounds wins.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-pelea",
     "src": "img/galeria/duelo-ronin/04-pelea.webp",
     "pie": "Fight in progress with health bars and timer.",
     "explicacion": "The server simulates the fight 60 times per second: gravity, platforms, hits and health. Browsers only send keys and draw the state, interpolating between updates, so nobody can cheat.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-hitboxes",
     "src": "img/galeria/duelo-ronin/05-hitboxes.webp",
     "pie": "Hitbox view (H key).",
     "explicacion": "Press H to see hitboxes. Each attack has startup, active and recovery time: the punch is fast and deals 7; the kick is slow, deals 13 and pushes back. Blocking cuts damage to 20 %.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-duelo-lleno",
     "src": "img/galeria/duelo-ronin/06-duelo-lleno.webp",
     "pie": "A third visitor sees “Duel full”.",
     "explicacion": "A third visitor sees “Duel full” and never receives the game state. If a player disconnects, their spot is held for 10 seconds and the fight pauses.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "tecnoaula",
   "titulo": "TecnoAula",
   "queEs": "School platform with a different dashboard for each role.",
   "descripcion": [
    "Admins, directors, teachers and students each get their own dashboard. Courses are organized in blocks and topics; students see their progress, submit assignments, check their calendar and grades, and take part in forums and chat.",
    "The photos were taken with the repository's sample data, signing in as a user of each role."
   ],
   "aportes": [
    "Secure sign-in: “Remember me”, failed-attempt limits and token-based password reset.",
    "Roles and permissions: a main role plus extra roles and permissions per user.",
    "Full courses: blocks, topics, materials, assignments, forums and per-course chat, with each student’s progress.",
    "Progress and grade reports per course.",
    "Database credentials are kept out of the repository."
   ],
   "tecnologias": [
    "PHP",
    "MySQL",
    "PDO",
    "JavaScript",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/TecnoAula",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/tecnoaula/01-login.webp",
     "pie": "Sign-in and sign-up.",
     "explicacion": "Passwords use password_hash. There is a limit of 5 attempts per email and 20 per IP in 15 minutes, the session is regenerated on login and the cookie is httpOnly and SameSite. Every form carries a CSRF token.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-admin-dashboard",
     "src": "img/galeria/tecnoaula/03-admin-dashboard.webp",
     "pie": "Admin: overview of users, courses, enrollments and submissions.",
     "explicacion": "Every page checks the role on the server before rendering; if it doesn’t match, it returns 403. The overview is built with count queries over users, courses, enrollments and submissions.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-admin-usuarios",
     "src": "img/galeria/tecnoaula/04-admin-usuarios.webp",
     "pie": "Admin: user and role management.",
     "explicacion": "Disabling or deleting someone ends all their sessions, including “Remember me”. Users are soft-deleted with a timestamp, and every change is written to the activity log.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-admin-roles",
     "src": "img/galeria/tecnoaula/05-admin-roles.webp",
     "pie": "Admin: roles and permissions.",
     "explicacion": "Each user has a main role and can have extra roles and permissions (create courses, view reports, manage users), stored in separate tables.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "06-admin-cursos",
     "src": "img/galeria/tecnoaula/06-admin-cursos.webp",
     "pie": "Admin: all courses on the platform.",
     "explicacion": "List of every course with its status (draft or published), teacher, students and start date.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "07-reportes",
     "src": "img/galeria/tecnoaula/07-reportes.webp",
     "pie": "Performance reports by course.",
     "explicacion": "Average progress, submissions and grade per course, computed in MySQL with aggregations.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "08-configuracion",
     "src": "img/galeria/tecnoaula/08-configuracion.webp",
     "pie": "Platform settings.",
     "explicacion": "General options like the platform name and whether student sign-up is open. Database credentials live in a config.php that is not committed.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "09-docente-inicio",
     "src": "img/galeria/tecnoaula/09-docente-inicio.webp",
     "pie": "Teacher: their courses with students and submissions to grade.",
     "explicacion": "Teachers only see their own courses. The cards show students, submissions to grade and average progress.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "10-docente-cursos",
     "src": "img/galeria/tecnoaula/10-docente-cursos.webp",
     "pie": "Teacher: course list.",
     "explicacion": "From here they create new courses and open their own to edit.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "11-docente-curso",
     "src": "img/galeria/tecnoaula/11-docente-curso.webp",
     "pie": "Teacher: editing blocks, topics and assessments of a course.",
     "explicacion": "A course is built from blocks, topics and materials. Blocks and topics are reordered by dragging, and the new order is saved with a request to the server.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "12-docente-alumnos",
     "src": "img/galeria/tecnoaula/12-docente-alumnos.webp",
     "pie": "Teacher: student progress.",
     "explicacion": "Each student’s progress, computed from the topics they have marked as completed.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "13-director",
     "src": "img/galeria/tecnoaula/13-director.webp",
     "pie": "Director: student follow-up.",
     "explicacion": "Directors follow students and courses without being able to change system settings.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "14-alumno-cursos",
     "src": "img/galeria/tecnoaula/14-alumno-cursos.webp",
     "pie": "Student: their courses with progress percentage.",
     "explicacion": "Students see their courses with progress and a shortcut to pick up where they left off.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "15-alumno-curso",
     "src": "img/galeria/tecnoaula/15-alumno-curso.webp",
     "pie": "Student: course content and upcoming assignments.",
     "explicacion": "Course view with tabs for content, materials, forums, chat, assignments and grades. Each completed topic updates progress.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "16-alumno-tareas",
     "src": "img/galeria/tecnoaula/16-alumno-tareas.webp",
     "pie": "Student: assignments to submit.",
     "explicacion": "Pending, submitted and graded assignments, with due date and points.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "17-alumno-calendario",
     "src": "img/galeria/tecnoaula/17-alumno-calendario.webp",
     "pie": "Student: due-date calendar.",
     "explicacion": "Monthly calendar with due dates from all their courses.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "18-alumno-calificaciones",
     "src": "img/galeria/tecnoaula/18-alumno-calificaciones.webp",
     "pie": "Student: grades by course.",
     "explicacion": "Overall average and the grade of each submission with its comment.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "19-foros",
     "src": "img/galeria/tecnoaula/19-foros.webp",
     "pie": "Course forums.",
     "explicacion": "Per-course forums for questions and discussion.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "20-foro",
     "src": "img/galeria/tecnoaula/20-foro.webp",
     "pie": "A conversation inside a forum.",
     "explicacion": "Replies are saved with prepared statements and all text is escaped with htmlspecialchars before rendering, to prevent XSS.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "21-mensajes",
     "src": "img/galeria/tecnoaula/21-mensajes.webp",
     "pie": "Course chat messages.",
     "explicacion": "The course chat polls for new messages every 5 seconds, asking only for those after the last one it already has.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "22-perfil",
     "src": "img/galeria/tecnoaula/22-perfil.webp",
     "pie": "Profile and password change.",
     "explicacion": "Users update their details and password. “Forgot password” sends a link that expires in 1 hour; only the token’s hash is stored, and the response is the same whether or not the email exists.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "calificaciones",
   "titulo": "Portal de calificaciones",
   "queEs": "Portal where each student signs up and checks their grades.",
   "descripcion": [
    "Students create an account with their student ID, sign in and see their grades by subject."
   ],
   "aportes": [
    "Sign-up and sign-in with PHP sessions.",
    "Passwords stored as hashes (password_hash and password_verify).",
    "Prepared statements to prevent SQL injection.",
    "Student dashboard with their details and grade table."
   ],
   "tecnologias": [
    "PHP",
    "MySQL",
    "Sesiones"
   ],
   "repo": "https://github.com/luisito2806/Ambientes-web",
   "fotos": [
    {
     "archivo": "01-login",
     "src": "img/galeria/calificaciones/01-login.webp",
     "pie": "Sign-in.",
     "explicacion": "Looks up the user by email with a prepared statement and checks the password with password_verify. If it matches, their id is stored in the PHP session.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-registro",
     "src": "img/galeria/calificaciones/02-registro.webp",
     "pie": "Sign-up with student ID.",
     "explicacion": "Before signing up it checks that the student ID and email are not taken. The password is stored with password_hash, never in plain text.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-panel",
     "src": "img/galeria/calificaciones/03-panel.webp",
     "pie": "Student dashboard with details and grades.",
     "explicacion": "The dashboard only opens with an active session; otherwise it redirects to sign-in. Data and grades are queried with the session id, so each student only sees their own.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-todas-las-calificaciones",
     "src": "img/galeria/calificaciones/04-todas-las-calificaciones.webp",
     "pie": "General list of grades.",
     "explicacion": "General list from the grades table, with every value escaped with htmlspecialchars.",
     "w": 1240,
     "h": 420
    }
   ]
  },
  {
   "slug": "pokedex",
   "titulo": "Pokédex",
   "queEs": "Pokémon search that queries the PokéAPI from the server.",
   "descripcion": [
    "Search a Pokémon by name or number and the server fetches its data from the PokéAPI. Below there is a catalog to pick them by hand."
   ],
   "aportes": [
    "Calling an external API from PHP, without exposing it to the browser.",
    "Normal and shiny sprites, types, height, weight and abilities.",
    "Base stats as colored bars.",
    "Catalog of the first Pokémon to pick without typing."
   ],
   "tecnologias": [
    "PHP",
    "API REST",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/Pokedex",
   "fotos": [
    {
     "archivo": "01-charizard",
     "src": "img/galeria/pokedex/01-charizard.webp",
     "pie": "Searching for Charizard.",
     "explicacion": "The form sends the name via GET. PHP cleans it, URL-encodes it and queries the PokéAPI from the server with file_get_contents; if it doesn’t exist, it shows a notice instead of an error.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "02-estadisticas",
     "src": "img/galeria/pokedex/02-estadisticas.webp",
     "pie": "Details and base stats.",
     "explicacion": "The JSON response is decoded in PHP and each stat is drawn as a bar with its own color. All text coming from the API is escaped before rendering.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "03-catalogo",
     "src": "img/galeria/pokedex/03-catalogo.webp",
     "pie": "Catalog to pick a Pokémon.",
     "explicacion": "The catalog asks the API for the first 24 Pokémon; each card is a link that runs the search.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "04-pikachu",
     "src": "img/galeria/pokedex/04-pikachu.webp",
     "pie": "Searching for Pikachu.",
     "explicacion": "Each search shows the animated normal and shiny sprites, types and abilities.",
     "w": 1366,
     "h": 820
    },
    {
     "archivo": "05-gengar",
     "src": "img/galeria/pokedex/05-gengar.webp",
     "pie": "Searching for Gengar.",
     "explicacion": "Type colors come from one CSS class per type.",
     "w": 1366,
     "h": 820
    }
   ]
  },
  {
   "slug": "catalogo",
   "titulo": "Catálogo con carrito",
   "queEs": "Electronics catalog where the server calculates the purchase total.",
   "descripcion": [
    "The client enters their name, ticks products and the server calculates the total from the form."
   ],
   "aportes": [
    "Catalog generated from a PHP array.",
    "Validates the name and that at least one product was chosen.",
    "Subtotal, 10 % discount on purchases over $500, and total to pay."
   ],
   "tecnologias": [
    "PHP",
    "HTML",
    "Formularios GET"
   ],
   "repo": "https://github.com/luisito2806/PHP-formulario",
   "fotos": [
    {
     "archivo": "01-formulario",
     "src": "img/galeria/catalogo/01-formulario.webp",
     "pie": "Form with the catalog.",
     "explicacion": "The catalog and prices live in a PHP array; the form only sends the names of the chosen products.",
     "w": 1400,
     "h": 1032
    },
    {
     "archivo": "02-resumen-con-descuento",
     "src": "img/galeria/catalogo/02-resumen-con-descuento.webp",
     "pie": "Summary of a purchase with a discount.",
     "explicacion": "The server ignores any product not in its catalog and takes the price from its own array, so prices cannot be tampered with from the browser. If the subtotal is over $500, a 10 % discount applies.",
     "w": 1040,
     "h": 580
    },
    {
     "archivo": "03-resumen-sin-descuento",
     "src": "img/galeria/catalogo/03-resumen-sin-descuento.webp",
     "pie": "Summary of a purchase under $500.",
     "explicacion": "If it doesn’t reach the minimum, it explains why there was no discount. The client’s name is escaped with htmlspecialchars before rendering.",
     "w": 1040,
     "h": 500
    }
   ]
  },
  {
   "slug": "chat-socket",
   "titulo": "Chat en tiempo real",
   "queEs": "Chat where each person joins with a name and gets a color.",
   "descripcion": [
    "Shows who is online and announces when someone joins or leaves. Messages are cleaned and length-limited on the server."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "Socket.IO"
   ],
   "repo": "https://github.com/luisito2806/socket",
   "demo": "https://chat-tiempo-real-zwkv.onrender.com/",
   "demoNota": "Open it in two tabs or share the link to chat. It runs on a free server, so it may take about a minute to wake up.",
   "fotos": [
    {
     "archivo": "01-entrada",
     "src": "img/galeria/chat-socket/01-entrada.webp",
     "pie": "Join with a username.",
     "explicacion": "On join, the server registers the person with their name (20 characters max) and assigns a color from a palette of 10.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-conversacion",
     "src": "img/galeria/chat-socket/02-conversacion.webp",
     "pie": "A conversation between three people.",
     "explicacion": "Socket.IO relays each message to everyone instantly. The server trims messages to 500 characters and ignores anyone who hasn’t joined.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-usuario-salio",
     "src": "img/galeria/chat-socket/03-usuario-salio.webp",
     "pie": "Notice when someone leaves the chat.",
     "explicacion": "When someone disconnects, the server removes them from the list and tells everyone; the online list updates on its own.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "lightship-weather",
   "titulo": "Lightship Weather",
   "queEs": "Weather API that reads each city’s data from Markdown files.",
   "descripcion": [
    "The Express server exposes /api/clima/:ciudad and the page consumes it to show each city’s weather as cards."
   ],
   "tecnologias": [
    "Node.js",
    "Express",
    "API REST",
    "Tailwind CSS"
   ],
   "repo": "https://github.com/luisito2806/IA-clima-",
   "demo": "https://lightship-weather.onrender.com/",
   "demoNota": "It runs on a free server, so it may take about a minute to wake up.",
   "fotos": [
    {
     "archivo": "01-mexico",
     "src": "img/galeria/lightship-weather/01-mexico.webp",
     "pie": "Mexico City.",
     "explicacion": "The page requests /api/clima/mexico from the Express server, which reads mexico.md and returns it as JSON. The Markdown is converted to HTML in the browser.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-tokio",
     "src": "img/galeria/lightship-weather/02-tokio.webp",
     "pie": "Tokyo.",
     "explicacion": "Adding a city is just adding its .md file to the datos/ folder, without touching the code.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-madrid",
     "src": "img/galeria/lightship-weather/03-madrid.webp",
     "pie": "Madrid.",
     "explicacion": "Each city has its own image, coordinates and main metrics.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-italia",
     "src": "img/galeria/lightship-weather/04-italia.webp",
     "pie": "Rome.",
     "explicacion": "Requesting a city that doesn’t exist returns 404 with the list of available cities.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "05-respuesta-api",
     "src": "img/galeria/lightship-weather/05-respuesta-api.webp",
     "pie": "JSON response from the API.",
     "explicacion": "A real API response: status, city, file name and the content in Markdown. CORS is open so it can be consumed from another page.",
     "w": 1400,
     "h": 560
    }
   ]
  },
  {
   "slug": "duomath",
   "titulo": "DuoMath",
   "queEs": "Platform to practice 6th-grade math.",
   "descripcion": [
    "Inspired by language-learning apps: 20-question lessons per module, with experience points, crowns and lives."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/duolingo-matematico",
   "demo": "https://luisito2806.github.io/duolingo-matematico/",
   "fotos": [
    {
     "archivo": "01-ruta",
     "src": "img/galeria/duomath/01-ruta.webp",
     "pie": "Module path.",
     "explicacion": "Five modules: addition, subtraction, multiplication, division and word problems. Finishing one earns its crown.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-ingresar",
     "src": "img/galeria/duomath/02-ingresar.webp",
     "pie": "Student profile.",
     "explicacion": "The profile is saved in the browser with localStorage: XP, crowns and lives per user. It is a practice project, there is no server.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-leccion",
     "src": "img/galeria/duomath/03-leccion.webp",
     "pie": "A lesson question.",
     "explicacion": "Each lesson has 20 multiple-choice questions on fractions, decimals and integers.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-opcion-elegida",
     "src": "img/galeria/duomath/04-opcion-elegida.webp",
     "pie": "Option chosen before checking.",
     "explicacion": "The “Check” button only becomes active after choosing an option.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "05-retroalimentacion",
     "src": "img/galeria/duomath/05-retroalimentacion.webp",
     "pie": "Correct answer with the explanation.",
     "explicacion": "It always shows how to solve it. Each mistake costs a life; with 3 mistakes the lesson ends.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "bio-terminal",
   "titulo": "Bio-Terminal",
   "queEs": "Virtual pet with a terminal look.",
   "descripcion": [
    "You have to keep it alive for 24 simulated hours (1 hour = 6 seconds) by feeding, playing and cleaning. It has three difficulty levels."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/Tamagotchi-web",
   "demo": "https://luisito2806.github.io/Tamagotchi-web/",
   "fotos": [
    {
     "archivo": "01-inicio",
     "src": "img/galeria/bio-terminal/01-inicio.webp",
     "pie": "Start: name and difficulty.",
     "explicacion": "You pick a name and difficulty. Difficulty changes how fast fun and hygiene drop and how likely events are.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-incubado",
     "src": "img/galeria/bio-terminal/02-incubado.webp",
     "pie": "The freshly hatched pet.",
     "explicacion": "A timer advances the clock: 1 simulated hour = 6 seconds. The goal is to reach 24 hours. Every 6 hours it asks for food.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-desgaste",
     "src": "img/galeria/bio-terminal/03-desgaste.webp",
     "pie": "Bars drop over time and alerts appear.",
     "explicacion": "Every second the bars drop according to difficulty (on hard, fun drops 1.2 per second) and events like dirt or wanting to play can appear, with alerts.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-alimentado",
     "src": "img/galeria/bio-terminal/04-alimentado.webp",
     "pie": "After feeding it.",
     "explicacion": "Each button handles a need. Ignore 2 food requests, or feed it 3 times in a row while full, and it turns into a ghost and the game ends with a summary.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "reproductor",
   "titulo": "Reproductor de música",
   "queEs": "Music player with user accounts and favorite songs.",
   "descripcion": [
    "Song list, shuffle, repeat, progress bar and volume. Each user signs in and keeps their favorites in the browser."
   ],
   "tecnologias": [
    "JavaScript",
    "Audio API",
    "localStorage"
   ],
   "repo": "https://github.com/luisito2806/reproductor-musica",
   "fotos": [
    {
     "archivo": "01-inicio",
     "src": "img/galeria/reproductor/01-inicio.webp",
     "pie": "Song list.",
     "explicacion": "Songs and covers are local files; the player uses the HTML audio element with custom controls.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-registro",
     "src": "img/galeria/reproductor/02-registro.webp",
     "pie": "Sign-in or sign-up.",
     "explicacion": "Accounts are stored in the browser with localStorage. It is a practice project for client-side data, not a real security system: there is no server.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-reproduciendo",
     "src": "img/galeria/reproductor/03-reproduciendo.webp",
     "pie": "Playing, with songs marked as favorites.",
     "explicacion": "Shuffle, repeat, progress bar, volume and per-song “Like”, all handled with JavaScript.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "04-me-gusta",
     "src": "img/galeria/reproductor/04-me-gusta.webp",
     "pie": "“My Likes” view.",
     "explicacion": "Each user has their own favorites list that persists after reloading or signing back in.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "pong",
   "titulo": "Pong vs Pared",
   "queEs": "Single-player Pong against a wall.",
   "descripcion": [
    "Choose keys, colors, points per hit and speed. Every 5 hits the level goes up, and the top 3 scores are saved."
   ],
   "tecnologias": [
    "JavaScript",
    "Canvas"
   ],
   "repo": "https://github.com/luisito2806/Pingpon",
   "demo": "https://luisito2806.github.io/Pingpon/",
   "fotos": [
    {
     "archivo": "01-configuracion",
     "src": "img/galeria/pong/01-configuracion.webp",
     "pie": "Game setup.",
     "explicacion": "Before playing you choose your name, keys, colors, points per hit and starting speed.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-partida",
     "src": "img/galeria/pong/02-partida.webp",
     "pie": "Game in progress.",
     "explicacion": "The game runs on Canvas with an animation loop. The ball bounces off the right wall and you return it with the paddle.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-fin-de-partida",
     "src": "img/galeria/pong/03-fin-de-partida.webp",
     "pie": "Game over and the top 3 scores.",
     "explicacion": "Every 5 hits the level and speed go up. When you lose, the score is saved in localStorage and the top 3 are shown.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "cotizador",
   "titulo": "Cotizador web",
   "queEs": "Calculates how much a website costs.",
   "descripcion": [
    "Based on the number of pages and extra services (domain, hosting, database, SEO). Accepts discount coupons and shows the breakdown with VAT."
   ],
   "tecnologias": [
    "JavaScript",
    "HTML",
    "CSS"
   ],
   "repo": "https://github.com/luisito2806/nav-bars",
   "demo": "https://luisito2806.github.io/nav-bars/cotizador-web/",
   "fotos": [
    {
     "archivo": "01-formulario",
     "src": "img/galeria/cotizador/01-formulario.webp",
     "pie": "Quote form.",
     "explicacion": "The first 3 pages cost $5,000 and each extra page $2,000. Each extra service has its price stored on its own checkbox.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "02-cotizacion",
     "src": "img/galeria/cotizador/02-cotizacion.webp",
     "pie": "Quote with breakdown and VAT.",
     "explicacion": "The “septiembre” coupon gives 15 % off. 16 % VAT is computed on the discounted subtotal and the result is shown in a window with the breakdown.",
     "w": 1280,
     "h": 800
    },
    {
     "archivo": "03-primera-version",
     "src": "img/galeria/cotizador/03-primera-version.webp",
     "pie": "First version, unstyled (cotizador-web repository).",
     "explicacion": "The first version, HTML only, before adding styles and the JavaScript logic.",
     "w": 1280,
     "h": 800
    }
   ]
  },
  {
   "slug": "estructuras-datos",
   "titulo": "Estructuras de datos",
   "queEs": "Java desktop programs for the data structures course.",
   "descripcion": [
    "A 10×10 maze that solves itself with recursive backtracking, shown step by step: the path found turns green. Also a playlist app built on a circular doubly linked list."
   ],
   "tecnologias": [
    "Java",
    "Swing",
    "Listas enlazadas",
    "Recursividad"
   ],
   "repo": null,
   "repoTexto": "Private repository",
   "fotos": [
    {
     "archivo": "01-laberinto-nivel-1",
     "src": "img/galeria/estructuras-datos/01-laberinto-nivel-1.webp",
     "pie": "Maze, level 1, solved.",
     "explicacion": "The maze is a 10×10 matrix. “Resolver IA” tries moving down, right, up and left recursively; when it hits a dead end, it backtracks.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "02-laberinto-nivel-2",
     "src": "img/galeria/estructuras-datos/02-laberinto-nivel-2.webp",
     "pie": "Maze, level 2, solved.",
     "explicacion": "The search is drawn step by step: green is the current path and red the discarded cells. It runs on a separate thread so the window doesn’t freeze.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "03-laberinto-nivel-3",
     "src": "img/galeria/estructuras-datos/03-laberinto-nivel-3.webp",
     "pie": "Maze, level 3, solved.",
     "explicacion": "You can also play with the arrow keys, and clicking adds or removes walls to build your own maze.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "04-laberinto-nivel-4",
     "src": "img/galeria/estructuras-datos/04-laberinto-nivel-4.webp",
     "pie": "Maze, level 4, solved.",
     "explicacion": "Each level places walls differently. If there is no possible path (like level 5), the recursion exhausts every option and reports “Sin solución”.",
     "w": 506,
     "h": 613
    },
    {
     "archivo": "05-playlist",
     "src": "img/galeria/estructuras-datos/05-playlist.webp",
     "pie": "Playlist app playing a song.",
     "explicacion": "Each playlist is a circular doubly linked list: each node points to the next and previous song, and the last links back to the first, so « » never run out.",
     "w": 486,
     "h": 563
    }
   ]
  },
  {
   "slug": "poo",
   "titulo": "Programación orientada a objetos",
   "queEs": "Java console practice projects.",
   "descripcion": [
    "Inheritance, abstract classes and polymorphism. I turned in each assignment on its own branch with a pull request reviewed by the professor. The screenshots are real runs with sample data; what the user types is in green."
   ],
   "tecnologias": [
    "Java",
    "POO",
    "Git"
   ],
   "repo": null,
   "repoTexto": "Private repository",
   "fotos": [
    {
     "archivo": "01-renta-de-vehiculos",
     "src": "img/galeria/poo/01-renta-de-vehiculos.webp",
     "pie": "Vehicle rental: register a car and a motorcycle, view their details and calculate the rental.",
     "explicacion": "Vehiculo is an abstract class and Auto, Camion and Moto extend it, each with its own mostrarInfo(). They all go in the same list and the program treats them the same thanks to polymorphism.",
     "w": 1400,
     "h": 875
    },
    {
     "archivo": "02-banco",
     "src": "img/galeria/poo/02-banco.webp",
     "pie": "Bank: create an account, sign in, deposit, check balance and view stats.",
     "explicacion": "Each account is an object with private holder and balance. The bank counters (accounts created and total money) are static attributes shared by all accounts.",
     "w": 1400,
     "h": 875
    }
   ]
  },
  {
   "slug": "lista-tareas",
   "titulo": "Lista de tareas",
   "queEs": "To-do list saved in the browser.",
   "descripcion": [
    "Add, mark as done and delete, without losing anything when the page reloads."
   ],
   "tecnologias": [
    "JavaScript",
    "localStorage"
   ],
   "repo": "https://github.com/luisito2806/localstorage",
   "demo": "https://luisito2806.github.io/localstorage/",
   "fotos": [
    {
     "archivo": "01-tareas",
     "src": "img/galeria/lista-tareas/01-tareas.webp",
     "pie": "Tasks added.",
     "explicacion": "Each task is an object with id, text and whether it’s done. The whole array is saved to localStorage as JSON every time it changes.",
     "w": 1120,
     "h": 460
    },
    {
     "archivo": "02-despues-de-recargar",
     "src": "img/galeria/lista-tareas/02-despues-de-recargar.webp",
     "pie": "Tasks are still there after reloading, with two completed.",
     "explicacion": "On load it reads from localStorage, so tasks and their state survive even after closing the browser.",
     "w": 1120,
     "h": 460
    }
   ]
  }
 ]
};
