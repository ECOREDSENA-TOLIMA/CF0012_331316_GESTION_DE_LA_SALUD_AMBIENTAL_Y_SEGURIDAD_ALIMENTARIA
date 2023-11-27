<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manuales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema3/tema3-1.png', alt='')
      .col-12.col-md-9.col-lg
        p.mb-3 Los manuales administrativos son documentos de suma importancia al interior de una organización, porque definen, paso a paso y de forma metódica, las actividades que deben llevar a cabo los colaboradores, bien sea de manera conjunta o separada, para el logro de los objetivos estratégicos. Además de esto, son herramientas gerenciales que facilitan la integración de acciones para el desarrollo de las actividades propuestas en el plan de acción de una forma organizada, con lo cual se consigue mejorar la calidad de los servicios prestados y optimizar el uso de los recursos disponibles.
        p De acuerdo con Molina (2015), los manuales administrativos tienen los siguientes objetivos y características:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-adicional-1" data-aos="fade-left")
      .row(titulo="Objetivos")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.ms-3
            li 
              span ● Orientar la correcta ejecución de actividades y tareas.
            li 
              span ● Aumentar la eficiencia de los servicios. 
            li 
              span ● Optimizar recursos humanos, técnicos y financieros. 
            li 
              span ● Evitar la improvisación en las labores. 
            li 
              span ● Orientar al personal recién ingresado. 
            li 
              span ● Facilitar la atención al cliente externo. 
            li 
              span ● Establecer elementos de consulta, orientación y entrenamiento al personal. 
            li 
              span ● Ofrecer puntos de referencia para control interno y auditoría.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='')
      .row(titulo="Características")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.ms-3
            li 
              span ● Flexibles para cubrir diversas situaciones. 
            li 
              span ● Se revisan y actualizan permanentemente. 
            li 
              span ● Satisfacen las necesidades reales de la organización. 
            li 
              span ● Tienen una redacción breve, simplificada y comprensible. 
            li 
              span ● Cuentan con instrumentos apropiados de uso, manejo y conservación de procesos. 
            li 
              span ● Fáciles de utilizar por clientes externos e internos. 
            li 
              span ● Facilitan los trámites mediante la diagramación. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='')

    p.mb-5(data-aos="fade-down") Los manuales administrativos se pueden agrupar de acuerdo con diversas características. Las principales clasificaciones que existen son:
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block #[b Por su naturaleza de aplicación:]
        ul.d-block.lista-ul.ms-3
          li.d-block
            span.icon ● 
            | #[b Microadministrativos:] son los que se refieren a una sola organización o únicamente a alguna de sus áreas. 
          li.d-block
            span.icon ● 
            | #[b Macroadministrativos:] en estos, se especifican contenidos de más de una organización. 
          li.d-block
            span.icon ● 
            | #[b Mesoadministrativos:] incluyen varias organizaciones de un mismo sector. 

    .mb-5(data-aos="fade-down")
      p.mb-3 #[b Por su contenido:]
      ul.lista-ul.ms-3
        li.d-block
          span.icon ● 
          | #[b De organización:] contienen información sobre normativa, antecedentes, estructura orgánica, misión y funciones organizacionales. 
        li.d-block
          span.icon ● 
          | #[b De procedimientos:] se presenta la información desglosada y de forma secuencial sobre las operaciones que se realizan al interior de la organización. 
        li.d-block
          span.icon ● 
          | #[b De gestión de calidad:] describen los elementos del sistema de gestión de calidad.
        li.d-block
          span.icon ● 
          | #[b De historia de la organización:] como su nombre lo indica, sus contenidos se relacionan con la evolución de la organización, desde sus comienzos hasta sus principales logros. 
        li.d-block
          span.icon ● 
          | #[b De políticas:] contienen un marco de normas para el desarrollo de todas las acciones que tienen lugar dentro de la organización. 
        li.d-block
          span.icon ● 
          | #[b De puestos:] contienen información detallada de cada uno de los cargos de la organización: relaciones, funciones y responsabilidades. 
        li.d-block
          span.icon ● 
          | #[b De técnicas:] describen los principios para el correcto empleo de las herramientas técnicas. 
        li.d-block
          span.icon ● 
          | #[b De ventas:] se diseñan única y exclusivamente para apoyar la gestión de ventas mediante técnicas, estrategias y recomendaciones. 
        li.d-block
          span.icon ● 
          | #[b De producción:] están dedicados a la orientación de los procesos de producción en todas sus fases. 
        li.d-block
          span.icon ● 
          | #[b De finanzas:] estos manuales apoyan y respaldan el manejo de los recursos en todas las instancias de la organización. 
        li.d-block
          span.icon ● 
          | #[b De personal:] generalmente, incluyen información sobre condiciones de trabajo, control de personal, capacitación, normatividad y seguridad en el trabajo, entre otros temas. 
        li.d-block
          span.icon ● 
          | #[b De operación:] orientan el uso de equipos e, igualmente, apoyan el desarrollo de funciones muy específicas. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block #[b Por su ámbito de aplicación:]
        ul.d-block.lista-ul.ms-3
          li.d-block
            span.icon ● 
            | #[b Generales:] contienen información general sobre una empresa, su área de desempeño, su naturaleza y estructura.
          li.d-block
            span.icon ● 
            | #[b Específicos:] contienen información detallada de cada uno de los procesos que tienen lugar al interior de la organización. Pueden ser de diversos tipos de especialidad, como calidad, procedimientos o procesos. 

    p.mb-5(data-aos="fade-down") A continuación, se describen los principales manuales empleados en las organizaciones y que ofrecen la posibilidad de estandarizar los procesos, organizar el trabajo, optimizar los recursos, facilitar la toma de decisiones y contribuir a la identificación y superación de situaciones que puedan afectar el logro de los objetivos estratégicos. Vale la pena mencionar que los manuales de la organización deben estar armonizados con la planeación estratégica, es decir, deben corresponder con el logro de los objetivos estratégicos. 

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 De procesos

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema3/tema3-6.png', alt='')
      .col-12.col-md-9.col-lg 
        p.mb-0 Para desarrollar los manuales de procesos, en primer lugar, se debe considerar qué es un proceso, ya que de ello depende la correcta estructuración del manual. En términos generales, un proceso se puede definir como la transformación de materia prima en bienes o servicios a través del uso de los recursos disponibles y las tareas de apoyo necesarias. Otra definición se relaciona con un sistema de acciones interrelacionadas que, a través de la utilización de los recursos, transforma los elementos de entrada en productos (Conde y Quilambaqui, 2013).

    p.mb-5(data-aos="fade-down") Al interior de las organizaciones, los procesos, generalmente, se catalogan dentro de 4 categorías:
    
    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/tema3-7.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Estratégicos
            p Planeación estratégica, comunicaciones, gestión interinstitucional.
            
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/tema3-8.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Misionales
            p Gestión ambiental, dirección de seguridad, dirección jurídica.

      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/tema3-9.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Apoyo
            p Gestión administrativa, gestión de contratos, gestión de las tecnologías de la información.
            
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/tema3-10.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Seguimiento, monitoreo y control
            p Control interno. 

    p.mb-5(data-aos="fade-down") Una vez se tienen identificados los procesos al interior de la organización, es posible construir el manual de procesos, el cual consiste, básicamente, en una herramienta que permite direccionar las actividades que se desarrollan dentro de la organización para lograr la eficacia y la eficiencia requerida. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-primario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema3/tema3-11.png', alt='')
      .col-12.col-md-9.col-lg 
        p.mb-0 En el manual de procesos, se entrega el detalle de la forma como se deben realizar determinadas actividades, siguiendo un orden específico y de acuerdo con una metodología establecida. Asimismo, los manuales de procedimientos pueden ser empleados en todas las áreas de la organización, como son talento humano, producción, sistemas o finanzas, por mencionar algunas.

    p.mb-5(data-aos="fade-down") Para la construcción de un manual de procesos o de procedimientos, se debe tener en cuenta (Conde y Quilambaqui, 2013):

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-12.png', alt='')
          h3.text-center Delimitación del procedimiento o proceso
          p Identificar cuál es el proceso, dónde comienza y dónde termina. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-13.png', alt='')
          h3.text-center Recolección de información
          p Acopio de la mayor cantidad de información posible sobre el proceso o procedimiento. 
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-14.png', alt='')
          h3.text-center Análisis del procedimiento
          p Se define si el proceso se mantiene, se elimina, se combina con otro o se mejora. 

    p.mb-3(data-aos="fade-down") El documento del manual de procesos debe ser una guía de fácil interpretación para los colaboradores de la organización y debe suministrar información clara sobre el paso a paso de cada una de las actividades que tienen lugar en las áreas de trabajo.
    p.mb-5(data-aos="fade-down") El cuerpo del documento debe tener, por lo menos, la siguiente estructura:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Portada
              ul.lista-ul.ms-3
                li.mb-1 
                  i.lista-ul__vineta
                  | Logos y nombre de la organización.
                li.mb-1 
                  i.lista-ul__vineta
                  | Título.
                li.mb-1 
                  i.lista-ul__vineta
                  | Registros.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-15.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/tema3-16.png', alt='')
            .col-md-6.text-start
              h4 Índice
              ul.lista-ul.ms-3
                li.mb-1 
                  i.lista-ul__vineta
                  | Títulos.
                li.mb-1 
                  i.lista-ul__vineta
                  | Índice. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Introducción
              ul.lista-ul.ms-3
                li.mb-1 
                  i.lista-ul__vineta
                  | Presentación.
                li.mb-1 
                  i.lista-ul__vineta
                  | Descripción de los propósitos del texto.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-17.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/tema3-18.png', alt='')
            .col-md-6.text-start
              h4 Procedimientos
              ul.lista-ul.ms-3
                li.mb-1 
                  i.lista-ul__vineta
                  | Título.
                li.mb-1 
                  i.lista-ul__vineta
                  | Objetivos.
                li.mb-1 
                  i.lista-ul__vineta
                  | Alcance.
                li.mb-1 
                  i.lista-ul__vineta
                  | Glosario.
                li.mb-1 
                  i.lista-ul__vineta
                  | Referencias.
                li.mb-1 
                  i.lista-ul__vineta
                  | Normativa.
                li.mb-1 
                  i.lista-ul__vineta
                  | Instrucción del procedimiento.
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Anexos
              ul.lista-ul.ms-3
                li.mb-1 
                  i.lista-ul__vineta
                  | Flujogramas.
                li.mb-1 
                  i.lista-ul__vineta
                  | Controles.
                li.mb-1 
                  i.lista-ul__vineta
                  | Registros.
                li.mb-1 
                  i.lista-ul__vineta
                  | Fichas técnicas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-19.png', alt='')

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 De procedimientos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema2/tema2-1.png', alt='')
      .col-12.col-md-8.col-lg
        p Los manuales de procedimientos generalmente se desarrollan junto con los manuales de procesos, ya que estos, finalmente, definen la manera como los procesos se llevan a cabo al interior de la organización. Los procedimientos consisten en describir la forma como se deben seguir ciertos pasos predefinidos para desarrollar una actividad de manera eficaz. 
        .cajon.color-primario.p-4
          p.mb-0 El objetivo de cada procedimiento debe ser único y de fácil identificación. Si bien es posible que existan diversos procedimientos que persigan el mismo fin, cada uno de ellos tiene estructuras y etapas diferentes que ofrecen eficiencia en la obtención del producto (Asocapitales, 2021).

    p.mb-3(data-aos="fade-down") La estructura del manual de procedimientos es similar a la del manual de procesos, sin embargo, existen diferencias sutiles debido al grado de especificidad que estos requieren. En cuanto a la simbología de los flujogramas, se tiene que esta es la misma, pues, en esencia, ambas comparten el mismo fin: hacer una representación gráfica del paso a paso y de la cronología respecto a cómo se deben realizar las actividades al interior de la organización. 
    p.mb-5(data-aos="fade-down") Una propuesta de estructura para el manual de procedimientos es la siguiente:

    .row.justify-content-center.mb-5
      .col-12.col-lg-6.col-md-10.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Propuesta de estructura de documento Manual de Procedimientos</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema3/fig-6a.svg', alt='En la figura 6 se muestra una propuesta de estructura de documento para un manual de procedimientos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-6b.svg', alt='En la figura 6 se muestra una propuesta de estructura de documento para un manual de procedimientos.')

    p.mb-5(data-aos="fade-down") Una herramienta que es de mucha utilidad para entender los manuales de procesos, conocerlos y apropiarlos, es lo que se conoce como un diagrama de flujo o flujograma. Esta representación gráfica permite observar el proceso, analizar sus componentes y resumir las operaciones que se dan dentro de la organización. Para ello, se ha definido una simbología por medio de la cual se ha logrado estandarizar la construcción de los flujogramas, tal como se presenta a continuación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Simbología de los flujogramas] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Conde y Quilambaqui (2013).
            thead
              tr.cabecera-a.text-center
                th Nombre
                th Símbolo
                th Significado
            tbody
              tr
                td Inicio - fin del proceso
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f1.svg', alt='')
                td Establece el inicio o el final del proceso.
              tr
                td Decisión 
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f2.svg', alt='')
                td Toma de decisión dentro del proceso. 
              tr
                td Actividad
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f3.svg', alt='')
                td Indica las actividades que se desarrollan normalmente. 
              tr
                td Conexión
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f4.svg', alt='')
                td Se establecen como opción de respuesta Sí - No.
              tr
                td Conectores
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f5.svg', alt='')
                td Conectan las actividades dentro del proceso.
              tr
                td Documento
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f6.svg', alt='')
                td Representa una actividad que debe quedar registrada en documentos. 
              tr
                td Base de datos
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-f7.svg', alt='')
                td Indica cuando un registro debe ser almacenado en una base de datos. 

    p.mb-5(data-aos="fade-down") En el siguiente flujograma, se observa el procedimiento para el manejo de un caso sospechoso de COVID-19 al interior de una organización. Allí se ve de forma clara qué acciones se deben llevar a cabo para manejar la situación. Cuando un caso es declarado como sospechoso, desde allí se desprende un nuevo flujograma de procedimiento para manejar esa nueva situación, ya que son dos procedimientos diferentes, cada uno con aspectos específicos y puntuales.

    .row.justify-content-center.mb-5
      .col-12.col-lg-8.col-md-10.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Ejemplo de flujograma de un procedimiento para tratar casos sospechosos de COVID-19</i>
        figure 
          img(src='@/assets/curso/temas/tema3/fig-7a.svg', alt='En la figura 7 se muestra un ejemplo de flujograma de un procedimiento para tratar casos sospechosos de COVID-19.')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 De funciones

    p.mb-5(data-aos="fade-down") Los manuales de funciones consisten en documentos formales en los cuales se describen con un alto nivel de detalle todas las funciones que desempeñan los colaboradores al interior de la organización, con el fin de realizar una correcta gestión del talento humano y llevar a cabo procesos de seguimiento a las actividades más acertados y precisos. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Los manuales de funciones son de utilidad para lo siguiente:
        ul.d-block.lista-ul.ms-3
          li.d-block
            span.icon ● 
            | Sistematizar las funciones que realizan los colaboradores al interior de la organización. 
          li.d-block
            span.icon ● 
            | Presentar un esquema jerárquico de la organización. 
          li.d-block
            span.icon ● 
            | Definir las competencias que debe tener una persona para ocupar un cargo específico. 
          li.d-block
            span.icon ● 
            | Facilitar las evaluaciones de rendimiento del personal. 
          li.d-block
            span.icon ● 
            | Identificar posibles duplicidades en funciones y responsabilidades. 
          li.d-block
            span.icon ● 
            | Definir qué énfasis dar a los programas de formación al talento humano. 
          li.d-block
            span.icon ● 
            | Apoyar la gestión de riesgos laborales. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/tema3/tema3-21.png', alt='')
      .col-12.col-md-9.col-lg 
        p.mb-0 Los manuales de funciones se definen a partir de los procesos que desarrolla la organización, ya que las tareas que debe desarrollar cada colaborador deben estar orientadas hacia el logro de los objetivos estratégicos. Tomando como ejemplo el manual de funciones de la Dirección de Impuestos y Aduanas Nacionales DIAN, es posible observar cómo el manual de funciones se integra a los procesos de la organización en una relación jerárquica:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Ejemplo de relación del manual de funciones con procesos de la organización</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema3/fig-8a.svg', alt='En la figura 8 se muestra un ejemplo de relación del manual de funciones con los procesos de la organización.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-8b.svg', alt='En la figura 8 se muestra un ejemplo de relación del manual de funciones con los procesos de la organización.')
          figcaption Nota. Adaptado de DIAN (2022).

    p.mb-5(data-aos="fade-down") La estructura del manual de funciones varía de una organización a otra, aunque existen algunos elementos que son comunes, como la identificación del puesto de trabajo, el tipo de empleo, la finalidad del cargo y las funciones esenciales. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-12.col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Entre más completo sea el manual de funciones, más precisa será la información que reciba el colaborador respecto a las tareas que deberá realizar y más informado estará frente a sus responsabilidades, lo cual, indudablemente, tendrá un impacto positivo sobre la calidad de las gestiones que realice y en la eficiencia de su trabajo. Igualmente, la evaluación de las gestiones del colaborador será menos subjetiva, al otorgar al evaluador un referente claro sobre el desempeño esperado y las funciones que se deben realizar. 

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/contract.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ejemplo: manual de funciones
              p Para ampliar esta información, se invita al aprendiz a consultar un ejemplo detallado de un Manual de Funciones en el siguiente enlace
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.dian.gov.co/dian/entidad/ManualFunciones1/FTGH_1824_Analista_V_PT_CD_2009.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    p.mb-5(data-aos="fade-down") En el manual de funciones del ejemplo anterior, se pueden observar algunos elementos esenciales que indican a los integrantes de la organización bastante información sobre el puesto de trabajo, los cuales se describen a continuación:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="Encabezado")
        h4 Encabezado 
        p Incluye una denominación del empleo, con el fin de diferenciarlo de otros puestos de trabajo en los que se desarrollen actividades similares. Igualmente, se incluye información sobre el proceso al que aporta el puesto de trabajo, el subproceso, la dependencia a la que pertenece y el superior inmediato. 
      .tarjeta.color-primario.p-4(titulo="Propósito principal")
        h4 Propósito principal
        p Describe cuál es el objeto de ese puesto de trabajo, qué se espera de esa posición y qué herramientas puede emplear la persona que la ocupe para el desarrollo de sus funciones.
      .tarjeta.color-primario.p-4(titulo="Funciones principales")
        h4 Funciones principales
        p Contiene una descripción más detallada de las tareas que deberá realizar el trabajador para cumplir con el objetivo de su posición. Entre más información se aporte en esta sección, más centrado estará el colaborador respecto a su papel dentro de la organización.
      .tarjeta.color-primario.p-4(titulo="Requisitos del empleo")
        h4 Requisitos del empleo
        p Se relaciona con los perfiles que deben cumplir las personas que desarrollen esta posición, qué estudios se requieren, experiencia, requisitos legales y si existe algún tipo de equivalencia.
      .tarjeta.color-primario.p-4(titulo="Competencias")
        h4 Competencias
        p Al final de la ficha, se da una especial relevancia a las competencias que deberá tener el colaborador para el desarrollo de sus actividades. Estas son organizacionales, funcionales e interpersonales.
      .tarjeta.color-primario.p-4(titulo="Control de cambios")
        h4 Control de cambios
        p En el marco de los procesos de mejora continua, estos manuales deben ser permanentemente actualizados, por lo que es importante manejar un registro de los ajustes efectuados. 

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Estándares de calidad

    p.mb-5(data-aos="fade-down") De acuerdo con el Instituto de Hidrología, Meteorología y Estudios Ambientales IDEAM, “en un ámbito formal, se conoce el término "estándar" como acuerdos documentados que contienen especificaciones técnicas o criterios precisos que son utilizados consistentemente, como reglas, guías o definiciones de características para asegurar que los materiales, productos, procesos y servicios cumplen con su propósito”. 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-secundario-c.p-4(data-aos="fade-down")
      .col-10.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema3/tema3-22.png', alt='')
      .col-12.col-md-8.col-lg 
        p Al trasladar este concepto al área de la calidad, se tiene que estos estándares consisten en una serie de normas, acuerdos y compromisos formales asumidos por las organizaciones, internacionalmente, para mejorar sus procesos de gestión y conseguir la satisfacción de sus clientes internos y externos. 
        p.mb-0 Para que la implementación de los estándares de calidad se dé, es necesario que se cree una cultura organizacional favorable, es decir, que todas las actividades que se desarrollan al interior de la organización estén enfocadas en el cumplimiento de los estándares definidos. Para que esto sea posible, es necesario que todos los procesos y procedimientos, así como las políticas en las cuales estos se enmarcan, se estructuren en función de los estándares de calidad. 

    p.mb-5(data-aos="fade-down") Las organizaciones más exitosas son las que llevan a cabo una excelente gestión de calidad. Esto, porque todos sus procesos se realizan con eficiencia. El proceso de calidad tiene un enfoque integral, que ayuda a mejorar la competitividad, la productividad y la eficiencia de la empresa (Quiroa, 2021). 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Para que una organización incorpore los estándares de calidad, es necesario que considere los siguientes aspectos:
        ul.d-block.lista-ul.ms-3
          li.d-block
            span.icon ● 
            | Enfocarse en la satisfacción del cliente.
          li.d-block
            span.icon ● 
            | Desarrollar procesos de capacitación y formación de su recurso humano.
          li.d-block
            span.icon ● 
            | Ser persistente en el logro de los objetivos propuestos en la planeación estratégica. 
          li.d-block
            span.icon ● 
            | Desarrollar procesos de mejora continua. 
          li.d-block
            span.icon ● 
            | Enfocarse en todo momento en el cumplimiento de los estándares de calidad. 
          li.d-block
            span.icon ● 
            | Desarrollar un enfoque por procesos. 
          li.d-block
            span.icon ● 
            | Mejorar sus canales de comunicación. 
          li.d-block
            span.icon ● 
            | Atender las solicitudes de los clientes internos y externos. 
          li.d-block
            span.icon ● 
            | Diseñar e implementar planes de mejora. 

    p.mb-5(data-aos="fade-down") La implementación de estándares de calidad al interior de la organización contribuye principalmente a:

    .BGIMG01.mb-5.p-4.p-lg-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Optimizar los recursos
            p La implementación de los estándares de calidad es algo que compete a todas las áreas de la organización, es decir, que todos los procesos que tienen lugar en ella deben cumplir con unos mínimos que garanticen un alto nivel de exigencia, lo cual implica también un manejo eficiente de los recursos disponibles.  
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-24.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Aumento de las ganancias
            p Los estándares dan la tranquilidad al cliente de que se le está entregando un servicio de calidad acorde con las más altas exigencias. Esto sin duda influye sobre las decisiones que toman las personas respecto a lo que consumen y se constituyen en un diferenciador. Igualmente, la garantía de calidad da tranquilidad al cliente respecto a las condiciones en las cuales se le presta una atención o un servicio.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-25.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Aumento de la competitividad
            p La implementación de estándares de calidad es una forma de mantenerse vigente en la memoria de las personas y de generar confianza respecto a la calidad de los servicios que se prestan. Una organización que está debidamente acreditada gracias a su gestión de calidad tiene una gran ventaja comparativa frente a otra que no tenga esa posibilidad.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-27.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Normas ISO y estándares de calidad
            p La ISO se creó con el objetivo de generar niveles de homogeneidad respecto a la gestión, prestación de servicios y desarrollo de productos, esto en vista de que cada país tenía sus propios criterios. Respecto a calidad, maneja:
            ul.d-block.lista-ul.ms-3
              li.d-block
                span.icon ● 
                | ISO 9000:2005 “Sistemas de gestión de la calidad. Principios y vocabulario”.
              li.d-block
                span.icon ● 
                | ISO 9001:2008 “Sistemas de gestión de la calidad. Requisitos”.
              li.d-block
                span.icon ● 
                | ISO 9004:2009 “Gestión para el éxito sostenido de una organización. Enfoque de gestión de la calidad”.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-27.png', alt='')

    p.mb-5(data-aos="fade-down") Por medio de la revisión de los estándares internacionales y de las exigencias que allí se plantean, es posible desarrollar un proceso de evaluación en el cual se compara cómo está la organización en determinado aspecto en relación con la exigencia de la norma. Para que esto sea posible, es necesario evaluar el comportamiento de los indicadores y analizar si efectivamente las acciones que se han desarrollado han tenido algún impacto sobre la calidad de los servicios. Para que esto sea posible, es necesario que dentro de las organizaciones se realicen ejercicios de auditoría interna, a través de los cuales se identifiquen los aspectos por mejorar y se corrijan situaciones que a futuro pueden llegar a afectar el cumplimiento de los objetivos estratégicos. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Las normas ISO nacieron aglutinando los principios que existían en multitud de normas de sistemas de calidad en distintos países, por lo que, desde su primera edición, se pretendió que fueran normas de aplicación a cualquier tipo de organización, independientemente de su tamaño o sector de actividad.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - AEC, 2022

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Sistemas de Gestión de Calidad

    p.mb-5(data-aos="fade-down") El fundamento de los sistemas de gestión de calidad es la satisfacción de las necesidades del cliente a través de la implementación de un modelo en el cual se busca dar una trazabilidad a los procesos, actividades y procedimientos que tienen lugar al interior de la organización, a través de elementos como: 
   
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tema3-28.png' alt='')
          .tarjeta.color-primario
            .p-4.text-center
              h2 Enfoque basado en procesos
              p Busca implantar una filosofía al interior de la organización que consiste en la identificación de los procesos que se desea incluir en el SGC, observar de cerca cómo estos funcionan y qué relaciones existen entre ellos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tema3-29.png' alt='')
          .tarjeta.color-secundario
            .p-4.text-center
              h2 Ciclo PHVA
              p El ciclo de la mejora continua (PHVA) se define como una estrategia que permite la resolución de problemas, el mejoramiento de procesos y la implementación de cambios positivos al interior de la organización de una forma constante.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tema3-30.png' alt='')
          .tarjeta.color-primario
            .p-4.text-center
              h2 Pensamiento basado en riesgos
              p Identifica factores problemáticos internos o externos que puedan resultar perjudiciales para la organización y tengan potencial para afectar la calidad de sus productos o servicios. Tiene su origen en la norma ISO 9001:2015.

    p.mb-3(data-aos="fade-down") El desarrollo de un sistema de gestión de calidad tiene como objetivo generar ventajas competitivas para la organización, buscando el mejoramiento de su estructura a partir del establecimiento de políticas y objetivos de calidad que se traduzcan en un aumento de la productividad y en la satisfacción de las necesidades del cliente. En Colombia, la normativa que rige los sistemas de gestión de calidad es la ISO 9001, la cual establece algunas disposiciones generales para su establecimiento, seguimiento y evaluación. 
    p.mb-5(data-aos="fade-down") A continuación, se enuncian los pasos para implementar un Sistema de Gestión de Calidad (SGC) (Ramos, 2012):

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="Definir el alcance del SGC")
        h4 Definir el alcance del SGC 
        p Se deben establecer sus límites y su aplicabilidad de acuerdo con las capacidades de la organización y el tipo de problemáticas internas y externas que sean relevantes para el logro de los objetivos del SGC. El alcance debe establecer los productos y servicios cubiertos por el SGC, y debe justificar cualquier instancia donde no pueda ser aplicada la norma ISO 9001. (Hammar, 2022)
      .tarjeta.color-primario.p-4(titulo="Enunciar la política de calidad")
        h4 Enunciar la política de calidad
        p Esta política contiene los lineamientos de lo que será la implementación del SGC al interior de la organización y debe ser aprobada por el órgano de dirección. Posteriormente, se divulga para que sea del entero dominio de todo el personal de la organización.
      .tarjeta.color-primario.p-4(titulo="Establecer los objetivos de calidad")
        h4 Establecer los objetivos de calidad
        p Este documento es complementario a la política de calidad y en él se presenta el compromiso de la organización con respecto a la calidad. Es importante que los objetivos de calidad sean medibles y cuantificables. Este documento debe ser aprobado por el consejo de dirección, el cual, además, enriquecerá los contenidos.
      .tarjeta.color-primario.p-4(titulo="Identificar y catalogar los procesos")
        h4 Identificar y catalogar los procesos
        p De acuerdo con la clasificación general, los procesos se subdividen en misionales, estratégicos, de apoyo y de control. En esta etapa de la implementación, es necesario que se identifiquen y se agrupen todos los procesos que tienen lugar al interior de la organización, con el fin de identificar las actividades que hacen parte de cada uno de ellos. Para esto, será importante tener en cuenta lo siguiente:
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ● 
            | El nombre asignado al proceso debe ser representativo de las actividades que tienen lugar en él.
          li.mb-0
            span.icon ● 
            | Todas las actividades que tienen lugar en la organización deben estar dentro de alguno de los procesos definidos. 
          li.mb-0
            span.icon ● 
            | Es necesario describir cada uno de los procesos con el máximo nivel de detalle. 
          li.mb-0
            span.icon ● 
            | Elaborar un mapa de procesos que describa en detalle en qué consiste cada uno de ellos.
      .tarjeta.color-primario.p-4(titulo="Documentación")
        h4 Documentación
        p Elaborar el manual de calidad. Este, por lo menos, debe tener:
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ● 
            | Título.
          li.mb-0
            span.icon ● 
            | Alcance.
          li.mb-0
            span.icon ● 
            | Aplicación.
          li.mb-0
            span.icon ● 
            | Tabla de contenido.
          li.mb-0
            span.icon ● 
            | Introducción.
          li.mb-0
            span.icon ● 
            | Política de calidad.
          li.mb-0
            span.icon ● 
            | Objetivos estratégicos.
          li.mb-0
            span.icon ● 
            | Describir la estructura de la organización.
          li.mb-0
            span.icon ● 
            | Descripción de los elementos del SGC.
          li.mb-0
            span.icon ● 
            | Definiciones (glosario).
          li.mb-0
            span.icon ● 
            | Anexos.
          li.mb-0
            span.icon ● 
            | Manual de procedimientos.
      .tarjeta.color-primario.p-4(titulo="Implementación")
        h4 Implementación
        p Se establecen las fechas en el plan de trabajo para la implementación del plan de acción, teniendo especial cuidado de incluir todas las actividades programadas. Este plan de acción debe ser aprobado por el consejo de dirección.
      .tarjeta.color-primario.p-4(titulo="Auditorías internas")
        h4 Auditorías internas
        p Como parte del ciclo PHVA, se llevan a cabo procesos de seguimiento a la implementación de las acciones de mejora. Allí, se detectan nuevas oportunidades de mejora que, finalmente, dan comienzo a un nuevo ciclo. Para este proceso, se puede solicitar apoyo de capacitación al organismo competente.
      .tarjeta.color-primario.p-4(titulo="Certificación")
        h4 Certificación
        p Se hace la solicitud de certificación ante el organismo competente a través del modelo definido. En los procesos de certificación, es un organismo debidamente acreditado el encargado de revisar y aprobar el cumplimiento de todos y cada uno de los requisitos establecidos por el estándar seleccionado.  







</template>

<script>
export default {
  name: 'Tema3',
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
