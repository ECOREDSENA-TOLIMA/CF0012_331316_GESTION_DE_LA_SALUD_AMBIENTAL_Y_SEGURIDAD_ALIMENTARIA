<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del proceso administrativo
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-3.col-lg-3
        img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='') 
      .col-12.col-md-9.col-lg
        p.mb-3 Los procesos administrativos que se llevan a cabo al interior de una organización y que abarcan cada una de sus dependencias y áreas de trabajo reciben el nombre de gestión administrativa, y esta, a su vez, consiste en el conjunto de labores y operaciones coordinadas que contribuyen en mayor o menor medida al uso racional de los recursos, al aumento en la eficiencia de los procesos y al logro de los objetivos propuestos. 
        p Los procesos administrativos al interior de una organización cumplen las siguientes funciones:
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-md-8.col-lg-6.d-none.d-md-block.mb-5(data-aos="fade-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1a.svg', alt='')
          .tarjeta.color-primario.p-3(x="50%" y="36%" numero="1")
            p En toda organización, existen diversos recursos necesarios para que se alcancen los objetivos propuestos. Sin ellos, la empresa u organización no cumplirá con su misión, cualquiera que esta sea.
            p Por medio de la administración, se logra hacer un uso eficiente de los recursos, es decir, se saca el mejor provecho de ellos y se emplean de la mejor manera posible para asegurar la viabilidad y la sostenibilidad de la organización. 
          .tarjeta.color-primario.p-3(x="32%" y="72%" numero="2")
            p La prevención es una herramienta poderosa en cualquier proceso administrativo, ya que permite anticiparse a los acontecimientos que puedan afectar el funcionamiento de la organización y, a partir de la información encontrada, diseñar las estrategias necesarias para evitar que se presenten situaciones complejas o reducir sus impactos. Un correcto proceso administrativo permite la identificación de las vulnerabilidades, las fortalezas, las oportunidades y las amenazas de la organización, e  igualmente, ofrece las alternativas para superar los inconvenientes. 
          .tarjeta.color-primario.p-3(x="69%" y="72%" numero="3")
            p Los procesos administrativos se fundamentan en el logro de objetivos, por lo que toda la estructura de la organización debe estar diseñada en función de ello. A través de una correcta administración, se asegura que la organización alcance los objetivos propuestos y se consigan las metas planteadas en los ejercicios de planeación, los cuales definen su direccionamiento estratégico.
      .col-12.d-block.d-md-none
        figure.mb-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema1/info-1b.svg', alt='')
        .row
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 1
              p.mb-3 #[b Uso eficiente de los recursos de la organización]
              p En toda organización, existen diversos recursos necesarios para que se alcancen los objetivos propuestos. Sin ellos, la empresa u organización no cumplirá con su misión, cualquiera que esta sea.
              p.mb-0 Por medio de la administración, se logra hacer un uso eficiente de los recursos, es decir, se saca el mejor provecho de ellos y se emplean de la mejor manera posible para asegurar la viabilidad y la sostenibilidad de la organización. 
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 2
              p.mb-3 #[b Prevención de situaciones problemáticas]
              p.mb-0 La prevención es una herramienta poderosa en cualquier proceso administrativo, ya que permite anticiparse a los acontecimientos que puedan afectar el funcionamiento de la organización y, a partir de la información encontrada, diseñar las estrategias necesarias para evitar que se presenten situaciones complejas o reducir sus impactos. Un correcto proceso administrativo permite la identificación de las vulnerabilidades, las fortalezas, las oportunidades y las amenazas de la organización, e  igualmente, ofrece las alternativas para superar los inconvenientes. 
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 3
              p.mb-3 #[b Obtención de resultados favorables]
              p.mb-0 Los procesos administrativos se fundamentan en el logro de objetivos, por lo que toda la estructura de la organización debe estar diseñada en función de ello. A través de una correcta administración, se asegura que la organización alcance los objetivos propuestos y se consigan las metas planteadas en los ejercicios de planeación, los cuales definen su direccionamiento estratégico.

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')
      .col-12.col-md-9.col-lg 
        p.mb-0 #[b Funciones administrativas:] las funciones administrativas se relacionan con la forma como se disponen los procesos administrativos dentro de una organización, con el fin de conseguir la máxima eficiencia en la realización de cada una de las tareas que, finalmente, conducirán al logro de los objetivos. Por lo general, las funciones administrativas se establecen con el fin de dirigir y controlar, de la forma más indicada, el manejo de los recursos.
    
    p.mb-4(data-aos="fade-down") De acuerdo con el autor francés Henri Fayol (Pérez, 2020), estas funciones se desarrollan de acuerdo con las etapas que se surten a lo largo del proceso administrativo:

    .BGIMG01.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Planificación
            p Anticiparse a los hechos, diseñar estrategias para el logro de objetivos de la organización. Dichas estrategias abarcan la elaboración de planes de acción, asignación de tareas, definición de responsabilidades y establecimiento de plazos para el cumplimiento de metas intermedias.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Organización
            p Es la estructuración del plan de trabajo, definición de procesos a desarrollar en la organización, la secuencia y distribución de las tareas. La definición de actividades permitirá hacer seguimiento oportuno y evaluar el avance en el logro de los objetivos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Dirección
            p Se relaciona con la orientación al equipo de trabajo para que cumpla las tareas asignadas en los tiempos establecidos y de acuerdo con las exigencias definidas. Gestionando los recursos, los directivos trazan la ruta para el logro de los objetivos estratégicos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Coordinación 
            p Se encarga de armonizar los procesos en la organización para que sean eficientes, asegurando la gestión integral de los recursos, el cumplimiento de metas, la optimización de los tiempos y la fluidez en el desarrollo de las misiones asignadas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Control
            p Los procesos internos de la organización deben ser verificables y evaluables, la función de control se encarga de observar que las actividades dentro de la organización se realicen de acuerdo con lo planeado en términos de tiempo y calidad.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Planeación de actividades

    p.mb-4(data-aos="fade-down") En los procesos administrativos, la planeación es el comienzo de todas las gestiones que se dan al interior de la organización, porque de ella dependen sus objetivos, y de estos, a su vez, se desprenden todas las actividades que tienen lugar dentro de ella. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-12.col-md-9.col-lg-10
        p.mb-0 En esa línea de pensamiento, al referirnos a la planeación, resulta fundamental aludir al concepto de planeación estratégica. Según el Ministerio de Salud, se define como “el proceso de formular y evaluar las decisiones más acertadas que permitirá a las organizaciones alcanzar sus objetivos” (Ministerio de Salud, 2016).
      .col-10.col-md-3.col-lg-1
        img(src='@/assets/curso/temas/tema1/administration.png', alt='')

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.ms-3 El proceso de planeación

    p.mb-4(data-aos="fade-down") La planeación estratégica corresponde a un proceso minucioso y detallado, en el cual se establece:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="Misión")
        h4 Misión 
        ul.lista-ul.ms-3
          li.mb-0
            span ● Es la razón de ser de la organización.
          li.mb-0 
            span ● Debe ser ambiciosa.
          li.mb-0 
            span ● De fácil interpretación.
          li.mb-0
            span ● De fácil comprensión por los miembros de la organización.
          li.mb-0
            span ● Debe ser fácilmente recordada.
          li.mb-0
            span ● Su construcción debe ser participativa.
        p Por ejemplo, la subred sur de servicios de salud en la ciudad de Bogotá tiene la siguiente misión: “La Subred Integrada de Servicios de Salud Sur E.S.E. presta Servicios de Salud a través de un Modelo de Atención Integral en Red, bajo los enfoques de gestión integral del riesgo y seguridad, fortaleciendo la formación académica orientada a la investigación científica e innovación, con un talento humano comprometido, humanizado y competente, que contribuye al mejoramiento de las condiciones de salud de nuestros usuarios urbanos y rurales de las localidades de Usme, Ciudad Bolívar, Tunjuelito y Sumapaz”. Subred Integrada de Servicios de Salud Sur E.S.E. 2018.   
      .tarjeta.color-primario.p-4(titulo="Visión")
        h4 Visión
        ul.lista-ul.ms-3
          li.mb-0
            span ● Es la expresión que recoge cuál será el futuro de la organización en un tiempo determinado.
          li.mb-0
            span ● Al igual que la misión, la visión debe ser clara, concreta y ser fácil de recordar para todos los miembros del equipo de trabajo.
        p Ejemplo: “En el año 2024, seremos una Empresa Social del Estado referente en el Distrito por la prestación de servicios de salud con estándares superiores de calidad, consolidada, sostenible, referente en investigación, docencia e innovación, con enfoque diferencial, territorial y comunitario, que promueve el cambio, la intersectorialidad, impactando positivamente la salud y calidad de vida de nuestros usuarios”. Subred Integrada de Servicios de Salud Sur E.S.E. 2018.
      .tarjeta.color-primario.p-4(titulo="Objetivos estratégicos")
        h4 Objetivos estratégicos
        ul.lista-ul.ms-3
          li.mb-0
            span ● Definen qué es lo que la organización pretende conseguir en un periodo de tiempo determinado.
          li.mb-0
            span ● Deben estar enfocados en el cumplimiento de la misión y contribuir al logro de la visión.
        p Continuando con el ejemplo de la Subred Sur de Servicios de Salud de la ciudad de Bogotá, se tiene que el objetivo estratégico 01 es “Consolidar el Modelo de Atención Integral en Red, garantizando la prestación de servicios integrales de salud, con enfoque en la gestión de riesgos, servicios humanizados, accesibles y oportunos, impactando positivamente las condiciones de salud de nuestros usuarios, familia y comunidad”. (Acuerdo 074 de 2020).  En el objetivo estratégico se observa claramente que este se relaciona con la misión y la visión de la E.S.E. y contribuye al cumplimiento de ambas.
      .tarjeta.color-primario.p-4(titulo="Matriz DOFA")
        h4 Matriz DOFA
        p Matriz DOFA	Es una herramienta para la identificación de las Debilidades (D), Oportunidades (O), Fortalezas (F) y Amenazas (A) de la organización, para, a partir de ellas, establecer un plan de trabajo que permita superar las debilidades, prepararse frente a las amenazas, aprovechar las oportunidades y sacar el mejor provecho de las fortalezas. 
          
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para desarrollar un proceso de planeación estratégica efectivo y que responda a las necesidades de la organización, es necesario hacer una evaluación interna y externa de los factores que inciden en su funcionamiento y que repercuten en el logro de los objetivos propuestos, para lo cual resulta de mucha utilidad la matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas), una de las herramientas más reconocidas y recomendadas para esta labor. Una vez se tienen identificados y clasificados los componentes de la matriz DOFA, es posible definir las acciones necesarias para incidir en las situaciones iniciales y superar las barreras que impiden el logro de los objetivos de la organización, como se muestra en el siguiente ejemplo:

    .row.justify-content-center.mb-5
      .col-12.col-lg-8.col-md-10.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Ejemplo de matriz DOFA</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura 1 se muestra un ejemplo de la matriz DOFA, incluyendo factores en cada uno de los ítems (debilidades, fortalezas, oportunidades y amenazas).')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura 1 se muestra un ejemplo de la matriz DOFA, incluyendo factores en cada uno de los ítems (debilidades, fortalezas, oportunidades y amenazas).')

    p.mb-4(data-aos="fade-down") En esta matriz, se consideran los aspectos internos de la organización (debilidades y fortalezas) y los aspectos externos (amenazas y oportunidades) para realizar un diagnóstico acertado de sus condiciones actuales. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
      .col-12.col-md-9.col-lg 
        p.mb-0 #[b Diseño de estrategias:] una vez identificados cada uno de estos elementos y organizados dentro de la matriz, se procede a diseñar las estrategias, lo cual básicamente se consigue al “cruzar” la información que se ha recopilado en la DOFA, como se presenta a continuación:
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-8.col-md-10.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Diseño de estrategias a partir de la matriz DOFA</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='En la figura 2 se muestra el diseño de estrategias a partir de la matriz DOFA, se obtienen estrategias de éxito, de reacción, de adaptación y de supervivencia.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='En la figura 2 se muestra el diseño de estrategias a partir de la matriz DOFA, se obtienen estrategias de éxito, de reacción, de adaptación y de supervivencia.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
      .col-12.col-md-8.col-lg
        p Tomando como referencia los datos de la matriz DOFA observada anteriormente, una estrategia de éxito sería, por ejemplo, “aprovechar la experiencia en el sector salud para mejorar los servicios de acuerdo con lo estipulado en la nueva política del sector”. 
        p Al realizar este análisis y establecer correlaciones entre las debilidades, oportunidades, fortalezas y amenazas, se facilita el diseño de respuestas eficientes a las problemáticas detectadas y la toma de decisiones que permitan la sostenibilidad de la organización. 
    
    .row.justify-content-center.align-items-center.mb-5.cajon.color-primario.p-4(data-aos="fade-down")
      .col-12
        p.mb-0 #[b Definición de actividades:] el proceso de planeación culmina con la construcción de un cronograma, en el cual se consignan, específicamente, cuáles serán las actividades que se realizarán, y en qué tiempo, para el cumplimiento de los objetivos estratégicos. El cronograma es una herramienta de planeación muy útil, porque provee una visión general de lo que se debe hacer, en qué tiempo se debe realizar, quién lo debe realizar y qué recursos se requieren para lograrlo. En el siguiente ejemplo, se muestran algunos de los elementos de un cronograma.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo de cronograma de actividades (Diagrama de Gantt)] 
        .tabla-a.color-acento-contenido
          table(style="min-width:1024px")
            thead
              tr.cabecera-a.text-center
                th(style="width:18%") Actividad
                th Número
                th(style="width:10%") Responsable
                th(style="width:10%") Recursos requeridos
                th(style="width:10%") Planeado / Ejecutado
                th Ene
                th Feb
                th Mar
                th Abr
                th May
                th Jun
            tbody
              tr
                td.cabecera-b Capacitación en Plan Ampliado de Inmunización
                td.text-center 6
                td Equipo PAI
                td 
                td.text-center P / E
                td.text-center 1
                td.text-center 1
                td.text-center 1
                td.text-center 1
                td.text-center 1
                td.text-center 1
              tr
                td.cabecera-b Capacitación en Vivienda Saludable
                td.text-center 3 
                td Equipo Ambiente
                td Refrigerios, salón, ayudas didácticas, convocatoria. 
                td.text-center P / E
                td.text-center 1
                td.text-center 
                td.text-center 
                td.text-center 1
                td.text-center 
                td.text-center 1
              tr
                td.cabecera-b Capacitación en Salud y Ambiente
                td.text-center 2
                td Equipo Ambiente
                td 
                td.text-center P / E
                td.text-center 
                td.text-center 1
                td.text-center 
                td.text-center 
                td.text-center 1
                td.text-center 
              tr
                td.cabecera-b Visitas a familias vulnerables
                td.text-center 24
                td Equipo Salud a su Casa
                td Transporte
                td.text-center P / E
                td.text-center 4
                td.text-center 4
                td.text-center 4
                td.text-center 4
                td.text-center 4
                td.text-center 4
 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul
          li.d-block
            span ● Columna 1: se establecen las actividades que se deben desarrollar; deben ser específicas, claras y concretas.
          li.d-block
            span ● Columna 2: se indica el número de actividades que se desarrollarán en la vigencia; por lo general, se establecen anualmente.
          li.d-block
            span ● Columna 3: se asigna qué equipo, persona o dependencia se encargará de la actividad. 
          li.d-block
            span ● Columna 4: se definen los recursos que se requieren. Entre más detallada sea la información, será más fácil el proceso de planificación de las actividades. 
          li.d-block
            span ● Columna 5: se utiliza para realizar el seguimiento a las actividades “planeado / ejecutado”.
          li.d-block
            span ● Columnas 6, 7, 8, 9, 10, 11: se establece, mes a mes, cuántas actividades se llevarán a cabo para guiar lo que será la ejecución. La planeación se puede construir de forma diaria, semanal, bimensual o trimestral, según considere el equipo de planeación. 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Programas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
      .col-12.col-md-8.col-lg
        p Todos los procesos que se llevan a cabo en el sector salud deben estar enmarcados dentro de una política pública, la cual consiste en la definición de un curso de acción para un área específica de interés general dentro de una sociedad. Para la implementación de las políticas, a su vez, es necesario establecer planes, los cuales consisten en las ideas generales bajo las cuales se orienta el diseño de los programas y proyectos. 
        .cajon.color-primario.p-4
          p.mb-0 Por su parte, un programa es un conjunto ordenado de proyectos, coordinados entre sí, que poseen una naturaleza similar, es decir, corresponden con una línea de acción o un eje estratégico. Finalmente, los proyectos son un conjunto de actividades que se correlacionan y se coordinan con el fin de generar respuestas frente a alguna problemática específica. En el siguiente esquema, se puede observar cómo se interrelacionan políticas, planes, programas y proyectos. 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Niveles de planificación en gestión pública</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-3a.svg', alt='En la figura 3 se muestra los niveles de planificación en gestión pública.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-3b.svg', alt='En la figura 3 se muestra los niveles de planificación en gestión pública.')

    p.mb-3(data-aos="fade-down") De acuerdo con Repetto y Fernández (2012), el concepto de política pública se refiere a procesos políticos y sociales que se desarrollan en el tiempo y que luego se cristalizan en programas y proyectos a los que se les asignan recursos para su puesta en marcha. 
    p.mb-3(data-aos="fade-down") El programa se remite a una construcción técnica (que no niega el componente político), con mayor o menor capacidad de expresar la complejidad del problema y se conforma de un conjunto de proyectos que persiguen los mismos objetivos. Igualmente, son los responsables de establecer las prioridades de la intervención, ya que permiten identificar y organizar los proyectos, definir el marco institucional y asignar los recursos.
    p.mb-5(data-aos="fade-down") Algunos de los aspectos clave para tener en cuenta son:

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
      .col-12.col-md-9.col-lg 
        p #[b Definición de objetivos:] uno de los aspectos más importantes de la definición de los objetivos de un plan, un programa o un proyecto es que este responda a una necesidad o a una problemática que se manifiesta al interior de una comunidad.
        p.mb-0 Para la construcción de los objetivos, se debe tener en cuenta:

    
    .tarjeta--container.row.mb-5(data-aos="fade-down-left")
      .col-md.tarjeta.color-primario-c.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')
        h4.text-center Definir su tipo
        p #[b General:] propósitos amplios que persigue el programa.
        p #[b Específico:] detalle de los resultados esperados en diferentes etapas del proyecto. 
      .col-md.tarjeta.color-secundario-c.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
        h4.text-center Redacción
        p Se deben escribir en tercera persona y en modo impersonal, son breves y claros y no deben dejar dudas frente a lo que se pretende realizar. 
      .col-md.tarjeta.color-acento-contenido-c.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
        h4.text-center Deben contestar a las preguntas
        ul.lista-ul.ms-3
          li.mb-0
            span ● ¿Qué se va a realizar? (verbo infinitivo)
          li.mb-0
            span ● ¿Para qué se va a realizar?

    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Estructura de un objetivo] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Verbo en infinitivo
                th ¿Qué?
                th ¿Para qué?
            tbody
              tr
                td Realizar…
                td …cien encuestas socioeconómicas en el municipio de La Unión…
                td …para establecer una línea base de beneficiarios. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-primario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
      .col-12.col-md-9.col-lg 
        p #[b Establecimiento de metas:] cuando se habla de proyectos, las metas deben especificar lo que se desea lograr en un periodo determinado de tiempo. Estas pueden ser de corto, mediano o largo plazo. A diferencia de los objetivos, que indican las tareas que se deben llevar a cabo para obtener un resultado específico, las metas solamente expresan un resultado final deseado. Las metas, igualmente, se expresan de una forma amplia y son el reflejo de una intención, no de un paso a paso para conseguirlo. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Algunos ejemplos de metas son:
        ul.lista-ul
          li.d-block
            span ● Aumento en la cobertura del aseguramiento en salud en un 30 %. 
          li.d-block
            span ● Reducir la incidencia de la pobreza monetaria en Bogotá.
          li.d-block
            span ● Beneficiar a familias en pobreza y vulnerabilidad a través del Sistema Distrital Bogotá Solidaria.
          li.d-block
            span ● A 2024 disminuir en 20 % la razón de mortalidad materna.

    p.mb-5(data-aos="fade-down") La importancia de fijar metas es que estas ayudan a establecer prioridades en las intervenciones, porque a partir de lo que se plasma, se diseñan planes de acción que posteriormente se convierten en cronogramas de trabajo y en actividades. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
      .col-12.col-md-9.col-lg 
        p #[b Formulación de resultados:] la formulación de resultados en un programa o proyecto se relaciona con la identificación de los cambios que se pueden llegar a producir como consecuencia de las acciones llevadas a cabo en su ejecución, bien sea de forma directa o indirecta. Por ejemplo, con el desarrollo de un proyecto para la protección de un área de interés ecológico en una ciudad, los resultados directos podrían ser la conservación de especies endémicas, la recuperación de un área determinada o la protección de un determinado número de cuerpos de agua. Algunos resultados indirectos podrían ser la generación de determinado número de empleos por la reactivación de actividades turísticas, o la valorización de los predios aledaños a la zona de conservación por la recuperación paisajística. 

    p.mb-5(data-aos="fade-down") La formulación de resultados es un paso importante en la formulación del proyecto debido a que esto permite medir sus impactos reales al interior de una comunidad y tener más claridad respecto a las motivaciones que se tienen para la implementación del programa o proyecto.  

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Indicadores de gestión

    p.mb-5(data-aos="fade-down") De acuerdo con la Organización Panamericana de la Salud (OPS), un indicador es una medición que refleja una situación determinada. Todo indicador de salud es una estimación (una medición con cierto grado de imprecisión) de una dimensión determinada de la salud en una población específica. Los indicadores son mediciones abreviadas que pueden proporcionar una gran cantidad de información sobre una situación en particular y sobre cómo la organización está avanzando en el logro de sus objetivos estratégicos. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p En el campo de la salud pública existe una jerarquía de conceptos: el dato es la unidad más primaria y, al trabajar con ella, genera un indicador, este, una vez analizado, genera información, que, luego de interpretada, genera conocimiento.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - OPS 2015

    p.mb-5(data-aos="fade-down") Los principales usos de los indicadores en salud son:

    .BGIMG01.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Descripción
            p Permiten conocer las particularidades de la organización, como sus necesidades, calidad en la prestación de servicios esenciales, cuellos de botella y los factores que afectan el normal funcionamiento de cada una de las áreas. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Pronóstico
            p Estos indicadores se pueden emplear para identificar los riesgos a los que se expone la organización y, al mismo tiempo, estimar los impactos que estos pueden llegar a tener en caso de presentarse.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Explicación
            p Facilitan la comprensión de los factores que inciden en los procesos de la organización y la manera en que elementos externos, aparentemente ajenos a la organización, pueden llegar a generar afectaciones importantes.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Gestión administrativa y mejoramiento de la calidad 
            p A través del seguimiento de los indicadores se puede obtener retroalimentación de la forma como se están llevando a cabo las gestiones administrativas. Con esta información, es posible generar alertas que mejoren los procesos de toma de decisiones y establecer mecanismos para la priorización de las necesidades. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Evaluación
            p Por medio del seguimiento a los indicadores, se pueden observar los resultados de las acciones desarrolladas en un área específica. A través de la vigilancia de los indicadores se pueden evidenciar los impactos de las políticas, planes, programas y proyectos implementados en la organización. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')

    p.mb-3(data-aos="fade-down") En el desarrollo de los procesos administrativos, se manejan varias clases de indicadores, los cuales dan cuenta de las gestiones, resultados e impactos de las actividades que se llevan a cabo al interior de la organización. Igualmente, los indicadores se seleccionan de acuerdo con el tipo de información que se desea mostrar y conforme a la información disponible.
    p.mb-5(data-aos="fade-down") Los principales tipos de indicadores que se pueden encontrar son:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="De producto")
        h4 De producto 
        p Muestran los cambios que se relacionan directamente con las actividades desarrolladas en el plan de acción de la organización.  También miden los bienes tangibles que se obtienen después de una intervención.
        p Algunos ejemplos son: número de equipos de protección individual entregados, número de equipos de #[em software] instalados en la dependencia de contabilidad, número de equipos entregados al área de comunicaciones. 
      .tarjeta.color-primario.p-4(titulo="De impacto")
        h4 De impacto
        p Estos tienen la capacidad de medir los cambios positivos o negativos que se producen dentro de la organización como resultado de la ejecución de las actividades del plan de acción.
        p Usualmente, la periodicidad con que se mide este tipo de indicadores es semestral o anual, debido a que los efectos de las actividades que se miden con este tipo de indicadores a menudo se observan en el mediano y largo plazo. 
      .tarjeta.color-primario.p-4(titulo="De gestión")
        h4 De gestión
        p Se utilizan para medir el logro de los objetivos de la organización. De acuerdo con el Instituto Para la Economía Social (IPES, 2019).
        p Su aplicación se deriva de los siguientes principios de los sistemas de gestión de calidad:
        ul.lista-ul.ms-3
          li
            span ● #[b Enfoque al cliente:] atender las necesidades y expectativas del cliente. 
          li
            span ● #[b Liderazgo:] los líderes de la organización participan en la búsqueda de estrategias para involucrar a todos los colaboradores en el logro de los resultados. 
          li
            span ● #[b Mejora:] todas las actividades dentro de la organización están enfocadas en la mejora continua. 
          li
            span ● #[b Toma de decisiones basada en la evidencia:] para la toma de decisiones al interior de la organización es necesario acudir a las evidencias aportadas por los indicadores. 
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Los indicadores de gestión son una representación cuantitativa (variable o relación entre variables), verificable objetivamente, a partir de la cual se registra, procesa y presenta la información necesaria para medir el avance o retroceso en el logro de un determinado objetivo.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - IPES, 2019

    p.mb-5(data-aos="fade-down") A su vez, se subdividen en las siguientes categorías:

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-25.png', alt='')
          h3.text-center Indicadores de eficacia
          p Cumplimiento de metas establecidas en el plan de trabajo de acuerdo con los resultados del proceso de planeación estratégica. Se miden con respecto al cumplimiento de metas propuestas o por productos obtenidos en un periodo de tiempo. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-26.png', alt='')
          h3.text-center Indicadores de eficiencia
          p Evalúan la relación entre los recursos empleados en el cumplimiento de las metas y los resultados obtenidos tras el desarrollo de las gestiones. Miden qué tan eficiente es la organización en el manejo de sus recursos. 
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-27.png', alt='')
          h3.text-center Indicadores de efectividad
          p Describen impactos y resultados directos en implementación de procesos. Evalúan el grado de cumplimiento de objetivos en función del aporte a la solución de una problemática interna de la organización o que ponga en riesgo su sostenibilidad.

    p.mb-5(data-aos="fade-down") Además de esta clasificación, los indicadores de gestión también se pueden subdividir en:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Indicadores de proceso y de resultado</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-4a.svg', alt='En la figura 4 se muestra los indicadores de proceso y de resultado.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-4b.svg', alt='En la figura 4 se muestra los indicadores de proceso y de resultado.')

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.ms-3 Construcción de indicadores de gestión

    p.mb-3(data-aos="fade-down") La importancia de los indicadores de gestión radica en que son fundamentales para la evaluación de los impactos de las decisiones que se tomen al interior de la organización y si estas han contribuido en la solución de las problemáticas identificadas en los procesos de planeación.
    p.mb-5(data-aos="fade-down") Para que los indicadores de gestión evalúen correctamente las gestiones de la organización y generen información confiable, es importante tener en cuenta las siguientes recomendaciones:

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/tema1-28.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Recomendación 1
            p Tener claridad sobre los pormenores del proceso de planeación estratégica, porque a partir de esta información se podrán establecer los aspectos que se necesita medir y evaluar. 
            
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/tema1-29.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Recomendación 2
            p Establecer puntos clave a evaluar para determinar el cumplimiento de los objetivos estratégicos. 

      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/tema1-30.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Recomendación 3
            p Definir qué se debe medir y la frecuencia con la que se debe recopilar la información. 
            
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/tema1-31.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Recomendación 4
            p Establecer qué tipo de indicador se requiere de acuerdo con las variables a medir (de proceso o de resultado). 

    p.mb-5(data-aos="fade-down") Para su construcción, se recomienda (IPES, 2019):

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              p Establecer las definiciones estratégicas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='')
            .col-md-6.text-start
              p Establecer las áreas de desempeño relevantes que se deben medir.
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              p Formular el indicador y describir la fórmula de cálculo. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
            .col-md-6.text-start
              p Validar los indicadores aplicando criterios técnicos. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              p Recopilar los datos. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
            .col-md-6.text-start
              p Establecer el valor del indicador y la periodicidad de la medición. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              p Señalar una fuente de datos. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-39.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')
            .col-md-6.text-start
              p Establecer supuestos. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              p Comunicar e informar el desempeño logrado. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-40.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-41.png', alt='')
            .col-md-6.text-start
              p Establecer referentes comparativos. 
              
    p.mb-5(data-aos="fade-down") La construcción de los indicadores es un proceso que requiere bastante dedicación debido a que la definición de los elementos que se medirán al interior de la organización y que darán cuenta de las gestiones realizadas es fundamental para evaluar qué tanto se ha avanzado en el logro de los objetivos y qué aspectos requieren especial atención para superar las dificultades identificadas. Para identificar si un indicador está bien construido, es posible aplicarle la siguiente lista de chequeo:

    .row.justify-content-center.mb-5
      .col-12.col-lg-8.col-md-10.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Lista de chequeo para evaluar el proceso de construcción de un indicador</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-5a.svg', alt='En la figura 5 se muestra la lista de chequeo para evaluar el proceso de construcción de un indicador, incluyendo siete ítems.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-5b.svg', alt='En la figura 5 se muestra la lista de chequeo para evaluar el proceso de construcción de un indicador, incluyendo siete ítems.')
          figcaption Nota. Adaptado de IPES (2019).

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Gestión del talento humano

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema1/tema1-42.png', alt='')
      .col-12.col-md-8.col-lg 
        p Uno de los recursos más importantes que posee una organización es su talento humano, su éxito depende en gran medida de las capacidades tanto individuales como colectivas del personal que desempeña sus funciones en las diferentes dependencias. 
        p.mb-0 Al interior de las organizaciones, por lo general, la gestión del talento humano (antes llamada administración de personal o recursos humanos), se toma como un proceso que tiene por objeto la atracción de nuevos colaboradores, su vinculación formal a la organización y la gestión integral de las herramientas que permitan a estas personas crecer y desarrollarse de forma integral, de tal forma que sus habilidades y talentos sean aprovechados de la mejor manera para el logro de los objetivos estratégicos y, por ende, el cumplimiento de la misión. 

    p.mb-3(data-aos="fade-down") Para el desarrollo de procesos de certificación, la gestión del talento humano debe estar descrita con detalle y las actividades asociadas a ella deben estar caracterizadas en el mapa de procesos. 
    p.mb-5(data-aos="fade-down") Hoy día, la gestión del talento humano va mucho más allá de la organización de las tareas y el seguimiento al personal y se ha convertido en una poderosa herramienta para el logro de las metas y los objetivos estratégicos de la organización. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p La evolución de los mercados y las transformaciones generadas en el contexto empresarial y social produjeron también importantes cambios en la concepción de la contribución de las personas a las organizaciones. Así, las áreas de recursos humanos se convirtieron en áreas de gestión humana, talento humano o gestión y desarrollo de las personas -como se conoce actualmente en otros países del mundo y Latinoamérica- relevantes para el logro de las metas organizacionales y de generación de ventajas competitivas.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Pantoja-Kauffmann, 2019, citando a Cuesta, 2017
              i.fas.fa-quote-right(style="display:none")

    p.mb-5(data-aos="fade-down") Para desarrollar un proceso de gestión del talento humano de forma ordenada y conforme a los lineamientos establecidos, es importante tener en cuenta:

    .BGIMG01.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Planeación
            p Esta primera etapa comienza con la definición del tipo de personal que se requiere para el desarrollo de las actividades al interior de la organización. En esencia se debe dar respuesta a tres sencillas preguntas:
            ul.lista-ul.ms-3
              li.mb-0
                span ✔ ¿Qué roles se deben cubrir?
              li.mb-0
                span ✔ ¿Qué tipo de talento se está buscando?
              li.mb-0
                span ✔ ¿Qué tipo de habilidades deben tener las personas para ocupar las posiciones vacantes?
            p Una vez se tenga claridad sobre estas preguntas, se procede a la segunda etapa.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-43.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Convocatoria a candidatos
            p Una vez definidos los perfiles y el tipo de talento requerido para cubrir las posiciones al interior de la organización, se convoca a los candidatos. Se realiza, por lo general, a través de medios de comunicación masiva, redes sociales o anuncios que tienen el objetivo de dar a conocer las ofertas. Es importante compartir la mayor cantidad de información posible sobre la posición a ocupar y las condiciones bajo las cuales se establecerá el vínculo laboral.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-44.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Selección de candidatos 
            p El proceso de selección suele tornarse bastante complejo cuando no se tiene una metodología clara para la calificación de los candidatos. Es importante que la decisión de contratar o no a determinada persona dependa de un valor numérico que sea resultado de la aplicación de una evaluación que observe criterios relevantes para el cargo al que se presenta el candidato y que establezca cuáles pueden ser los aportes del aspirante al logro de los objetivos estratégicos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-45.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Desarrollo 
            p Inicia cuando la persona es vinculada a la organización y comprende básicamente el proceso de inducción. En esta actividad, los nuevos colaboradores adquieren una serie de destrezas y habilidades relacionadas con su rol específico e, igualmente, se le dan indicaciones para la realización de su labor de la manera más eficiente.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-46.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Retención 
            p Es una de las misiones más complejas del equipo de talento humano debido a que son muchos los factores que inciden en el ambiente laboral y en la decisión de las personas de continuar o no en su posición laboral. De parte de las organizaciones la retención del talento humano se realiza mediante el diseño e implementación de estrategias como programas de capacitación, implementación de recompensas o incentivos, promociones y asignación de nuevos retos que motiven al colaborador.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-47.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Transición 
            p Es común que las personas identifiquen nuevas oportunidades de crecimiento laboral y que deseen emprender nuevos rumbos, por lo que la organización, igualmente, debe prepararse para facilitar ese proceso sin que ello afecte el normal funcionamiento de las dependencias ni genere traumatismos en el logro de los objetivos estratégicos. En esta etapa, se recomienda implementar procedimientos formales para la entrega del cargo y de los elementos asignados al colaborador, la entrega de la información relacionada con las gestiones realizadas durante su paso por la entidad y la realización de entrevistas de egreso en las cuales se evalúen las causas de la renuncia, esto con el fin de identificar oportunidades de mejora en la gestión del talento humano.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-48.png', alt='')
              

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
