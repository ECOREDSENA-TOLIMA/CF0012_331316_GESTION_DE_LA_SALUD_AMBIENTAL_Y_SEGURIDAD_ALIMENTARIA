export default {
  global: {
    componenteFormativo: 'Actividades en salud ambiental y seguridad sanitaria',
    descripcionCurso:
      'Los procesos administrativos son fundamentales para la prestación de servicios de calidad en cualquier organización, especialmente las de salud. A través de herramientas como la planeación estratégica, el diseño de indicadores, la gestión de bienes y servicios y la apropiación de una cultura de calidad es posible atender las necesidades de clientes internos y externos e, incluso, sobrepasar sus expectativas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión del proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Planeación de actividades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Programas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores de gestión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión del talento humano',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de bienes y servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'De procesos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'De procedimientos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'De funciones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estándares de calidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Sistemas de Gestión de Calidad',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_12_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión del proceso administrativo',
      referencia:
        'Acuerdo 074 de 2020. [Subred Integrada de Servicios de Salud Sur]. Por el cual se aprueba el Plan de Desarrollo Institucional 2020 - 2024 de la Subred Integrada de Servicios de Salud Sur E.S.E. diciembre 2 de 2020. ',
      tipo: 'PDF',
      link: 'https://www.subredsur.gov.co/acuerdo-074-de-2020/',
    },
    {
      tema: 'Gestión del proceso administrativo',
      referencia:
        'Betancourt, D. (2018). <em>Cómo hacer el análisis FODA (matriz FODA) paso a paso + ejemplo práctico.</em> Ingenio Empresa. ',
      tipo: 'Blog',
      link: 'www.ingenioempresa.com/matriz-foda',
    },
    {
      tema: 'Gestión del proceso administrativo',
      referencia:
        'Sánchez, J. (2020). <em>Funciones administrativas.</em> Economipedia.com.',
      tipo: 'Página web',
      link:
        'https://economipedia.com/definiciones/funciones-administrativas.html',
    },
  ],
  glosario: [
    {
      termino: 'Cliente externo',
      significado:
        'Es todo consumidor con potencial para comprar o contratar productos o servicios.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'Es quien tiene una relación con una empresa u organización, bien sea que consuma o no las soluciones que esta ofrece.',
    },
    {
      termino: 'Endémicas',
      significado:
        'Enfermedades que afectan habitualmente a una región o a un país.',
    },
    {
      termino: 'Inmunización',
      significado:
        'Es el proceso por el que una persona se hace inmune o resistente a una enfermedad.',
    },
    {
      termino: 'Jerárquico',
      significado:
        'Que se ordena de una manera jerárquica, es decir, por rangos o categorías.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Colombiana de Ciudades Capitales [Asocapitales]. (2021). <em>Manual de procesos y procedimientos de la Asociación Colombiana de Ciudades Capitales.</em> ',
      link:
        'https://docplayer.es/222560743-Manual-de-procesos-y-procedimientos-de-la-asociacion-colombiana-de-ciudades-capitales-asocapitales.html',
    },
    {
      referencia:
        'Asociación Española para la Calidad [AEC]. (2022). <em>Normas ISO 9000.</em> ',
      link: 'https://www.aec.es/web/guest/centro-conocimiento/normas-iso-9000',
    },
    {
      referencia:
        'Conde, D. y Quilambaqui, M. (2013). <em>Propuesta de un manual de procesos basado en la ISO9001 en el área de producción de la empresa Sanitarios Hypoo-Co S.A.</em> Universidad Politécnica Salesiana. ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/5083/6/UPS-CT002687.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2022). <em>Manual de Funciones.</em> Ministerio de Hacienda y Crédito Público. ',
      link:
        'https://www.dian.gov.co/dian/entidad/Paginas/Manual_de_Funciones.aspx',
    },
    {
      referencia:
        'Hammar, M. (s. f.). <em>Cómo definir el alcance del SGC de acuerdo a la ISO 9001:2015.</em> 9001 Academy. ',
      link:
        'https://advisera.com/9001academy/es/knowledgebase/como-definir-el-alcance-del-sgc-de-acuerdo-a-la-iso-90012015',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2022). <em>Normas y estándares.</em> Ministerio de Ambiente y Desarrollo Sostenible. ',
      link: 'http://www.ideam.gov.co/web/ecosistemas/normas-estandares',
    },
    {
      referencia:
        'Instituto para la Economía Social [IPES]. (2019). <em>Manual de indicadores de gestión e impacto.</em> Alcaldía Mayor de Bogotá D.C. ',
      link:
        'http://www.ipes.gov.co/images/informes/SDE/Mapa_de_Procesos/Proceso_Planeacion_Estrategica_y_Tactica/2020/Ms_017_Manual_De_Indicadores_De_Gestion_E_Impacto.pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). <em>Adquisición Bienes y Servicios.</em> ',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/adquisicion-bienes-y-servicios',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Planeación estratégica.</em> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PES/Planeacion-Estrategica-2016.pdf',
    },
    {
      referencia:
        'Molina, J. (2015). <em>Diseño de manuales administrativos bajo los principios de mejoramiento continuo para la Fundación Universitaria de Popayán Sede Norte del Cauca.</em> Universidad Autónoma de Occidente. ',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/8021/T06024.pdf;jsessionid=37558FF9ABF65EEFF408D8284AE66B00?sequence=1',
    },
    {
      referencia:
        'Natale, L. (2012). <em>En carrera: escritura y lectura de textos académicos y profesionales.</em> Universidad Nacional de General Sarmiento. ',
      link:
        'https://issuu.com/espinozacruzado/docs/natale_lucia_coord._2012_._en_carre',
    },
    {
      referencia:
        'Organización Panamericana de la Salud [OPS] y Organización Mundial de la Salud [OMS]. (2015). <em>Indicadores de salud. Aspectos conceptuales y operativos.</em> ',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=14405:health-indicators-conceptual-and-operational-considerations&Itemid=0&lang=es#gsc.tab=0',
    },
    {
      referencia:
        'Pantoja-Kauffmann, G. (2019). Gestión del talento humano en micro, pequeñas y medianas empresas de servicios en Colombia: aproximaciones a un modelo de diagnóstico organizacional. <em>Revista Escuela de Administración de Negocios</em>, (87), p. 13-26. ',
      link: 'https://doi.org/10.21158/01208160.n87.2019.2441',
    },
    {
      referencia:
        'Pérez, J. (2020). <em>Teoría de Fayol, funciones y principios de administración.</em> Lean Construction México. ',
      link:
        'https://www.leanconstructionmexico.com.mx/post/teor%C3%ADa-de-fayol-funciones-y-principios-de-administraci%C3%B3n',
    },
    {
      referencia:
        'Quiroa, M. (2021). <em>Proceso de calidad.</em> Economipedia. ',
      link: 'https://economipedia.com/definiciones/proceso-de-calidad.html',
    },
    {
      referencia:
        'Ramos, M. (2012). <em>Sistema de gestión de calidad. Pasos de implementación en una empresa de software.</em> Gestiopolis ',
      link:
        'https://www.gestiopolis.com/sistema-gestion-calidad-implementacion-empresa-software/',
    },
    {
      referencia:
        'Repetto, F. y Fernández, J. (2012). <em>Coordinación de políticas, programas y proyectos sociales.</em> Fundación CIPPEC. ',
      link:
        'http://www.cicad.oas.org/fortalecimiento_institucional/savia/talleres/6-COORDINACION/6-Coordina_politicas_programas-cippec-Unesco.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
