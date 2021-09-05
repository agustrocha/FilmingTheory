<template>
  <div :class="[openRebate ? '-translate-y-80' : 'translate-y-0']"
       class="transform transition duration-1000 h-screen w-full absolute">
    <swiper :autoplay='{
        "delay": 2500,
        "disableOnInteraction": false
      }' :slidesPerView="1" :pagination="{ clickable: true }" :loop="true" class="h-full w-full">
      <swiper-slide class="text-white h-full" v-for="(img, index) in images" :key="index">
        <img class="h-full w-full object-cover" :src="img"
             :alt="img">
      </swiper-slide>
    </swiper>
  </div>
  <div id="white-wall" :class="[openRebate ? 'translate-y-64' : 'translate-y-full']"
       class="transform transition duration-1000 ease-in-out bg-white h-full w-full absolute z-10">
  </div>
  <div class="absolute z-20 mt-12 top-1/3 w-full">
    <div :class="[openRebate ? 'text-black' : 'text-white']"
         class="lg:text-xl text-base mx-containerXS xl:mx-containerXL transition duration-1000 uppercase mb-4">
      Films and series in the Canary Islands
    </div>
    <div :class="[openRebate ? 'text-black' : 'text-white']"
         class="lg:text-7xl text-3xl w-auto mx-containerXS xl:mx-containerXL transition duration-1000 ease-out flex items-center cursor-pointer"
         @click="toggleRebate">
      <p class="italic font-light"><span class="font-bold">54% Rebate</span> for foreign productions</p>
      <icon-arrow-down :class="[openRebate ? '-rotate-180' : '-rotate-0']"
                       class="transform transition duration-1000 ease-in-out w-10 ml-7 mt-5"/>
    </div>
    <div>
      <div :class="[openRebate ? 'opacity-100' : 'opacity-0']"
           class="transition mx-containerXS xl:mx-containerXL duration-1000 lg:w-54% mt-12">Producers with
        tax residence in the Canary Islands who are in charge of a foreign film production
        are entitled to a tax deduction of 50-45% on expenses in Spain with a ceiling of 12.4 million euros (the maximum
        deduction base is 27.3 million euros. As a requirement, these productions must spend at least 1 million euros in
        eligible costs during filming or € 200,000 on animation, always in Spanish territory.
      </div>
      <div :class="[openRebate ? 'opacity-100' : 'opacity-0']"
           class="transition mx-containerXS xl:mx-containerXL duration-1000 my-28">
        <rebate-tag label="Every possible location"
                    label_2="Residential, urban, industrial, monumental, historic, nature, beaches, sound stages"/>
        <rebate-tag label="All production services executive and line producing"
                    label_2="Equipment, crew, local casting, insurance, legal (rebate guarantee)"/>
        <rebate-tag label="Infrastructure"
                    label_2="Direct flights, hotels, production vehicles, grip + electric rentals generators, catering, post-production facilities, sound stages."/>
      </div>
      <div :class="[openRebate ? 'opacity-100' : 'opacity-0']"
           class=" mx-containerXS xl:mx-containerXL transition duration-1000">
        <p class="uppercase text-xl font-bold">Basic rebate requirements</p>
        <div class="flex flex-col lg:flex-row justify-center lg:mt-20 mt-12">
          <div class="h-40 lg:pr-12 2xl:px-24 border-black flex flex-col justify-center items-center">
            <p>2 million €</p>
            <p>Min. total budget</p>
          </div>
          <div class="h-40 px-12 2xl:px-24 border-b border-t lg:border-b-0 lg:border-t-0 lg:border-r lg:border-l border-black flex flex-col justify-center items-center">
            <p>1 Million €</p>
            <p>Min. expenditure in</p>
            <p>the rebate region</p>
          </div>
          <div class="h-40 lg:pl-12 2xl:px-24 flex flex-col justify-center items-center">
            <p>Hire a local</p>
            <p>production service</p>
            <p>company</p>
          </div>
        </div>
      </div>
      <div :class="[openRebate ? 'opacity-100' : 'opacity-0']"
           class="flex cursor-pointer justify-center my-28 transition duration-1000">
        <div class="bg-primary font-bold text-black inline uppercase px-16 py-3 rounded-3xl">Contact</div>
      </div>
      <Footer :class="[openRebate ? 'opacity-100' : 'opacity-0']" class="tranisition duration-1000"/>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay, EffectFade, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-fade/effect-fade.min.css'
import IconArrowDown from '../components/icon-arrow-down'
import { ref } from '@vue/runtime-core'
import RebateTag from '../components/rebateTag'
import Footer from '../components/Footer'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

SwiperCore.use([Autoplay, EffectFade, Pagination, Scrollbar])

export default {
  name: 'Rebate',
  components: {
    Footer,
    RebateTag,
    IconArrowDown,
    Swiper,
    SwiperSlide
  },
  setup () {
    const openRebate = ref(false)
    const store = useStore()
    const router = useRouter()
    const currentRoute = computed(() => router.currentRoute.value)
    function toggleHiddenScroll () {
      currentRoute.value.name === '54% Rebate' ? document.querySelector('body').classList.add('overflow-y-hidden') : document.querySelector('body').classList.remove('overflow-y-hidden')
    }
    toggleHiddenScroll()
    return {
      openRebate,
      toggleRebate: async () => {
        openRebate.value ? openRebate.value = false : openRebate.value = true
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.querySelector('body').classList.toggle('overflow-y-hidden')
      },
      images: computed(() => {
        return store.state.rebate.images
      }),
      toContact: () => {
        router.push({ name: 'Contact' })
      }
    }
  }
}
</script>

<style scoped>

</style>
