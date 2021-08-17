<template>
  <div :class="[currentRoute.name === 'Home' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0']" class="duration-1000 transform transition ease-in-out">
    <div class="absolute z-30 w-full mt-20 flex justify-between items-center">
      <icon-logo class="md:ml-20 ml-10 w-11 cursor-pointer"/>
      <icon-menu @click="toggleMenu" class="md:mr-20 mr-10 w-8 cursor-pointer"/>
    </div>
    <div :class="[open ? 'modal-open' : 'modal-close']" class="h-screen bg-black w-full">
      <swiper class="h-full"
              :slides-per-view="1"
              :direction="'vertical'"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              :effect="'fade'"
              :mousewheel="true"
              @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(p, index) in projects" :key="index"
                      class="h-screen bg-black text-white flex justify-center items-center">
          <div v-if="index === 0">
            <video src="../assets/REEL_FILMING_HQ_1200_V2_compressed.mp4" autoplay muted loop></video>
          </div>
          <div v-else class="w-full h-full">
            <div class="absolute top-1/3 ml-20">
              <div :class="menu ? 'opacity-0' : 'opacity-100'"
                   class="uppercase text-xl mb-4 transition-opacity duration-500">{{ p.project_type }}
              </div>
              <div :class="menu ? 'opacity-0' : 'opacity-100'"
                   class="text-5xl font-bold mb-6 transition-opacity duration-500">/{{ p.name }}
              </div>
              <div class="flex items-center cursor-pointer" @click="toProject">
                <p :class="menu ? 'opacity-0' : 'opacity-100'" class="transition-opacity mr-4 duration-500">VER PROYECTO</p>
                <icon-arrow-right class="stroke-current text-white h-4" />
              </div>
            </div>
            <img v-if="p.images[0]" class="w-full h-full object-cover" :src="p.images[0]"/>
          </div>
        </swiper-slide>
      </swiper>
      <div :class="menu ? 'opacity-0' : 'opacity-100'"
           class="absolute transition-opacity duration-500 z-10 bottom-0 w-full mb-20 flex justify-center">
        <icon-scroll class="w-3"/>
      </div>
    </div>
    <div
      :class="`modal ${
        !menu && 'opacity-0 pointer-events-none'
      } z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div @click="toggleMenu" class="absolute w-full h-full bg-black opacity-70"></div>
      <div>
        <div v-for="(links, index) in menuLinks" :key="index">
          <div v-if="links.submenuLinks">
            <p class="relative cursor-pointer font-semibold mb-4 text-white text-center text-2xl z-20">
              {{ links.title }}
            </p>
            <div class="mx-4">
              <p class="relative cursor-pointer mb-4 text-white text-center" v-for="(link, index) in links.submenuLinks"
                 :key="index">
                {{ link }}
              </p>
            </div>
          </div>
          <p v-else class="relative cursor-pointer font-semibold mb-4 text-white text-center text-2xl z-20">
            {{ links.title }}
          </p>
        </div>
      </div>
    </div>
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
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconLogo from '../components/icon-logo'
import IconMenu from '../components/icon-menu'
import IconScroll from '../components/icon-scroll'
import { useRouter } from 'vue-router'
import IconArrowRight from '../components/icon-arrow-right'

SwiperCore.use([EffectFade, Mousewheel, Pagination, Scrollbar, A11y])
export default {
  name: 'Home',
  components: {
    IconArrowRight,
    IconScroll,
    IconMenu,
    IconLogo,
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
      menuLinks: computed(() => {
        return store.state.menuLinks
      }),
      onSlideChange () {
        console.log(open)
      },
      toggleMenu: () => {
        menu.value ? menu.value = false : menu.value = true
      },
      toProject: () => {
        router.push({ name: 'Project details' })
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
