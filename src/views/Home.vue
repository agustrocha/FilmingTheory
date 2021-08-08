<template>
  <div class="h-screen w-full">
    <div class="absolute z-10 w-full mt-8 flex justify-between items-center">
      <div class="text-4xl ml-14 text-white font-black">LOGO</div>
      <icon-hamburger class="mr-14"/>
    </div>
    <swiper class="h-full"
            :slides-per-view="1"
            :direction="'vertical'"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            :effect="'fade'"
            :loop="true"
            :autoplay='{
              "delay": 10000,
              "disableOnInteraction": false
            }'
            @swiper="onSwiper"
            @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(p, index) in projects" :key="index"
                    class="h-screen bg-black text-white flex justify-center items-center">
        <video v-if="index === 0" src="../assets/1Architetto_Spot_Publicitario.mp4" autoplay muted loop></video>
        <img v-else-if="p.images[0]"  class="w-full h-full object-cover" :src="p.images[0]" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-fade/effect-fade.min.css'
import { computed } from 'vue'
import { useStore } from 'vuex'
import IconHamburger from '../components/icon-hamburger'

SwiperCore.use([EffectFade, Pagination, Autoplay, Scrollbar, A11y])
export default {
  name: 'Home',
  components: {
    IconHamburger,
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    return {
      projects: computed(() => {
        return store.state.projects
      }),
      onSwiper (swiper) {
        console.log(swiper)
      },
      onSlideChange () {
        console.log('slide change')
      }
    }
  }
}
</script>

<style>
.swiper-pagination {
  margin-right: 2rem;
}

.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin-bottom: 1.25rem;
}

.swiper-pagination-bullet {
  width: .7rem;
  height: .7rem;
  border: 1px solid white;
  background: transparent;
}

.swiper-pagination-bullet-active {
  background: white !important;
}
</style>
