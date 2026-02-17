export const clinic = {
  name: "Blima García Psicóloga",
  logo: "/images/logo.png",
  tagline: "Psicología con calidez humana en Asturias",
  description: "Blima García es psicóloga en Asturias con consulta también en Madrid, especializada en terapia individual, atención a niños y adolescentes, y formación de terapeutas. Con 5 estrellas en Google y 11 reseñas, ofrece un espacio seguro donde cada sesión te ayuda a ver con claridad y recuperar la energía. Profesional con amplia experiencia que combina empatía, técnicas eficaces y un trato cercano que te hace sentir acompañado desde el primer día.",
  colors: {
    primary: "#62857d",
    secondary: "#332922",
    accent: "#bdcac4",
    neutral: "#f2f5f5"
  },
  phone: "696 68 22 94",
  whatsapp: "+34696682294",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de psicología.",
  email: "",
  address: {
    street: "33007 Oviedo, Asturias, España",
    city: "Asturias",
    province: "Madrid",
    postalCode: "33007",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=6934490463440760100&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Blima%20Garc%C3%ADa%20Psic%C3%B3loga%20%4043.3603%2C-5.84849&z=16&output=embed",
  coordinates: {
    lat: 43.3603,
    lng: -5.84849
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "9:00–20:00"
    },
    {
      days: "viernes",
      hours: "9:00–14:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 11,
    url: "https://maps.google.com/?cid=6934490463440760100&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Marta Fernández",
        rating: 5,
        text: "Blima es mi terapeuta desde hace tiempo. Solo tengo palabras de agradecimiento hacia ella. Después de cada sesión es como si te limpiara las gafas con las que lo ves todo. Sales con energía, con ganas de salir adelante y con motivos y pautas para hacerlo, que es muy importante.\nBlima tiene un encanto especial, es un ser lleno de luz, su voz, su sonrisa... Desde el primer día sientes como si estuvieras tomando una café con tu mejor amiga. No la cambiaría por nadie.\nComo docente no tengo experiencia. Pero dos personas de mi confianza sí lo han experimentado y están igual de encantadas que yo.\nSi estáis dudando en buscar terapeuta o supervisora, hablad con ella sin ningún tipo de duda. Será la mejor elección que tomaréis.",
        date: "Hace 2 meses"
      },
      {
        author: "Maria Conde Gutierrez",
        rating: 5,
        text: "Haber tenido a Blima como docente es un privilegio. Su enfoque de trabajo y su manera de mirar a las personas inspira y motiva a mejorar cada día. Además es capaz de dotar al alumnado de herramientas prácticas y útiles para la terapia. Pero sobre todo, consigue que el grupo se sienta seguro y cuidado para atreverse a explorar y a aprender.\nGracias por haber sido ese adulto más sabio y más experto que me ha acompañado en mis primeros pasos como terapeuta.",
        date: "Hace 3 meses"
      },
      {
        author: "Rocio del Rio Compañy",
        rating: 5,
        text: "Blima es una gran profesional,con dilatada  experiencia tanto de terapeuta como de formadora. Empática,preocupada por las personas a las que atiende,formada,con amplios recursos  terapeuticos. He recibido formacion por su parte y también hemos compartido atencion a niños,miñas y adolescentes.Excelente profesional en ambas facetas.",
        date: "Hace 3 meses"
      },
      {
        author: "Elena Vetusta",
        rating: 5,
        text: "Psicóloga muy amable y empática que me hizo sentir muy a gusto desde la primera sesión. Me ha ayudado mucho en un momento personal difícil, con buenas técnicas y consejos que me permitieron ver mejoría ya en las primeras semanas. La recomiendo con los ojos cerrados. ¡Muchas gracias, Blima!",
        date: "Hace 3 meses"
      },
      {
        author: "Bruno Márquez Sánchez",
        rating: 5,
        text: "Blima es una profesional increíble. Lleva siendo mi psicóloga unos tres años y me ha ayudado a salir de pozos de los que me parecía demasiado complicado salir. Es de esta gente con la que te cruzas y dices, qué suerte coincidir.",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "terapia-individual",
      name: "Terapia Individual",
      description: "Sesiones personalizadas donde trabajamos juntos tus dificultades emocionales, ansiedad, depresión o cualquier situación que te impida sentirte bien. Cada sesión está diseñada para que salgas con claridad, energía renovada y pautas concretas para avanzar. Un espacio confidencial donde te sentirás comprendido y acompañado en tu proceso de cambio.",
      benefits: [
        "Recupera claridad mental y emocional",
        "Técnicas eficaces con resultados desde las primeras semanas",
        "Ambiente de confianza y seguridad absoluta"
      ],
      icon: "User"
    },
    {
      id: "psicologia-infantil",
      name: "Psicología Infantil y Adolescentes",
      description: "Atención especializada para niños, niñas y adolescentes que atraviesan dificultades emocionales o de conducta. Trabajo con enfoque respetuoso y adaptado a cada edad, ayudando a los más jóvenes a gestionar sus emociones y desarrollar recursos para crecer con seguridad. Colaboración estrecha con las familias para lograr cambios duraderos.",
      benefits: [
        "Enfoque adaptado a cada etapa del desarrollo",
        "Herramientas prácticas para gestión emocional",
        "Acompañamiento también a padres y madres"
      ],
      icon: "Baby"
    },
    {
      id: "ansiedad-estres",
      name: "Tratamiento de Ansiedad y Estrés",
      description: "Tratamiento especializado para superar la ansiedad, ataques de pánico y estrés crónico que limitan tu día a día. Utilizamos técnicas eficaces que te permiten recuperar el control, reducir los síntomas y volver a disfrutar de tu vida con tranquilidad. Resultados visibles desde las primeras sesiones.",
      benefits: [
        "Reducción significativa de síntomas de ansiedad",
        "Técnicas aplicables en tu vida diaria",
        "Mejora tu calidad de vida y bienestar"
      ],
      icon: "Brain"
    },
    {
      id: "momentos-dificiles",
      name: "Apoyo en Momentos Difíciles",
      description: "Acompañamiento profesional cuando atraviesas situaciones personales complicadas, pérdidas, cambios vitales o momentos en los que sientes que no puedes salir adelante. Te ayudo a encontrar recursos internos, recuperar la esperanza y avanzar paso a paso hacia tu recuperación emocional.",
      benefits: [
        "Salir de situaciones que parecen sin salida",
        "Recupera motivación y ganas de vivir",
        "Apoyo empático en tu momento más vulnerable"
      ],
      icon: "Heart"
    },
    {
      id: "formacion-terapeutas",
      name: "Formación para Terapeutas",
      description: "Formación especializada y supervisión para profesionales de la psicología que quieren mejorar sus habilidades terapéuticas. Como docente, ofrezco un espacio seguro donde explorar, aprender técnicas prácticas y desarrollarte como terapeuta con acompañamiento experto. Grupos reducidos que permiten un aprendizaje profundo y personalizado.",
      benefits: [
        "Herramientas prácticas para la práctica clínica",
        "Supervisión profesional con experiencia contrastada",
        "Ambiente de grupo seguro y cuidado"
      ],
      icon: "Target"
    },
    {
      id: "supervision-profesional",
      name: "Supervisión Profesional",
      description: "Supervisión individual para psicólogos y terapeutas que necesitan acompañamiento en sus casos clínicos. Te ofrezco mi experiencia como terapeuta y formadora para ayudarte a mejorar tu práctica, resolver dudas y crecer profesionalmente con una mirada experta y respetuosa.",
      benefits: [
        "Mejora tu práctica clínica con casos reales",
        "Enfoque que inspira y motiva tu trabajo diario",
        "Acompañamiento de un adulto más sabio y experto"
      ],
      icon: "User"
    },
    {
      id: "terapia-online",
      name: "Terapia Online",
      description: "Sesiones de psicología por videollamada con la misma calidad y calidez que la consulta presencial. Ideal si vives lejos, tienes dificultades de movilidad o prefieres la comodidad de tu hogar. Mantenemos la misma conexión, confidencialidad y eficacia terapéutica en formato digital.",
      benefits: [
        "Accede desde cualquier lugar",
        "Misma calidad que la terapia presencial",
        "Flexibilidad de horarios y comodidad"
      ],
      icon: "Monitor"
    },
    {
      id: "desarrollo-personal",
      name: "Desarrollo Personal",
      description: "Acompañamiento para personas que quieren conocerse mejor, potenciar sus recursos personales y alcanzar objetivos vitales. Trabajamos tu autoestima, tus relaciones, tus metas y todo aquello que te ayude a vivir una vida más plena y alineada con quien realmente eres.",
      benefits: [
        "Descubre tus fortalezas y potencial",
        "Claridad en tus objetivos personales",
        "Crece en autoconocimiento y confianza"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Primer Contacto",
      description: "Llámame o escríbeme por WhatsApp al 696 68 22 94. Hablamos brevemente sobre lo que necesitas y acordamos una primera cita en Asturias, Madrid o por videollamada, según tu preferencia."
    },
    {
      step: 2,
      title: "Primera Sesión",
      description: "En nuestro primer encuentro te escucho con atención para comprender tu situación. Desde el primer día notarás un ambiente de confianza donde te sentirás cómodo para compartir lo que te preocupa."
    },
    {
      step: 3,
      title: "Sesiones de Trabajo",
      description: "Trabajamos juntos con técnicas adaptadas a ti. Cada sesión te aporta claridad, herramientas prácticas y pautas concretas para aplicar en tu día a día. Verás mejorías desde las primeras semanas."
    },
    {
      step: 4,
      title: "Tu Bienestar",
      description: "Avanzas con energía renovada, recuperas tu motivación y consigues ver la vida con otras gafas. Logras salir adelante con recursos propios y disfrutas de una vida más plena y equilibrada."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5 Estrellas en Google",
      description: "Con 11 reseñas que reflejan la satisfacción real de pacientes, Blima García cuenta con una valoración perfecta de 5 estrellas. Sus pacientes destacan su calidez humana, profesionalidad y la eficacia de su trabajo tanto en terapia como en formación.",
      icon: "Award"
    },
    {
      title: "Conexión Desde el Primer Día",
      description: "Como describen sus pacientes, desde la primera sesión sientes un ambiente de confianza donde te puedes abrir sin miedo. Blima tiene la capacidad de crear un espacio seguro donde te sientes comprendido, escuchado y acompañado como si hablaras con tu mejor amiga, pero con toda la profesionalidad de una terapeuta experta.",
      icon: "Heart"
    },
    {
      title: "Resultados Visibles y Herramientas Prácticas",
      description: "Cada sesión te aporta claridad, energía renovada y pautas concretas para aplicar en tu vida. Los pacientes reportan mejorías significativas desde las primeras semanas, saliendo de cada encuentro con motivación y recursos prácticos para seguir avanzando hacia su bienestar.",
      icon: "Target"
    },
    {
      title: "Experiencia en Terapia y Formación",
      description: "Blima García es una profesional con dilatada experiencia tanto como terapeuta clínica con adultos, niños y adolescentes, como formadora y supervisora de otros profesionales. Esta doble vertiente enriquece su práctica y garantiza un enfoque actualizado, profundo y con amplios recursos terapéuticos.",
      icon: "CheckCircle"
    }
  ],
  team: [
    {
      name: "Blima García",
      role: "Psicóloga Clínica y Formadora",
      image: "/images/team/placeholder.jpg",
      bio: "Psicólogos comprometidos con el bienestar emocional. En Blima García Psicóloga ofrecemos un espacio seguro donde trabajar hacia una vida más plena y satisfactoria."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/placeholder-1.webp",
      alt: "Interior de Blima García Psicóloga"
    },
    {
      src: "/images/gallery/placeholder-2.webp",
      alt: "Instalaciones de Blima García Psicóloga"
    },
    {
      src: "/images/gallery/placeholder-3.webp",
      alt: "Sala de tratamiento de Blima García Psicóloga"
    }
  ],
  faq: [
    {
      question: "¿Dónde está ubicada la consulta de Blima García Psicóloga?",
      answer: "Blima García tiene consulta en Asturias y también atiende en Madrid. Además, ofrece sesiones de terapia online por videollamada para personas que prefieren la modalidad digital o viven en otras ubicaciones. Puedes elegir la opción que mejor se adapte a tus necesidades y circunstancias."
    },
    {
      question: "¿Cuánto dura una sesión de terapia?",
      answer: "Las sesiones de terapia individual tienen una duración aproximada de 50-60 minutos. Este tiempo permite trabajar en profundidad los temas que te preocupan, aplicar técnicas terapéuticas y establecer pautas concretas para tu día a día. La frecuencia se adapta a cada persona y situación particular."
    },
    {
      question: "¿Cuándo veré resultados en la terapia?",
      answer: "Muchas personas notan mejorías significativas desde las primeras semanas de terapia, como reflejan las opiniones de pacientes de Blima García. La rapidez de los resultados depende de cada situación personal, pero el enfoque práctico y las herramientas concretas que se trabajan en cada sesión permiten avances visibles desde el inicio del proceso terapéutico."
    },
    {
      question: "¿Blima García trabaja con niños y adolescentes?",
      answer: "Sí, Blima García está especializada en atención a niños, niñas y adolescentes con dificultades emocionales o de conducta. Cuenta con amplia experiencia en esta área y utiliza un enfoque adaptado a cada etapa del desarrollo. Trabaja en colaboración con las familias para lograr cambios significativos y duraderos en el bienestar de los más jóvenes."
    },
    {
      question: "¿Ofrece formación y supervisión para otros psicólogos?",
      answer: "Sí, Blima García es también formadora y supervisora de terapeutas. Ofrece formación especializada y supervisión profesional para psicólogos que quieren mejorar sus habilidades clínicas. Su enfoque como docente es práctico, inspirador y crea espacios seguros donde los profesionales pueden explorar, aprender y crecer en su práctica terapéutica."
    },
    {
      question: "¿Cómo solicito una primera cita?",
      answer: "Puedes contactar directamente con Blima García llamando o enviando un WhatsApp al 696 68 22 94. En ese primer contacto podrás comentar brevemente tu situación y acordar una cita presencial en Asturias, en Madrid o por videollamada. El proceso es sencillo y recibirás una respuesta cercana y profesional."
    },
    {
      question: "¿La terapia online es igual de efectiva?",
      answer: "Sí, la terapia online ofrece la misma calidad y eficacia que las sesiones presenciales. Blima García mantiene en las videollamadas la misma calidez, conexión terapéutica y confidencialidad que caracteriza su trabajo. Muchos pacientes eligen esta modalidad por comodidad, distancia o preferencia personal, obteniendo excelentes resultados."
    },
    {
      question: "¿Qué valoración tienen los pacientes de Blima García?",
      answer: "Blima García Psicóloga cuenta con una valoración de 5 estrellas en Google basada en 11 reseñas de pacientes reales. Los comentarios destacan su empatía, profesionalidad, capacidad para generar confianza desde el primer día y la eficacia de sus técnicas terapéuticas. Los pacientes valoran especialmente el ambiente seguro que crea y los resultados visibles desde las primeras sesiones."
    }
  ],
  seo: {
    titleTemplate: "%s | Blima García Psicóloga",
    defaultTitle: "Blima García Psicóloga en Asturias y Madrid",
    defaultDescription: "Psicóloga en Asturias y Madrid especializada en terapia individual, atención infantil y adolescentes. 5 estrellas en Google. Pide cita: 696 68 22 94",
    keywords: [
      "Blima García Psicóloga",
      "psicóloga Asturias",
      "psicóloga Madrid",
      "terapia individual Asturias",
      "psicología infantil Asturias",
      "psicólogo adolescentes Madrid",
      "terapia ansiedad Asturias",
      "formación terapeutas",
      "supervisión psicólogos",
      "terapia online Asturias",
      "psicóloga 5 estrellas",
      "clínica psicología Asturias"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Blima García Psicóloga",
    cif: "",
    registeredAddress: "33007 Oviedo, Asturias, España, Asturias, Madrid"
  },
  heroHeadline: [
    "Tu Centro de",
    "Psicología",
    "en Asturias"
  ],
  heroDescription: "Blima García Psicóloga ofrece terapia individual y atención especializada para niños, niñas y adolescentes en Asturias y Madrid. Un espacio de confianza donde encontrarás comprensión, herramientas prácticas y el acompañamiento profesional que necesitas para superar momentos difíciles y avanzar con claridad hacia tu bienestar.",
  specialty: "Terapia Individual",
  ctaLabel: "Tu Bienestar",
  ctaHeadline: "¿Necesitas un espacio seguro para ti?",
  ctaDescription: "Solicita tu primera consulta con Blima García. Un encuentro profesional y cercano donde te sentirás escuchado y acompañado desde el primer momento.",
  statsLabel: "Pacientes",
  schemaType: "PsychologicalTreatment",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
