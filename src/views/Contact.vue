<template>
  <div class="h-full justify-center flex flex-col mx-containerXS lg:mx-containerXL">
    <div class="lg:mt-40 mt-16">
      <div class="text-white font-bold lg:text-6xl text-4xl mb-4 mt-40">Contáctanos</div>
      <div class="text-white lg:w-1/3">Ponte en contacto con nosotros si tienes alguna duda, quieres más información o buscas
        contratar alguno de nuestros servicios.
      </div>
    </div>
    <div class="lg:mt-32 mt-16 flex flex-col lg:flex-row w-full">
      <div class="w-2/3 mb-12">
        <div class="uppercase text-white mb-6 lg:mb-12">Dirección</div>
        <div class="lg:w-1/3 font-semibold lg:text-xl text-white">
          C/MORALIDAD, 68, 38205
          San Cristóbal de La Laguna,
          Santa Cruz de Tenerife
        </div>
      </div>
      <div class="lg:w-2/3 mb-12">
        <div class="uppercase text-white mb-6 lg:mb-12">Telefono</div>
        <div class="lg:w-1/3 font-semibold lg:text-xl text-white">
          +34 606 24 40 35
        </div>
      </div>
      <div class="lg:w-1/3">
        <div class="uppercase text-white mb-6 lg:mb-12">EMAIL</div>
        <div class="w-1/3 font-semibold lg:text-xl text-white">
          filmingtheory@gmail.com/
          contactoclientes.ft@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  name: 'Contact',
  setup () {
    const router = useRouter()
    const currentRoute = computed(() => router.currentRoute.value)
    function toggleHiddenScroll () {
      currentRoute.value.name === 'Contact' ? document.querySelector('body').classList.add('overflow-y-hidden') : document.querySelector('body').classList.remove('overflow-y-hidden')
    }
    toggleHiddenScroll()
  }
}
</script>

<style scoped>

</style>
