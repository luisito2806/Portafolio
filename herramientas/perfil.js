// Tus datos personales, formación y textos de la portada, en español (es) e inglés (en).
// Después de editar este archivo ejecuta:  node herramientas/generar.js
//
// Los textos marcados con «PENDIENTE» se ven resaltados en amarillo en la página
// para que no se te pase ninguno. Cuando los cambies, el resaltado desaparece solo.

module.exports = {
  nombre: 'Luis Angel Vazquez Estrada',
  correo: 'vazquezestradaluis192@gmail.com',
  github: 'https://github.com/luisito2806',
  // Pega aquí la dirección de tu perfil, por ejemplo 'https://www.linkedin.com/in/tu-usuario/'.
  // Mientras esté vacío, el enlace de LinkedIn no aparece en la página ni en el CV.
  linkedin: '',
  foto: 'portafolio.jpeg',
  sitio: 'https://luisito2806.github.io/Portafolio/',

  titulo: {
    es: 'Estudiante de Ingeniería en Sistemas Computacionales y Ciberseguridad',
    en: 'Computer Systems and Cybersecurity Engineering student',
  },
  // Frase principal del encabezado
  lema: {
    es: 'Construyo sistemas web completos y me aseguro de que sean seguros.',
    en: 'I build complete web systems and make sure they are secure.',
  },
  resumen: {
    es: 'Estudiante de Ingeniería en Sistemas Computacionales y Ciberseguridad en la UVAQ. Hago sistemas con base de datos, aplicaciones en tiempo real y juegos, cuidando la seguridad desde el inicio de sesión hasta la base de datos.',
    en: 'Computer Systems and Cybersecurity Engineering student at UVAQ. I build database-driven systems, real-time apps and games, taking care of security from the login screen to the database.',
  },
  sobreMi: {
    es: [
      'Soy estudiante de Ingeniería en Sistemas Computacionales y Ciberseguridad. Me interesa entender cómo funcionan los sistemas y cómo protegerlos, por eso busco seguir aprendiendo y aplicar lo que sé en proyectos reales.',
      'Fuera de la tecnología, me gusta hacer ejercicio, jugar videojuegos y viajar para conocer el mundo.',
    ],
    en: [
      "I'm a Computer Systems and Cybersecurity Engineering student. I like understanding how systems work and how to protect them, so I keep learning and applying what I know to real projects.",
      'Outside of tech, I enjoy working out, playing video games and traveling to see the world.',
    ],
  },

  // Formación y trayectoria, de lo más reciente a lo más antiguo.
  formacion: [
    {
      periodo: { es: '2024 – actualidad', en: '2024 – present' },
      titulo: { es: 'Ingeniería en Sistemas Computacionales y Ciberseguridad', en: 'B.S. in Computer Systems and Cybersecurity Engineering' },
      lugar: 'Universidad Vasco de Quiroga (UVAQ), Morelia',
      detalle: {
        es: 'Cursando 5.º semestre. Programación orientada a objetos, estructuras de datos, bases de datos y ambientes web.',
        en: 'Currently in 5th semester. Object-oriented programming, data structures, databases and web development.',
      },
    },
    {
      periodo: { es: '2021 – 2024', en: '2021 – 2024' },
      titulo: { es: 'Bachillerato', en: 'High school' },
      lugar: 'Colegio La Paz, Apatzingán, Michoacán',
      detalle: {
        es: 'Áreas físico-matemática y químico-farmacobiológica.',
        en: 'Math-physics and chemistry-pharmacobiology tracks.',
      },
    },
  ],

  // Línea de seguridad para el CV
  cvSeguridad: {
    es: 'Hash de contraseñas (bcrypt, scrypt), límite de intentos de inicio de sesión, sesiones seguras, consultas preparadas, protección contra XSS y CSRF, control de acceso en el servidor y transacciones.',
    en: 'Password hashing (bcrypt, scrypt), login rate limiting, secure sessions, prepared statements, XSS and CSRF protection, server-side access control and transactions.',
  },

  habilidades: [
    { grupo: { es: 'Frontend', en: 'Frontend' }, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Canvas'] },
    { grupo: { es: 'Backend', en: 'Backend' }, items: ['Node.js', 'Express', 'Socket.IO', 'WebSocket', 'PHP', { es: 'APIs REST', en: 'REST APIs' }] },
    { grupo: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'SQLite', 'Sequelize'] },
    { grupo: { es: 'Seguridad', en: 'Security' }, items: [{ es: 'Autenticación', en: 'Authentication' }, { es: 'Control de acceso', en: 'Access control' }, { es: 'Sesiones seguras', en: 'Secure sessions' }, 'CSRF / XSS', { es: 'Inyección SQL', en: 'SQL injection' }] },
    { grupo: { es: 'Otros', en: 'Other' }, items: ['Java', 'Git / GitHub', { es: 'Pruebas automáticas', en: 'Automated testing' }, { es: 'Trabajo en equipo', en: 'Teamwork' }] },
  ],
};
