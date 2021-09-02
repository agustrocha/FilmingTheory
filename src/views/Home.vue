<template>
  <div :class="[currentRoute.name === 'Home' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0']"
       class="duration-1000 transform transition ease-in-out">
    <div :class="[open ? 'modal-open' : 'modal-close']" class="h-screen bg-black w-full">
      <swiper class="h-full"
              :slides-per-view="1"
              :direction="'vertical'"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              :effect="'fade'"
              :mousewheel="true"
      >
        <swiper-slide v-for="(p, index) in projects" :key="index"
                      class="h-screen bg-black text-white flex justify-center items-center">
          <div v-if="index === 0">
            <video src="../assets/WEB_MP4_REEL_V1.mp4" autoplay muted loop></video>
            <a class="absolute z-30 bottom-0 right-0" href="https://www.youtube.com/watch?v=5kvWzQQD2CU">
              <icon-to-youtube class="mr-container mb-20 cursor-pointe text-white"/>
            </a>
          </div>
          <div v-else class="w-full h-full">
            <div class="absolute top-1/3 ml-container">
              <div :class="menu ? 'opacity-0' : 'opacity-100'"
                   class="uppercase text-xl mb-4 transition-opacity duration-500">{{ p.project_type }}
              </div>
              <div :class="menu ? 'opacity-0' : 'opacity-100'"
                   class="text-7xl font-bold italic mb-24 transition-opacity duration-500">/{{ p.name }}
              </div>
              <div class="flex bg-primary w-40 items-center cursor-pointer justify-center rounded-3xl" @click="toProject(p)">
                <p :class="menu ? 'opacity-0' : 'opacity-100'" class="transition-opacity text-black py-2 mb-0.5 duration-500">Ver
                  proyecto</p>
              </div>
            </div>
            <img v-if="p.home_image" class="w-full h-full object-cover" :src="p.home_image"/>
          </div>
        </swiper-slide>
      </swiper>
      <div :class="menu ? 'opacity-0' : 'opacity-100'"
           class="absolute transition-opacity duration-500 z-10 bottom-0 w-full mb-20 px-56 flex justify-center">
        <icon-scroll class="w-3"/>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { EffectFade, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import IconScroll from '../components/icon-scroll'
import IconToYoutube from '../components/icon-to-youtube'

SwiperCore.use([EffectFade, Mousewheel, Pagination, Scrollbar, A11y])
export default {
  name: 'Home',
  components: {
    IconToYoutube,
    IconScroll,
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const open = ref(false)
    const menu = ref(false)

    return {
      open,
      menu,
      currentRoute: computed(() => {
        const route = useRouter()
        return route.currentRoute.value
      }),
      projects: computed(() => {
        return store.state.projects
      }),
      onSlideChange () {
        console.log(open)
      },
      toggleMenu: () => {
        menu.value ? menu.value = false : menu.value = true
      },
      toProject: (project) => {
        router.push({
          name: 'Project details',
          params: { id: project.id }
        })
      }
    }
  }
}
</script>

<style>
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 50px;
}

.swiper-pagination {
  margin-right: 2rem;
}

.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin-bottom: 1.25rem;
}

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin-right: 0.75rem;
}

.swiper-pagination-bullet {
  width: .7rem;
  height: .7rem;
  border: 1px solid white;
  background: transparent;
  opacity: 0.8
}

.swiper-pagination-bullet-active {
  background: white !important;
}
</style>
