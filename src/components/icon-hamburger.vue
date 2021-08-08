<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
    <defs>
      <filter id="Rectángulo_1566" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feFlood flood-color="#9d9e9e" flood-opacity="0.051"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Grupo_5802" data-name="Grupo 5802" transform="translate(1 1)">
      <g transform="matrix(1, 0, 0, 1, -1, -1)" filter="url(#Rectángulo_1566)">
        <rect id="Rectángulo_1566-2" data-name="Rectángulo 1566" width="50" height="50" rx="7" transform="translate(15 15)" fill="#fff"/>
      </g>
      <g id="Grupo_5353" data-name="Grupo 5353" transform="translate(31.174 31.061)">
        <line id="Línea_198" data-name="Línea 198" x2="15.768" transform="translate(0 0)" fill="none" stroke="#1b1b1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Línea_199" data-name="Línea 199" x2="11.826" transform="translate(0 7.896)" fill="none" stroke="#1b1b1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Línea_200" data-name="Línea 200" x2="7.884" transform="translate(0 15.798)" fill="none" stroke="#1b1b1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
    </g>
  </svg>

</template>

<script>
export default {
  name: 'icon-hamburger'
}
</script>

<style scoped>

</style>
