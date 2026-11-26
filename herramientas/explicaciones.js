// Explicación de cómo funciona cada pantalla. Se muestra debajo del título de
// cada foto en la galería y en el visor. Sacado del código de cada repositorio.
module.exports = {
  offrly: {
    '01-entrada': 'La app pregunta primero el tipo de usuario porque cliente y profesionista ven pantallas distintas: el cliente publica necesidades y el profesionista las recibe y cotiza.',
    '02-perfiles': 'Es una demo para inversionistas, así que el acceso es simulado con 6 perfiles prearmados. Cada visitante tiene su propio “mundo” en el servidor: lo que hace un invitado no lo ve otro, y “Reiniciar demo” lo deja como al entrar.',
    '03-inicio': 'El inicio junta las ofertas del cliente y un muro con trabajos recientes de profesionistas. Todo llega por WebSocket, así que la pantalla se actualiza sola cuando hay novedades.',
    '04-oferta-oficio': 'Publicar una necesidad son 5 preguntas cortas. La primera define el oficio y de ella dependen los trabajos que se ofrecen en la siguiente.',
    '05-oferta-horario': 'El cliente elige para cuándo y una o varias franjas (mañana, mediodía, tarde, noche) o una hora exacta. Franjas y hora exacta se excluyen entre sí y el botón no avanza hasta que la elección es válida.',
    '06-oferta-zona-y-foto': 'Solo se pide la colonia: la dirección exacta se comparte hasta cerrar el acuerdo. Se pueden subir hasta 3 fotos; el servidor solo acepta imágenes y videos de hasta 50 MB y las sirve desde la misma computadora, sin nube.',
    '07-oferta-presupuesto': 'Antes de publicar se muestra un resumen con todo lo capturado. El presupuesto es orientativo: la frase “siempre puedes negociar” deja claro que el precio final se acuerda en el chat.',
    '08-buscando-profesionistas': 'Al publicar, la oferta se reparte a los profesionistas del oficio y la pantalla avisa que las cotizaciones aparecerán en unos segundos.',
    '09-chats': 'Cada cotización abre un chat. El aviso superior resume cuántas llegaron y lleva directo a compararlas. Los filtros “No leídos” y “En negociación” se calculan con el estado de cada conversación.',
    '10-negociacion': 'Arriba, la línea de 4 pasos (cotización, negociación, acuerdo, realizado) muestra en qué va el trato. El rango de referencia sale del precio base del trabajo ±20 %, redondeado a $50.',
    '11-contraoferta': 'Las ofertas tienen su propia tarjeta con botón para aceptar. Los precios no los decide el texto del chat sino un motor de reglas determinista: cada profesionista tiene un límite, hace como máximo 3 contraofertas y no se mueve ante ofertas absurdas.',
    '12-comparar-cotizaciones': 'La comparación ordena las cotizaciones como llegaron y marca la más barata, con la calificación y la zona de cada profesionista para decidir con más datos que el precio.',
    '13-perfil-cliente': 'El cliente también tiene perfil con reseñas, porque la calificación es de ida y vuelta: los profesionistas saben con quién van a trabajar.',
    '14-inicio-profesionista': 'El profesionista ve las ofertas en tiempo real de su oficio cerca de su zona y el mismo muro de trabajos recientes.',
    '15-perfil-profesionista': 'El perfil funciona como red profesional: portada, especialidades, años de experiencia y calificación. Nada dice “verificado”, por decisión de marca, para no prometer algo que la demo no comprueba.',
    '16-portafolio-profesionista': 'El portafolio se muestra en cuadrícula de 3 columnas y el profesionista puede agregar trabajos con fotos o videos. Los videos se sirven por rangos para poder adelantarlos.',
  },

  minisuper: {
    '01-login': 'La contraseña se guarda con bcrypt. Si el usuario no existe, el servidor compara contra un hash falso para tardar lo mismo y no revelar qué usuarios existen. Al entrar se regenera la sesión, y la cookie es httpOnly, SameSite=strict y dura 12 horas.',
    '02-caja-cerrada': 'Si la tienda lo exige en Configuración, no se puede cobrar sin una caja abierta. El aviso de productos por agotarse compara la existencia contra el mínimo de cada producto.',
    '03-venta': 'Se agrega por nombre o código de barras (el lector USB funciona como teclado). Los importes se calculan con enteros en centavos, no con decimales, para evitar errores de redondeo; las cantidades aceptan milésimas para vender por kilo.',
    '04-cobro': 'F2 cobra y F8 cambia entre efectivo y crédito. Solo un administrador puede aplicar descuentos, y el servidor rechaza el cobro si lo recibido no cubre el total.',
    '05-venta-cobrada': 'La venta se guarda en una transacción: se bloquean las filas de los productos, se revisa que haya existencia y se descuenta el inventario. Si algo falla, no se guarda nada a medias. Cada venta recibe un folio consecutivo.',
    '06-caja': 'El efectivo esperado se calcula como fondo inicial + ventas en efectivo + ingresos − retiros. No se puede retirar más de lo que debería haber, y al cerrar se registra lo contado y la diferencia.',
    '07-ventas': 'Cancelar una venta regresa los productos al inventario dentro de una transacción. Si la caja de esa venta ya se cerró, avisa que hay que registrar el retiro del efectivo devuelto.',
    '08-productos': 'Catálogo con código, categoría, proveedor, costo, precio, IVA y existencia. Se puede importar y exportar en Excel. Solo el administrador puede modificarlo: el permiso se valida en el servidor, no solo en la interfaz.',
    '09-inventario': 'La lista de compra sugerida toma los productos en o por debajo de su mínimo y propone comprar lo necesario para llegar al doble del mínimo, o a lo que se vendió en las últimas 2 semanas si es más.',
    '10-compras': 'Registrar una compra a proveedor genera una entrada de inventario y, si se indica, actualiza el costo del producto.',
    '11-nomina': 'Los trabajadores pueden comprar a crédito. La nómina junta sus compras de sábado a viernes para descontarlas del sueldo; las ventas canceladas no cuentan.',
    '12-reportes': 'Ventas, utilidad estimada (venta sin IVA menos costo de lo vendido), ticket promedio y canceladas en un rango de fechas. Se puede filtrar por cajero y exportar a Excel o imprimir.',
    '13-usuarios': 'Dos roles: administrador y cajero. En cada petición se vuelve a leer el usuario de la base, así que si se desactiva o se le cambia el rol, el cambio aplica de inmediato.',
    '14-configuracion': 'Datos de la tienda, manejo del IVA, formato de fecha y ticket con vista previa. Aquí también están el respaldo diario automático (se conservan 30) y la copia a USB para llevar los datos a la ciudad.',
  },

  'doo-barber': {
    '01-reserva': 'Página pública para el cliente. Los servicios, precios y duraciones vienen del servidor; cada barbería configura su propio color y logo desde el panel.',
    '02-servicio-y-barbero': 'Paso 1 de 3. Al elegir servicio se conoce su duración, que el servidor usa para calcular qué horas caben antes del cierre.',
    '03-fecha-y-hora': 'El servidor calcula las horas libres con el horario semanal, el intervalo de turnos (15, 30 o 60 min), los días y horas bloqueados y las citas de cada barbero, para que ningún servicio se empalme con otro. Solo se puede reservar hasta 30 días adelante.',
    '03b-confirmar': 'Al confirmar, el servidor vuelve a revisar la disponibilidad dentro de una fila de reservas que procesa una a la vez, así dos personas no pueden quedarse con el mismo turno. El precio nunca se toma del navegador: se lee de la base. Si el teléfono tiene 2 faltas sin aviso, no deja reservar.',
    '04-reserva-celular': 'Diseño pensado para el celular, donde se hace la mayoría de las reservas. El cliente recibe un código de cancelación para consultar o cancelar su cita sin que nadie pueda ver citas ajenas probando números.',
    '05-login': 'La contraseña del dueño se guarda con hash scrypt y sal aleatoria, y se compara en tiempo constante. Tras 5 intentos fallidos desde la misma IP se bloquea 15 minutos. Si no hay contraseña configurada, se genera una al azar y se muestra una sola vez.',
    '06-agenda': 'La sesión es un token aleatorio de 32 bytes; en la base solo se guarda su hash SHA-256 y expira a los 7 días. Desde la agenda se marcan citas como completadas o “no asistió”, se reagenda o se cancela; reagendar pasa por la misma revisión de empalmes.',
    '07-nueva-cita': 'Para clientes que llegan sin reserva o llaman por teléfono. El dueño sí puede registrar citas pasadas o de clientes con faltas, pero la regla de no empalmar se mantiene.',
    '08-bloqueos': 'Se bloquean días completos o rangos de horas. Si el día ya tiene citas, el sistema avisa cuántas y solo las cancela si el dueño lo confirma.',
    '09-reportes': 'Ingresos por servicio contando solo citas completadas, con filtros por fecha y barbero. Se exporta a Excel (CSV) o se imprime en PDF.',
    '10-configuracion': 'Solo se aceptan las opciones de una lista permitida, cada una con su validador. El logo se comprime en el navegador antes de subirlo, los mensajes de WhatsApp se arman con plantillas (wa.me) y todo texto se escapa antes de mostrarse para evitar XSS.',
  },

  'duelo-ronin': {
    '01-practica': 'Mientras llega el rival se practica contra un costal: los golpes no quitan vida. El personaje y el escenario están dibujados con código en Canvas.',
    '02-rival-conectado': 'El cupo se revisa solo en el servidor, antes de entrar al duelo. Los dos deben marcar “Listo”; si alguien no lo hace en 60 segundos se le saca para no bloquear el duelo.',
    '03-cuenta-regresiva': 'El duelo es una máquina de estados: esperando → listos → cuenta regresiva → pelea → fin de ronda → fin del juego. Gana quien se lleve 2 rondas.',
    '04-pelea': 'El servidor simula la pelea 60 veces por segundo: gravedad, plataformas, golpes y vida. Los navegadores solo mandan teclas y dibujan el estado interpolando entre actualizaciones, así nadie puede hacer trampa.',
    '05-hitboxes': 'Con la tecla H se ven las cajas de golpe. Cada ataque tiene arranque, tiempo activo y recuperación: el puñetazo es rápido y quita 7; la patada es lenta, quita 13 y empuja. Bloquear reduce el daño al 20 %.',
    '06-duelo-lleno': 'Un tercer visitante ve “Duelo lleno” y nunca recibe el estado del juego. Si un jugador se desconecta, su lugar se guarda 10 segundos y la pelea se pausa.',
  },

  tecnoaula: {
    '01-login': 'Contraseñas con password_hash. Hay límite de 5 intentos por correo y 20 por IP en 15 minutos, la sesión se regenera al entrar y la cookie es httpOnly y SameSite. Todos los formularios llevan token CSRF.',
    '03-admin-dashboard': 'Cada página revisa el rol en el servidor antes de mostrarse; si no corresponde, responde 403. El resumen se arma con consultas de conteo sobre usuarios, cursos, inscripciones y entregas.',
    '04-admin-usuarios': 'Al desactivar o eliminar a alguien se cierran todas sus sesiones, incluidos los “Recordarme”. Los usuarios se eliminan de forma lógica, guardando la fecha, y cada cambio queda en el historial de actividad.',
    '05-admin-roles': 'Cada usuario tiene un rol principal y puede tener roles y permisos extra (crear cursos, ver reportes, gestionar usuarios), guardados en tablas aparte.',
    '06-admin-cursos': 'Lista de todos los cursos con su estado (borrador o publicado), docente, alumnos y fecha de inicio.',
    '07-reportes': 'Avance promedio, entregas y calificación por curso, calculados en MySQL con agregaciones.',
    '08-configuracion': 'Opciones generales como el nombre de la plataforma y si el registro de alumnos está abierto. Las credenciales de la base viven en un config.php que no se sube al repositorio.',
    '09-docente-inicio': 'El docente solo ve sus cursos. Los indicadores muestran alumnos, entregas por calificar y avance promedio.',
    '10-docente-cursos': 'Desde aquí crea cursos nuevos y entra a editar los suyos.',
    '11-docente-curso': 'El curso se arma en bloques, temas y materiales. Bloques y temas se reordenan arrastrándolos, y el nuevo orden se guarda con una petición al servidor.',
    '12-docente-alumnos': 'Avance de cada alumno, calculado con los temas que ya marcó como completados.',
    '13-director': 'El director da seguimiento a alumnos y cursos sin poder editar la configuración del sistema.',
    '14-alumno-cursos': 'El alumno ve sus cursos con el porcentaje de avance y un acceso para continuar donde se quedó.',
    '15-alumno-curso': 'Vista del curso con pestañas de contenido, materiales, foros, chat, tareas y calificaciones. Cada tema completado actualiza el avance.',
    '16-alumno-tareas': 'Tareas pendientes, entregadas y calificadas, con fecha de entrega y puntos.',
    '17-alumno-calendario': 'Calendario mensual con las fechas de entrega de todos sus cursos.',
    '18-alumno-calificaciones': 'Promedio general y la calificación de cada entrega con su comentario.',
    '19-foros': 'Foros por curso para dudas y discusión.',
    '20-foro': 'Las respuestas se guardan con consultas preparadas y todo el texto se escapa con htmlspecialchars antes de mostrarse, para evitar XSS.',
    '21-mensajes': 'El chat del curso consulta mensajes nuevos cada 5 segundos, pidiendo solo los posteriores al último que ya tiene.',
    '22-perfil': 'El usuario cambia sus datos y su contraseña. “Recuperar contraseña” manda un enlace que expira en 1 hora; en la base solo se guarda el hash del token, y la respuesta es la misma exista o no el correo.',
  },

  calificaciones: {
    '01-login': 'Busca al usuario por correo con una consulta preparada y compara la contraseña con password_verify. Si coincide, guarda su id en la sesión de PHP.',
    '02-registro': 'Antes de registrar revisa que el número de control y el correo no existan. La contraseña se guarda con password_hash, nunca en texto plano.',
    '03-panel': 'El panel solo abre con sesión iniciada: si no la hay, redirige al login. Los datos y las calificaciones se consultan con el id de la sesión, así cada alumno ve solo lo suyo.',
    '04-todas-las-calificaciones': 'Así se veía la lista antes de una corrección de seguridad: se abría sin sesión y mostraba a todos los alumnos. Ahora pide sesión y cada alumno ve solo sus calificaciones. Cada texto se escapa con htmlspecialchars.',
  },

  pokedex: {
    '01-charizard': 'El formulario manda el nombre por GET. PHP lo limpia, lo codifica para la URL y consulta la PokéAPI desde el servidor con file_get_contents; si no existe, muestra un aviso en lugar de un error.',
    '02-estadisticas': 'La respuesta JSON se decodifica en PHP y cada estadística se dibuja como barra con su propio color. Todo texto que viene de la API se escapa antes de mostrarse.',
    '03-catalogo': 'El catálogo pide a la API la lista de los primeros 24 Pokémon; cada tarjeta es un enlace que hace la búsqueda.',
    '04-pikachu': 'Cada búsqueda muestra el sprite animado normal y el shiny, sus tipos y habilidades.',
    '05-gengar': 'Los colores de los tipos salen de una clase CSS por tipo.',
  },

  catalogo: {
    '01-formulario': 'El catálogo y los precios viven en un arreglo de PHP; el formulario solo manda los nombres de los productos elegidos.',
    '02-resumen-con-descuento': 'El servidor ignora cualquier producto que no esté en su catálogo y toma el precio de su propio arreglo, así no se puede alterar el precio desde el navegador. Si el subtotal pasa de $500 aplica 10 % de descuento.',
    '03-resumen-sin-descuento': 'Si no llega al mínimo, explica por qué no hubo descuento. El nombre del cliente se escapa con htmlspecialchars antes de mostrarse.',
  },

  'chat-socket': {
    '01-entrada': 'Al entrar, el servidor registra a la persona con su nombre (máximo 20 caracteres) y le asigna un color de una paleta de 10.',
    '02-conversacion': 'Socket.IO reenvía cada mensaje a todos los conectados al instante. El servidor recorta los mensajes a 500 caracteres e ignora a quien no se registró.',
    '03-usuario-salio': 'Al desconectarse alguien, el servidor lo quita de la lista y avisa a todos; la lista de conectados se actualiza sola.',
  },

  'lightship-weather': {
    '01-mexico': 'La página pide /api/clima/mexico al servidor de Express, que lee el archivo mexico.md y lo devuelve en JSON. El Markdown se convierte a HTML en el navegador.',
    '02-tokio': 'Agregar una ciudad es solo agregar su archivo .md en la carpeta datos/, sin tocar el código.',
    '03-madrid': 'Cada ciudad tiene su imagen, coordenadas y métricas principales.',
    '04-italia': 'Si se pide una ciudad que no existe, la API responde 404 con la lista de ciudades disponibles.',
    '05-respuesta-api': 'Respuesta real de la API: estado, ciudad, nombre del archivo y el contenido en Markdown. Tiene CORS abierto para poder consumirla desde otra página.',
  },

  duomath: {
    '01-ruta': 'Cinco módulos: sumas, restas, multiplicaciones, divisiones y problemas. Al terminar uno se gana su corona.',
    '02-ingresar': 'El perfil se guarda en el navegador con localStorage: XP, coronas y vidas por usuario. Es una práctica, no hay servidor.',
    '03-leccion': 'Cada lección es de 20 preguntas de opción múltiple sobre fracciones, decimales y enteros.',
    '04-opcion-elegida': 'El botón “Comprobar” se activa solo después de elegir una opción.',
    '05-retroalimentacion': 'Siempre muestra la explicación del procedimiento. Cada error quita una vida; con 3 errores la lección termina.',
  },

  'bio-terminal': {
    '01-inicio': 'Se elige nombre y dificultad. La dificultad cambia qué tan rápido bajan diversión e higiene y la probabilidad de eventos.',
    '02-incubado': 'Un temporizador avanza el reloj: 1 hora simulada = 6 segundos. Hay que llegar a las 24 horas. Cada 6 horas pide comida.',
    '03-desgaste': 'Cada segundo bajan las barras según la dificultad (en difícil la diversión baja 1.2 por segundo) y pueden aparecer eventos como suciedad o ganas de jugar, con alertas.',
    '04-alimentado': 'Cada botón atiende una necesidad. Si ignoras 2 avisos de comida, o la alimentas 3 veces seguidas estando llena, se vuelve fantasma y termina el juego con un resumen.',
  },

  reproductor: {
    '01-inicio': 'Las canciones y portadas son archivos locales; el reproductor usa la etiqueta audio de HTML con controles propios.',
    '02-registro': 'Las cuentas se guardan en el navegador con localStorage. Es una práctica de manejo de datos en el cliente, no un sistema de seguridad real: no hay servidor.',
    '03-reproduciendo': 'Aleatorio, repetir, barra de avance, volumen y “Me gusta” por canción, todo controlado con JavaScript.',
    '04-me-gusta': 'Cada usuario tiene su propia lista de favoritas que se conserva al recargar o volver a entrar.',
  },

  pong: {
    '01-configuracion': 'Antes de jugar se eligen nombre, teclas, colores, puntos por golpe y velocidad inicial.',
    '02-partida': 'El juego corre en Canvas con un ciclo de animación. La pelota rebota en la pared derecha y hay que regresarla con la barra.',
    '03-fin-de-partida': 'Cada 5 golpes sube el nivel y la velocidad. Al perder, el resultado se guarda en localStorage y se muestran los 3 mejores.',
  },

  cotizador: {
    '01-formulario': 'Las primeras 3 páginas cuestan $5,000 y cada página extra $2,000. Cada servicio extra tiene su precio guardado en el propio checkbox.',
    '02-cotizacion': 'El cupón “septiembre” da 15 % de descuento. Sobre el subtotal con descuento se calcula el IVA del 16 % y el resultado se muestra en una ventana con el desglose.',
    '03-primera-version': 'La primera versión, solo con HTML, antes de agregar estilos y la lógica en JavaScript.',
  },

  'estructuras-datos': {
    '01-laberinto-nivel-1': 'El laberinto es una matriz de 10×10. “Resolver IA” prueba moverse abajo, derecha, arriba e izquierda de forma recursiva; si llega a un callejón sin salida, regresa (backtracking).',
    '02-laberinto-nivel-2': 'La búsqueda se pinta paso a paso: verde es el camino actual y rojo las casillas descartadas. Corre en un hilo aparte para no congelar la ventana.',
    '03-laberinto-nivel-3': 'También se puede jugar con las flechas, y con clic se ponen o quitan paredes para crear un laberinto propio.',
    '04-laberinto-nivel-4': 'Cada nivel acomoda las paredes distinto. Si no hay camino posible (como en el nivel 5), la recursión agota todas las opciones y avisa “Sin solución”.',
    '05-playlist': 'Cada playlist es una lista circular doblemente enlazada: cada nodo apunta a la canción siguiente y a la anterior, y la última conecta con la primera, así los botones « » nunca se acaban.',
  },

  poo: {
    '01-renta-de-vehiculos': 'Vehiculo es una clase abstracta y Auto, Camión y Moto la heredan, cada una con su propio mostrarInfo(). Todos se guardan en una misma lista y el programa los trata igual gracias al polimorfismo.',
    '02-banco': 'Cada cuenta es un objeto con titular y saldo privados. Los contadores del banco (cuentas creadas y dinero total) son atributos estáticos compartidos por todas las cuentas.',
  },

  'lista-tareas': {
    '01-tareas': 'Cada tarea es un objeto con id, texto y si está completada. El arreglo completo se guarda en localStorage como JSON cada vez que cambia.',
    '02-despues-de-recargar': 'Al cargar la página se lee de localStorage, así las tareas y su estado siguen ahí aunque se cierre el navegador.',
  },
};
