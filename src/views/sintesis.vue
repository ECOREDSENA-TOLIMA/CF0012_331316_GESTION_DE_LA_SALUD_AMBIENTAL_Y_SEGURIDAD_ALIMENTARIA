<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Desde la planificación cuidadosa de las actividades y la implementación de programas específicos hasta la supervisión de indicadores clave de rendimiento, este componente formativo abarca la gama completa de habilidades necesarias para promover entornos seguros y saludables. Este mapa conceptual destaca los diversos aspectos de la gestión que son esenciales para garantizar un funcionamiento eficiente y efectivo en este campo.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente actividades en salud ambiental y seguridad sanitaria muestra  que la comprensión de las actividades relacionadas con la salud ambiental y la seguridad sanitaria es crucial para mantener la integridad de los procesos en entornos sensibles como los relacionados con la salud.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
