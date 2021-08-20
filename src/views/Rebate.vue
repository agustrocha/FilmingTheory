<template>
  <div class="h-screen w-full absolute z-0">
    <swiper class="h-screen w-full"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :effect="'fade'"
            @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(i, index) in 5" :key="index">{{ i }}</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { EffectFade, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-fade/effect-fade.min.css'

SwiperCore.use([EffectFade, Mousewheel, Pagination, Scrollbar, A11y])

export default {
  name: 'Rebate',
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

</style>
