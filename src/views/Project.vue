<template>
  <div :class="[currentRoute.name === 'Project details' ? 'opacity-100' : 'opacity-0']"
       class="transition duration-100 ease-in-out absolute top-0 right-0 w-full bg-neutral">
    <div id="project_header" class="relative h-100 bg-white">
      <img class="object-cover w-full h-full" :src="project.header_banner">
      <div data-aos="fade-down" data-aos-duration="1000"
           class="transition duration-200 delay-200 text-white text-super10XL italic absolute top-2/3 right-0 mr-20">
        {{ project.name }}
      </div>
    </div>
    <div data-aos="fade-down" data-aos-duration="1000" class="mt-20 mx-40">
      <div class="text-white uppercase text-2xl mb-20">{{ project.project_type }}</div>
      <div class="text-white w-1/2">{{ project.description_1 }}</div>
      <div class="text-white w-1/2 mt-4">{{ project.description_2 }}</div>
    </div>
    <div data-aos="fade-down" data-aos-duration="1000" class="h-carrousel bg-neutral my-32">
      <swiper :navigation="true" :slidesPerView="3" :loop="true" class="mySwiper h-full w-full">
        <swiper-slide class="bg-white h-full w-full" v-for="(img, index) in project.images" :key="index" >
          <img class="w-full h-full object-cover" :src="img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation])

export default {
  name: 'Project',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {},
  setup () {
    const router = useRouter()
    const store = useStore()
    const destinationId = router.currentRoute.value.params.id
    const project = store.state.projects.find(p => String(p.id) === String(destinationId))
    console.log(project)
    return {
      router,
      project,
      currentRoute: computed(() => {
        const route = useRouter()
        return route.currentRoute.value
      }),
      toHome: () => {
        router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style scoped>

#project_header:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(transparent, #1c1c1c);
}

.swiper-button-prev {
  left: 20px;
}
</style>
