<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-3.col-lg-2
        img(src='@/assets/curso/temas/intro.png', alt='')
      .col-12.col-md-9.col-lg
        p.mb-3 Una de las principales preocupaciones de los usuarios de los servicios de salud es precisamente la calidad del servicio, en términos de oportunidad y efectividad en la atención. Sin embargo, en muy pocas ocasiones se toma el tiempo para analizar cómo los procesos administrativos inciden en los indicadores de atención e influyen en la satisfacción de las necesidades de los usuarios. Por tanto, se explorarán elementos relacionados con la administración de las entidades que prestan servicios de salud a través del abordaje de temas que van desde planificación de actividades hasta monitoreo y seguimiento de procesos. 
        p En tal sentido, se invita al aprendiz a ver el siguiente video con información complementaria relacionada con la temática del componente: 
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Q8D_SrW58wg" title="Actividades en salud ambiental y seguridad sanitaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Actividades en salud ambiental y seguridad sanitaria
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
