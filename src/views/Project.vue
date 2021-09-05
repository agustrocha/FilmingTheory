<template>
  <div :class="[currentRoute.name === 'Project details' ? 'opacity-100' : 'opacity-0']"
       class="transition duration-100 ease-in-out absolute top-0 right-0 w-full bg-neutral">
    <div id="project_header" class="relative lg:h-100 h-72">
      <img class="object-cover w-full h-full" :src="project.header_banner">
      <a :href="project.video" target="_blank" class="absolute cursor-pointer bottom-16 sm:left-46% lg:top-0 lg:left-47% left-43% mt-40">
        <icon-button-play class="w-1/2 lg:w-auto"/>
      </a>
    </div>
    <div class="flex flex-col lg:flex-row lg:mx-containerXL mx-containerXS">
      <div data-aos="fade-down-right" :class="images.length <= 0 ? 'lg:mb-32 mb-12' : ''" data-aos-duration="1000" class="lg:mt-28 mt-16 lg:w-2/3 w-full lg:mr-52 flex flex-col justify-between">
        <div>
          <div class="text-white italic font-bold uppercase lg:text-5xl text-4xl mb-6">{{ project.name }}</div>
          <div class="text-white uppercase text-xl mb-10">{{ project.project_type }}</div>
          <div class="text-white leading-normal w-full text-lg">{{ project.description_1 }}</div>
          <div class="text-white leading-normal w-full text-lg mt-8">{{ project.description_2 }}</div>
          <div class="mt-8 text-lg leading-normal text-white">
            <p v-if="project.audiovisual_production"><span
              class="font-semibold text-secondary">Producción audiovisual: </span>{{ project.audiovisual_production }}
            </p>
            <p v-if="project.client"><span class="font-semibold text-secondary">Cliente: </span>{{ project.client }}</p>
            <p v-if="project.colaboration_with"><span
              class="font-semibold text-secondary">Colabora: </span>{{ project.colaboration_with }}</p>
            <p v-if="project.editor"><span class="font-semibold text-secondary">Editor: </span>{{ project.editor }}</p>
          </div>
        </div>
        <div class="flex items-center mt-20">
          <p class="text-primary text-lg font-black mr-4">COMPARTE:</p>
          <a href="https://www.instagram.com/"><icon-instagram class="text-primary mr-4"/></a>
          <a href="https://es-es.facebook.com/"><icon-facebook class="text-primary mr-4" /></a>
          <a href="https://twitter.com/"><icont-twitter class="text-primary mr-4" /></a>
        </div>
      </div>
      <div v-if="project.team" data-aos="fade-down-left" data-aos-duration="1000" class="lg:mt-40 w-full lg:w-1/3">
        <h3 class="text-lg text-secondary font-semibold mt-24">Equipo técnico</h3>
        <div class="lg:w-3/4 w-full mt-2 text-white text-sm">
          <p v-for="(t, index) in project.team" :key="index">{{ t }}</p>
        </div>
      </div>
    </div>
    <div v-if="images.length > 0" data-aos="fade-down" data-aos-duration="1000" class="lg:h-carrousel h-carrouselXS bg-neutral my-32">
      <swiper :navigation="true" :slidesPerView="1" :loop="true" :breakpoints='{
        "640": {
          "slidesPerView": 1,
        },
        "768": {
          "slidesPerView": 2,
        },
        "1024": {
          "slidesPerView": 3,
        }
}' class="mySwiper h-full w-full">
        <swiper-slide class="bg-white h-full w-full" v-for="(img, index) in images" :key="index">
          <img class="w-full h-full object-cover" :src="img"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex hidden justify-between mb-32 mx-24">
      <router-link :to="{ name: 'Project details', params: { id: prevProject.id } }" :class="projectIndex > 1 ? 'text-white cursor-pointer' : 'text-secondary pointer-events-none'" class="flex items-center">
        <icon-arrow-left class="mr-10 mt-0.5 w-2" />
        <p>proyecto anterior</p>
      </router-link>
      <div @click="nextProject" :class="projectIndex < (projects.length - 1) ? 'text-white cursor-pointer' : 'text-secondary pointer-events-none'" class="flex items-center">
        <p>proyecto siguiente</p>
        <icon-arrow-right class="text-white w-2 mt-0.5 ml-10" />
      </div>
    </div>
    <Footer />
  </div>
  <div class="fixed hidden lg:block top-1/3">
    <icon-scroll class="w-3 ml-17 " />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.min.css'
import IconFacebook from '../components/icon-facebook'
import IcontTwitter from '../components/icont-twitter'
import IconInstagram from '../components/icon-instagram'
import IconArrowRight from '../components/icon-arrow-right'
import IconArrowLeft from '../components/icon-arrow-left'
import Footer from '../components/Footer'
import IconScroll from '../components/icon-scroll'
import { ref } from '@vue/runtime-core'
import IconButtonPlay from '../components/icon-button-play'

SwiperCore.use([Navigation])

export default {
  name: 'Project',
  components: {
    IconButtonPlay,
    IconScroll,
    Footer,
    IconArrowLeft,
    IconArrowRight,
    IconInstagram,
    IcontTwitter,
    IconFacebook,
    Swiper,
    SwiperSlide
  },
  props: {},
  async setup () {
    const router = useRouter()
    const store = useStore()
    const destinationId = router.currentRoute.value.params.id
    const project = ref(store.state.projects.find(p => String(p.id) === String(destinationId)))
    if (!project) {
      await router.push({ name: 'Home' })
    }
    const projectIndex = store.state.projects.findIndex(p => p.id === project.value.id)
    const prevProject = store.state.projects[projectIndex - 1]
    const nextProject = store.state.projects[projectIndex + 1]
    const projects = store.state.projects
    const images = ref(project.value.images)

    const currentRoute = computed(() => router.currentRoute.value)
    function toggleHiddenScroll () {
      currentRoute.value.name === '54% Rebate' ? document.querySelector('body').classList.add('overflow-y-hidden') : document.querySelector('body').classList.remove('overflow-y-hidden')
    }
    toggleHiddenScroll()

    return {
      router,
      images,
      project,
      projects,
      projectIndex,
      prevProject,
      nextProject,
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
.swiper-button-next {
  margin-right: 2rem;
}
</style>
