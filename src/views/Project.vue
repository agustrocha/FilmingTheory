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
    <div class="flex">
      <div data-aos="fade-down-right" data-aos-duration="1000" class="mt-20 w-2/3 mx-container flex flex-col justify-between">
        <div>
          <div class="text-white uppercase text-2xl mb-10">{{ project.project_type }}</div>
          <div class="text-white w-full text-xl">{{ project.description_1 }}</div>
          <div class="text-white w-full text-xl mt-8">{{ project.description_2 }}</div>
          <div class="mt-8 text-xl text-white">
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
          <p class="text-primary text-xl font-black mr-4">COMPARTE:</p>
          <icon-instagram class="text-primary mr-4"/>
          <icon-facebook class="text-primary mr-4" />
          <icont-twitter class="text-primary mr-4" />
        </div>
      </div>
      <div data-aos="fade-down-left" data-aos-duration="1000" class="mt-20 w-1/3">
        <h3 class="text-xl text-secondary font-semibold mt-18">Equipo técnico</h3>
        <div class="w-3/4 mt-6 text-white text-lg">
          <p v-for="(t, index) in project.team" :key="index">{{ t }}</p>
        </div>
      </div>
    </div>
    <div data-aos="fade-down" data-aos-duration="1000" class="h-carrousel bg-neutral my-32">
      <swiper :navigation="true" :slidesPerView="3" :loop="true" class="mySwiper h-full w-full">
        <swiper-slide class="bg-white h-full w-full" v-for="(img, index) in project.images" :key="index">
          <img class="w-full h-full object-cover" :src="img"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-between mb-32 mx-24">
      <router-link :to="{ name: 'Project details', params: { id: prevProject.id } }" :class="projectIndex > 1 ? 'text-white cursor-pointer' : 'text-secondary pointer-events-none'" class="flex items-center">
        <icon-arrow-left class="mr-10 mt-0.5 w-2" />
        <p>proyecto anterior</p>
      </router-link>
      <div @click="nextProject" :class="projectIndex < (projects.length - 1) ? 'text-white cursor-pointer' : 'text-secondary pointer-events-none'" class="flex items-center">
        <p>proyecto siguiente</p>
        <icon-arrow-right class="text-white w-2 mt-0.5 ml-10" />
      </div>
    </div>
    <div class="h-footer bg-black flex items-center justify-center">
      <p class="text-white text-lg">© 2021 Filming Theory</p>
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
import IconFacebook from '../components/icon-facebook'
import IcontTwitter from '../components/icont-twitter'
import IconInstagram from '../components/icon-instagram'
import IconArrowRight from '../components/icon-arrow-right'
import IconArrowLeft from '../components/icon-arrow-left'

SwiperCore.use([Navigation])

export default {
  name: 'Project',
  components: {
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
    const project = store.state.projects.find(p => String(p.id) === String(destinationId))

    if (!project) {
      await router.push({ name: 'Home' })
    }

    const projectIndex = store.state.projects.findIndex(p => p.id === project.id)
    const prevProject = store.state.projects[projectIndex - 1]
    const nextProject = store.state.projects[projectIndex + 1]
    const projects = store.state.projects
    console.log(project)
    return {
      router,
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

.swiper-button-prev {
  left: 20px;
}
</style>
