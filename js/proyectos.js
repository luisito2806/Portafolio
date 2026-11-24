// Datos de las galerías de proyectos. Cada foto vive en img/galeria/<proyecto>/.
// Para agregar una foto: guárdala en esa carpeta y añádela a "fotos" con su pie y sus medidas.
window.PROYECTOS = [
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
        "src": "img/galeria/offrly/01-entrada.webp",
        "pie": "Pantalla de entrada: el visitante elige si busca un profesionista o si es uno.",
        "explicacion": "La app pregunta primero el tipo de usuario porque cliente y profesionista ven pantallas distintas: el cliente publica necesidades y el profesionista las recibe y cotiza.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/02-perfiles.webp",
        "pie": "Acceso de cliente con los perfiles de demostración.",
        "explicacion": "Es una demo para inversionistas, así que el acceso es simulado con 6 perfiles prearmados. Cada visitante tiene su propio “mundo” en el servidor: lo que hace un invitado no lo ve otro, y “Reiniciar demo” lo deja como al entrar.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/03-inicio.webp",
        "pie": "Inicio del cliente con sus ofertas y trabajos recientes de profesionistas.",
        "explicacion": "El inicio junta las ofertas del cliente y un muro con trabajos recientes de profesionistas. Todo llega por WebSocket, así que la pantalla se actualiza sola cuando hay novedades.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/04-oferta-oficio.webp",
        "pie": "Nueva oferta, pregunta 1: el tipo de profesionista.",
        "explicacion": "Publicar una necesidad son 5 preguntas cortas. La primera define el oficio y de ella dependen los trabajos que se ofrecen en la siguiente.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/05-oferta-horario.webp",
        "pie": "Pregunta 3: para cuándo y en qué franjas de horario.",
        "explicacion": "El cliente elige para cuándo y una o varias franjas (mañana, mediodía, tarde, noche) o una hora exacta. Franjas y hora exacta se excluyen entre sí y el botón no avanza hasta que la elección es válida.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/06-oferta-zona-y-foto.webp",
        "pie": "Pregunta 4: zona aproximada, descripción y foto del problema.",
        "explicacion": "Solo se pide la colonia: la dirección exacta se comparte hasta cerrar el acuerdo. Se pueden subir hasta 3 fotos; el servidor solo acepta imágenes y videos de hasta 50 MB y las sirve desde la misma computadora, sin nube.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/07-oferta-presupuesto.webp",
        "pie": "Pregunta 5: presupuesto y resumen antes de avisar a los profesionistas.",
        "explicacion": "Antes de publicar se muestra un resumen con todo lo capturado. El presupuesto es orientativo: la frase “siempre puedes negociar” deja claro que el precio final se acuerda en el chat.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/08-buscando-profesionistas.webp",
        "pie": "La oferta se publica y se buscan profesionistas cerca.",
        "explicacion": "Al publicar, la oferta se reparte a los profesionistas del oficio y la pantalla avisa que las cotizaciones aparecerán en unos segundos.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/09-chats.webp",
        "pie": "Llegan las cotizaciones como chats en negociación.",
        "explicacion": "Cada cotización abre un chat. El aviso superior resume cuántas llegaron y lleva directo a compararlas. Los filtros “No leídos” y “En negociación” se calculan con el estado de cada conversación.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/10-negociacion.webp",
        "pie": "Chat con la línea de avance del trato y el precio de referencia.",
        "explicacion": "Arriba, la línea de 4 pasos (cotización, negociación, acuerdo, realizado) muestra en qué va el trato. El rango de referencia sale del precio base del trabajo ±20 %, redondeado a $50.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/11-contraoferta.webp",
        "pie": "Oferta pendiente con botones para aceptar, escribir o contraofertar.",
        "explicacion": "Las ofertas tienen su propia tarjeta con botón para aceptar. Los precios no los decide el texto del chat sino un motor de reglas determinista: cada profesionista tiene un límite, hace como máximo 3 contraofertas y no se mueve ante ofertas absurdas.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/12-comparar-cotizaciones.webp",
        "pie": "Comparación de las 3 cotizaciones, marcando la más barata.",
        "explicacion": "La comparación ordena las cotizaciones como llegaron y marca la más barata, con la calificación y la zona de cada profesionista para decidir con más datos que el precio.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/13-perfil-cliente.webp",
        "pie": "Perfil del cliente con sus reseñas.",
        "explicacion": "El cliente también tiene perfil con reseñas, porque la calificación es de ida y vuelta: los profesionistas saben con quién van a trabajar.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/14-inicio-profesionista.webp",
        "pie": "Inicio de un electricista esperando ofertas cerca.",
        "explicacion": "El profesionista ve las ofertas en tiempo real de su oficio cerca de su zona y el mismo muro de trabajos recientes.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/offrly/15-perfil-profesionista.webp",
        "pie": "Perfil del profesionista con portada y especialidades.",
        "explicacion": "El perfil funciona como red profesional: portada, especialidades, años de experiencia y calificación. Nada dice “verificado”, por decisión de marca, para no prometer algo que la demo no comprueba.",
        "w": 600,
        "h": 1298
      },
      {
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
    "fotos": [
      {
        "src": "img/galeria/minisuper/01-login.webp",
        "pie": "Inicio de sesión.",
        "explicacion": "La contraseña se guarda con bcrypt. Si el usuario no existe, el servidor compara contra un hash falso para tardar lo mismo y no revelar qué usuarios existen. Al entrar se regenera la sesión, y la cookie es httpOnly, SameSite=strict y dura 12 horas.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/02-caja-cerrada.webp",
        "pie": "Pantalla de venta con la caja cerrada y aviso de productos por agotarse.",
        "explicacion": "Si la tienda lo exige en Configuración, no se puede cobrar sin una caja abierta. El aviso de productos por agotarse compara la existencia contra el mínimo de cada producto.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/03-venta.webp",
        "pie": "Venta con productos agregados por nombre o código de barras.",
        "explicacion": "Se agrega por nombre o código de barras (el lector USB funciona como teclado). Los importes se calculan con enteros en centavos, no con decimales, para evitar errores de redondeo; las cantidades aceptan milésimas para vender por kilo.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/04-cobro.webp",
        "pie": "Cobro en efectivo con el cambio calculado.",
        "explicacion": "F2 cobra y F8 cambia entre efectivo y crédito. Solo un administrador puede aplicar descuentos, y el servidor rechaza el cobro si lo recibido no cubre el total.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/05-venta-cobrada.webp",
        "pie": "Venta registrada con su folio.",
        "explicacion": "La venta se guarda en una transacción: se bloquean las filas de los productos, se revisa que haya existencia y se descuenta el inventario. Si algo falla, no se guarda nada a medias. Cada venta recibe un folio consecutivo.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/06-caja.webp",
        "pie": "Caja abierta: fondo inicial, ventas en efectivo y corte.",
        "explicacion": "El efectivo esperado se calcula como fondo inicial + ventas en efectivo + ingresos − retiros. No se puede retirar más de lo que debería haber, y al cerrar se registra lo contado y la diferencia.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/07-ventas.webp",
        "pie": "Historial de ventas con opción de cancelar.",
        "explicacion": "Cancelar una venta regresa los productos al inventario dentro de una transacción. Si la caja de esa venta ya se cerró, avisa que hay que registrar el retiro del efectivo devuelto.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/08-productos.webp",
        "pie": "Catálogo de productos con costo, precio y existencia.",
        "explicacion": "Catálogo con código, categoría, proveedor, costo, precio, IVA y existencia. Se puede importar y exportar en Excel. Solo el administrador puede modificarlo: el permiso se valida en el servidor, no solo en la interfaz.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/09-inventario.webp",
        "pie": "Inventario con lista de compra sugerida.",
        "explicacion": "La lista de compra sugerida toma los productos en o por debajo de su mínimo y propone comprar lo necesario para llegar al doble del mínimo, o a lo que se vendió en las últimas 2 semanas si es más.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/10-compras.webp",
        "pie": "Compras a proveedores.",
        "explicacion": "Registrar una compra a proveedor genera una entrada de inventario y, si se indica, actualiza el costo del producto.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/11-nomina.webp",
        "pie": "Descuentos de nómina por compras a crédito de los trabajadores.",
        "explicacion": "Los trabajadores pueden comprar a crédito. La nómina junta sus compras de sábado a viernes para descontarlas del sueldo; las ventas canceladas no cuentan.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/12-reportes.webp",
        "pie": "Reporte de ventas con utilidad estimada.",
        "explicacion": "Ventas, utilidad estimada (venta sin IVA menos costo de lo vendido), ticket promedio y canceladas en un rango de fechas. Se puede filtrar por cajero y exportar a Excel o imprimir.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/minisuper/13-usuarios.webp",
        "pie": "Usuarios y permisos (administrador y cajero).",
        "explicacion": "Dos roles: administrador y cajero. En cada petición se vuelve a leer el usuario de la base, así que si se desactiva o se le cambia el rol, el cambio aplica de inmediato.",
        "w": 1366,
        "h": 820
      },
      {
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
    "fotos": [
      {
        "src": "img/galeria/doo-barber/01-reserva.webp",
        "pie": "Página pública para reservar.",
        "explicacion": "Página pública para el cliente. Los servicios, precios y duraciones vienen del servidor; cada barbería configura su propio color y logo desde el panel.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/02-servicio-y-barbero.webp",
        "pie": "Paso 1: servicio y barbero.",
        "explicacion": "Paso 1 de 3. Al elegir servicio se conoce su duración, que el servidor usa para calcular qué horas caben antes del cierre.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/03-fecha-y-hora.webp",
        "pie": "Paso 2: calendario y horas disponibles.",
        "explicacion": "El servidor calcula las horas libres con el horario semanal, el intervalo de turnos (15, 30 o 60 min), los días y horas bloqueados y las citas de cada barbero, para que ningún servicio se empalme con otro. Solo se puede reservar hasta 30 días adelante.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/03b-confirmar.webp",
        "pie": "Paso 3: confirmar el turno con nombre y WhatsApp.",
        "explicacion": "Al confirmar, el servidor vuelve a revisar la disponibilidad dentro de una fila de reservas que procesa una a la vez, así dos personas no pueden quedarse con el mismo turno. El precio nunca se toma del navegador: se lee de la base. Si el teléfono tiene 2 faltas sin aviso, no deja reservar.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/04-reserva-celular.webp",
        "pie": "La reserva en el celular.",
        "explicacion": "Diseño pensado para el celular, donde se hace la mayoría de las reservas. El cliente recibe un código de cancelación para consultar o cancelar su cita sin que nadie pueda ver citas ajenas probando números.",
        "w": 600,
        "h": 1298
      },
      {
        "src": "img/galeria/doo-barber/05-login.webp",
        "pie": "Acceso al panel del dueño.",
        "explicacion": "La contraseña del dueño se guarda con hash scrypt y sal aleatoria, y se compara en tiempo constante. Tras 5 intentos fallidos desde la misma IP se bloquea 15 minutos. Si no hay contraseña configurada, se genera una al azar y se muestra una sola vez.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/06-agenda.webp",
        "pie": "Agenda de la semana con ingresos, citas completadas y pendientes.",
        "explicacion": "La sesión es un token aleatorio de 32 bytes; en la base solo se guarda su hash SHA-256 y expira a los 7 días. Desde la agenda se marcan citas como completadas o “no asistió”, se reagenda o se cancela; reagendar pasa por la misma revisión de empalmes.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/07-nueva-cita.webp",
        "pie": "Registrar una cita sin reserva (walk-in).",
        "explicacion": "Para clientes que llegan sin reserva o llaman por teléfono. El dueño sí puede registrar citas pasadas o de clientes con faltas, pero la regla de no empalmar se mantiene.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/08-bloqueos.webp",
        "pie": "Bloquear días completos o rangos de horas.",
        "explicacion": "Se bloquean días completos o rangos de horas. Si el día ya tiene citas, el sistema avisa cuántas y solo las cancela si el dueño lo confirma.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/doo-barber/09-reportes.webp",
        "pie": "Reporte de ingresos por servicio.",
        "explicacion": "Ingresos por servicio contando solo citas completadas, con filtros por fecha y barbero. Se exporta a Excel (CSV) o se imprime en PDF.",
        "w": 1366,
        "h": 820
      },
      {
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
    "fotos": [
      {
        "src": "img/galeria/duelo-ronin/01-practica.webp",
        "pie": "Modo práctica contra el costal mientras llega el rival.",
        "explicacion": "Mientras llega el rival se practica contra un costal: los golpes no quitan vida. El personaje y el escenario están dibujados con código en Canvas.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/duelo-ronin/02-rival-conectado.webp",
        "pie": "Llega el segundo jugador y ambos marcan “Listo”.",
        "explicacion": "El cupo se revisa solo en el servidor, antes de entrar al duelo. Los dos deben marcar “Listo”; si alguien no lo hace en 60 segundos se le saca para no bloquear el duelo.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/duelo-ronin/03-cuenta-regresiva.webp",
        "pie": "Cuenta regresiva antes de la pelea.",
        "explicacion": "El duelo es una máquina de estados: esperando → listos → cuenta regresiva → pelea → fin de ronda → fin del juego. Gana quien se lleve 2 rondas.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/duelo-ronin/04-pelea.webp",
        "pie": "Pelea en curso con barras de vida y reloj.",
        "explicacion": "El servidor simula la pelea 60 veces por segundo: gravedad, plataformas, golpes y vida. Los navegadores solo mandan teclas y dibujan el estado interpolando entre actualizaciones, así nadie puede hacer trampa.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/duelo-ronin/05-hitboxes.webp",
        "pie": "Vista de las cajas de golpe (tecla H).",
        "explicacion": "Con la tecla H se ven las cajas de golpe. Cada ataque tiene arranque, tiempo activo y recuperación: el puñetazo es rápido y quita 7; la patada es lenta, quita 13 y empuja. Bloquear reduce el daño al 20 %.",
        "w": 1366,
        "h": 820
      },
      {
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
        "src": "img/galeria/tecnoaula/01-login.webp",
        "pie": "Inicio de sesión y registro.",
        "explicacion": "Contraseñas con password_hash. Hay límite de 5 intentos por correo y 20 por IP en 15 minutos, la sesión se regenera al entrar y la cookie es httpOnly y SameSite. Todos los formularios llevan token CSRF.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/03-admin-dashboard.webp",
        "pie": "Administrador: resumen de usuarios, cursos, inscripciones y entregas.",
        "explicacion": "Cada página revisa el rol en el servidor antes de mostrarse; si no corresponde, responde 403. El resumen se arma con consultas de conteo sobre usuarios, cursos, inscripciones y entregas.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/04-admin-usuarios.webp",
        "pie": "Administrador: gestión de usuarios y roles.",
        "explicacion": "Al desactivar o eliminar a alguien se cierran todas sus sesiones, incluidos los “Recordarme”. Los usuarios se eliminan de forma lógica, guardando la fecha, y cada cambio queda en el historial de actividad.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/05-admin-roles.webp",
        "pie": "Administrador: roles y permisos.",
        "explicacion": "Cada usuario tiene un rol principal y puede tener roles y permisos extra (crear cursos, ver reportes, gestionar usuarios), guardados en tablas aparte.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/06-admin-cursos.webp",
        "pie": "Administrador: todos los cursos de la plataforma.",
        "explicacion": "Lista de todos los cursos con su estado (borrador o publicado), docente, alumnos y fecha de inicio.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/07-reportes.webp",
        "pie": "Reportes de desempeño por curso.",
        "explicacion": "Avance promedio, entregas y calificación por curso, calculados en MySQL con agregaciones.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/08-configuracion.webp",
        "pie": "Configuración general de la plataforma.",
        "explicacion": "Opciones generales como el nombre de la plataforma y si el registro de alumnos está abierto. Las credenciales de la base viven en un config.php que no se sube al repositorio.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/09-docente-inicio.webp",
        "pie": "Docente: sus cursos con alumnos y entregas por calificar.",
        "explicacion": "El docente solo ve sus cursos. Los indicadores muestran alumnos, entregas por calificar y avance promedio.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/10-docente-cursos.webp",
        "pie": "Docente: lista de cursos.",
        "explicacion": "Desde aquí crea cursos nuevos y entra a editar los suyos.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/11-docente-curso.webp",
        "pie": "Docente: editar bloques, temas y evaluaciones de un curso.",
        "explicacion": "El curso se arma en bloques, temas y materiales. Bloques y temas se reordenan arrastrándolos, y el nuevo orden se guarda con una petición al servidor.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/12-docente-alumnos.webp",
        "pie": "Docente: avance de sus alumnos.",
        "explicacion": "Avance de cada alumno, calculado con los temas que ya marcó como completados.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/13-director.webp",
        "pie": "Director: seguimiento de alumnos.",
        "explicacion": "El director da seguimiento a alumnos y cursos sin poder editar la configuración del sistema.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/14-alumno-cursos.webp",
        "pie": "Alumno: sus cursos con porcentaje de avance.",
        "explicacion": "El alumno ve sus cursos con el porcentaje de avance y un acceso para continuar donde se quedó.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/15-alumno-curso.webp",
        "pie": "Alumno: contenido del curso y próximas tareas.",
        "explicacion": "Vista del curso con pestañas de contenido, materiales, foros, chat, tareas y calificaciones. Cada tema completado actualiza el avance.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/16-alumno-tareas.webp",
        "pie": "Alumno: tareas por entregar.",
        "explicacion": "Tareas pendientes, entregadas y calificadas, con fecha de entrega y puntos.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/17-alumno-calendario.webp",
        "pie": "Alumno: calendario de entregas.",
        "explicacion": "Calendario mensual con las fechas de entrega de todos sus cursos.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/18-alumno-calificaciones.webp",
        "pie": "Alumno: calificaciones por curso.",
        "explicacion": "Promedio general y la calificación de cada entrega con su comentario.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/19-foros.webp",
        "pie": "Foros de los cursos.",
        "explicacion": "Foros por curso para dudas y discusión.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/20-foro.webp",
        "pie": "Conversación dentro de un foro.",
        "explicacion": "Las respuestas se guardan con consultas preparadas y todo el texto se escapa con htmlspecialchars antes de mostrarse, para evitar XSS.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/tecnoaula/21-mensajes.webp",
        "pie": "Mensajes del chat por curso.",
        "explicacion": "El chat del curso consulta mensajes nuevos cada 5 segundos, pidiendo solo los posteriores al último que ya tiene.",
        "w": 1366,
        "h": 820
      },
      {
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
        "src": "img/galeria/calificaciones/01-login.webp",
        "pie": "Inicio de sesión.",
        "explicacion": "Busca al usuario por correo con una consulta preparada y compara la contraseña con password_verify. Si coincide, guarda su id en la sesión de PHP.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/calificaciones/02-registro.webp",
        "pie": "Registro con número de control.",
        "explicacion": "Antes de registrar revisa que el número de control y el correo no existan. La contraseña se guarda con password_hash, nunca en texto plano.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/calificaciones/03-panel.webp",
        "pie": "Panel del alumno con sus datos y calificaciones.",
        "explicacion": "El panel solo abre con sesión iniciada: si no la hay, redirige al login. Los datos y las calificaciones se consultan con el id de la sesión, así cada alumno ve solo lo suyo.",
        "w": 1366,
        "h": 820
      },
      {
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
        "src": "img/galeria/pokedex/01-charizard.webp",
        "pie": "Búsqueda de Charizard.",
        "explicacion": "El formulario manda el nombre por GET. PHP lo limpia, lo codifica para la URL y consulta la PokéAPI desde el servidor con file_get_contents; si no existe, muestra un aviso en lugar de un error.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/pokedex/02-estadisticas.webp",
        "pie": "Datos y estadísticas base.",
        "explicacion": "La respuesta JSON se decodifica en PHP y cada estadística se dibuja como barra con su propio color. Todo texto que viene de la API se escapa antes de mostrarse.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/pokedex/03-catalogo.webp",
        "pie": "Catálogo para elegir un Pokémon.",
        "explicacion": "El catálogo pide a la API la lista de los primeros 24 Pokémon; cada tarjeta es un enlace que hace la búsqueda.",
        "w": 1366,
        "h": 820
      },
      {
        "src": "img/galeria/pokedex/04-pikachu.webp",
        "pie": "Búsqueda de Pikachu.",
        "explicacion": "Cada búsqueda muestra el sprite animado normal y el shiny, sus tipos y habilidades.",
        "w": 1366,
        "h": 820
      },
      {
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
        "src": "img/galeria/catalogo/01-formulario.webp",
        "pie": "Formulario con el catálogo.",
        "explicacion": "El catálogo y los precios viven en un arreglo de PHP; el formulario solo manda los nombres de los productos elegidos.",
        "w": 1400,
        "h": 1032
      },
      {
        "src": "img/galeria/catalogo/02-resumen-con-descuento.webp",
        "pie": "Resumen de una compra con descuento.",
        "explicacion": "El servidor ignora cualquier producto que no esté en su catálogo y toma el precio de su propio arreglo, así no se puede alterar el precio desde el navegador. Si el subtotal pasa de $500 aplica 10 % de descuento.",
        "w": 1040,
        "h": 580
      },
      {
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
    "fotos": [
      {
        "src": "img/galeria/chat-socket/01-entrada.webp",
        "pie": "Entrada con nombre de usuario.",
        "explicacion": "Al entrar, el servidor registra a la persona con su nombre (máximo 20 caracteres) y le asigna un color de una paleta de 10.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/chat-socket/02-conversacion.webp",
        "pie": "Conversación entre tres personas.",
        "explicacion": "Socket.IO reenvía cada mensaje a todos los conectados al instante. El servidor recorta los mensajes a 500 caracteres e ignora a quien no se registró.",
        "w": 1280,
        "h": 800
      },
      {
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
    "fotos": [
      {
        "src": "img/galeria/lightship-weather/01-mexico.webp",
        "pie": "Ciudad de México.",
        "explicacion": "La página pide /api/clima/mexico al servidor de Express, que lee el archivo mexico.md y lo devuelve en JSON. El Markdown se convierte a HTML en el navegador.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/lightship-weather/02-tokio.webp",
        "pie": "Tokio.",
        "explicacion": "Agregar una ciudad es solo agregar su archivo .md en la carpeta datos/, sin tocar el código.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/lightship-weather/03-madrid.webp",
        "pie": "Madrid.",
        "explicacion": "Cada ciudad tiene su imagen, coordenadas y métricas principales.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/lightship-weather/04-italia.webp",
        "pie": "Roma.",
        "explicacion": "Si se pide una ciudad que no existe, la API responde 404 con la lista de ciudades disponibles.",
        "w": 1280,
        "h": 800
      },
      {
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
    "demo": "https://luisito2806.github.io/duolingo-matematico/",
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
    "fotos": [
      {
        "src": "img/galeria/duomath/01-ruta.webp",
        "pie": "Ruta de módulos.",
        "explicacion": "Cinco módulos: sumas, restas, multiplicaciones, divisiones y problemas. Al terminar uno se gana su corona.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/duomath/02-ingresar.webp",
        "pie": "Perfil del alumno.",
        "explicacion": "El perfil se guarda en el navegador con localStorage: XP, coronas y vidas por usuario. Es una práctica, no hay servidor.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/duomath/03-leccion.webp",
        "pie": "Pregunta de una lección.",
        "explicacion": "Cada lección es de 20 preguntas de opción múltiple sobre fracciones, decimales y enteros.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/duomath/04-opcion-elegida.webp",
        "pie": "Opción elegida antes de comprobar.",
        "explicacion": "El botón “Comprobar” se activa solo después de elegir una opción.",
        "w": 1280,
        "h": 800
      },
      {
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
    "demo": "https://luisito2806.github.io/Tamagotchi-web/",
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
    "fotos": [
      {
        "src": "img/galeria/bio-terminal/01-inicio.webp",
        "pie": "Inicio: nombre y nivel de dificultad.",
        "explicacion": "Se elige nombre y dificultad. La dificultad cambia qué tan rápido bajan diversión e higiene y la probabilidad de eventos.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/bio-terminal/02-incubado.webp",
        "pie": "La mascota recién incubada.",
        "explicacion": "Un temporizador avanza el reloj: 1 hora simulada = 6 segundos. Hay que llegar a las 24 horas. Cada 6 horas pide comida.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/bio-terminal/03-desgaste.webp",
        "pie": "Las barras bajan con el tiempo y aparecen alertas.",
        "explicacion": "Cada segundo bajan las barras según la dificultad (en difícil la diversión baja 1.2 por segundo) y pueden aparecer eventos como suciedad o ganas de jugar, con alertas.",
        "w": 1280,
        "h": 800
      },
      {
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
        "src": "img/galeria/reproductor/01-inicio.webp",
        "pie": "Lista de canciones.",
        "explicacion": "Las canciones y portadas son archivos locales; el reproductor usa la etiqueta audio de HTML con controles propios.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/reproductor/02-registro.webp",
        "pie": "Inicio de sesión o registro.",
        "explicacion": "Las cuentas se guardan en el navegador con localStorage. Es una práctica de manejo de datos en el cliente, no un sistema de seguridad real: no hay servidor.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/reproductor/03-reproduciendo.webp",
        "pie": "Reproduciendo con canciones marcadas como favoritas.",
        "explicacion": "Aleatorio, repetir, barra de avance, volumen y “Me gusta” por canción, todo controlado con JavaScript.",
        "w": 1280,
        "h": 800
      },
      {
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
    "demo": "https://luisito2806.github.io/Pingpon/",
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
    "fotos": [
      {
        "src": "img/galeria/pong/01-configuracion.webp",
        "pie": "Configuración de la partida.",
        "explicacion": "Antes de jugar se eligen nombre, teclas, colores, puntos por golpe y velocidad inicial.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/pong/02-partida.webp",
        "pie": "Partida en curso.",
        "explicacion": "El juego corre en Canvas con un ciclo de animación. La pelota rebota en la pared derecha y hay que regresarla con la barra.",
        "w": 1280,
        "h": 800
      },
      {
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
    "demo": "https://luisito2806.github.io/nav-bars/cotizador-web/",
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
    "fotos": [
      {
        "src": "img/galeria/cotizador/01-formulario.webp",
        "pie": "Formulario del cotizador.",
        "explicacion": "Las primeras 3 páginas cuestan $5,000 y cada página extra $2,000. Cada servicio extra tiene su precio guardado en el propio checkbox.",
        "w": 1280,
        "h": 800
      },
      {
        "src": "img/galeria/cotizador/02-cotizacion.webp",
        "pie": "Cotización con el desglose y el IVA.",
        "explicacion": "El cupón “septiembre” da 15 % de descuento. Sobre el subtotal con descuento se calcula el IVA del 16 % y el resultado se muestra en una ventana con el desglose.",
        "w": 1280,
        "h": 800
      },
      {
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
        "src": "img/galeria/estructuras-datos/01-laberinto-nivel-1.webp",
        "pie": "Laberinto, nivel 1, resuelto.",
        "explicacion": "El laberinto es una matriz de 10×10. “Resolver IA” prueba moverse abajo, derecha, arriba e izquierda de forma recursiva; si llega a un callejón sin salida, regresa (backtracking).",
        "w": 506,
        "h": 613
      },
      {
        "src": "img/galeria/estructuras-datos/02-laberinto-nivel-2.webp",
        "pie": "Laberinto, nivel 2, resuelto.",
        "explicacion": "La búsqueda se pinta paso a paso: verde es el camino actual y rojo las casillas descartadas. Corre en un hilo aparte para no congelar la ventana.",
        "w": 506,
        "h": 613
      },
      {
        "src": "img/galeria/estructuras-datos/03-laberinto-nivel-3.webp",
        "pie": "Laberinto, nivel 3, resuelto.",
        "explicacion": "También se puede jugar con las flechas, y con clic se ponen o quitan paredes para crear un laberinto propio.",
        "w": 506,
        "h": 613
      },
      {
        "src": "img/galeria/estructuras-datos/04-laberinto-nivel-4.webp",
        "pie": "Laberinto, nivel 4, resuelto.",
        "explicacion": "Cada nivel acomoda las paredes distinto. Si no hay camino posible (como en el nivel 5), la recursión agota todas las opciones y avisa “Sin solución”.",
        "w": 506,
        "h": 613
      },
      {
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
        "src": "img/galeria/poo/01-renta-de-vehiculos.webp",
        "pie": "Renta de vehículos: registrar un auto y una moto, ver su información y calcular la renta.",
        "explicacion": "Vehiculo es una clase abstracta y Auto, Camión y Moto la heredan, cada una con su propio mostrarInfo(). Todos se guardan en una misma lista y el programa los trata igual gracias al polimorfismo.",
        "w": 1400,
        "h": 875
      },
      {
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
    "demo": "https://luisito2806.github.io/localstorage/",
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
    "fotos": [
      {
        "src": "img/galeria/lista-tareas/01-tareas.webp",
        "pie": "Tareas agregadas.",
        "explicacion": "Cada tarea es un objeto con id, texto y si está completada. El arreglo completo se guarda en localStorage como JSON cada vez que cambia.",
        "w": 1120,
        "h": 460
      },
      {
        "src": "img/galeria/lista-tareas/02-despues-de-recargar.webp",
        "pie": "Las tareas siguen ahí después de recargar, con dos completadas.",
        "explicacion": "Al cargar la página se lee de localStorage, así las tareas y su estado siguen ahí aunque se cierre el navegador.",
        "w": 1120,
        "h": 460
      }
    ]
  }
];
