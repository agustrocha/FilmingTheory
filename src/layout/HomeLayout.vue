<template>
  <div class="h-full w-full bg-neutral">
    <div class="absolute z-30 w-full lg:mt-20 mt-12 flex justify-between items-center">
      <icon-logo @click="home" class="lg:w-auto w-1/4 lg:ml-container ml-containerXS cursor-pointer"/>
      <icon-menu @click="toggleMenu" class="lg:mr-container mr-containerXS lg:w-8 w-7 cursor-pointer"/>
    </div>
    <main class="">
      <suspense>
        <template #default>
          <router-view/>
        </template>
      </suspense>
      <Home/>
    </main>
  </div>
  <div
    :class="`modal ${
        !menu && 'opacity-0 pointer-events-none'
      } z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div @click="toggleMenu" class="absolute w-full h-full bg-black opacity-70"></div>
    <div>
      <div v-for="(links, index) in menuLinks" :key="index">
        <div class="relative" v-if="links.submenuLinks">
          <div @click="toggleSubMenu" class="relative z-20 flex items-center mb-4 text-white hover:text-primary">
            <p class="relative cursor-pointer font-semibold text-center text-xl z-20">
              {{ links.title }}
            </p>
            <icon-arrow-right :class="[submenu ? 'rotate-90' : 'rotate-0']"
                              class="transform relative w-3 left-7 mt-1 transition duration-100"/>
          </div>
          <div v-if="submenu" class="mx-4 relative ">
            <p
              :class="link.title !== '54% Rebate' ? 'text-secondary pointer-events-none' : 'text-white hover:text-primary'"
              class="cursor-pointer text-center mb-4"
              v-for="(link, index) in links.submenuLinks"
              :key="index" @click="pushUrl(link.url)">
              {{ link.title }}
            </p>
          </div>
        </div>
        <p v-else @click="pushUrl(links.url)"
           class="relative cursor-pointer font-semibold mb-4 text-white text-center text-xl z-20 hover:text-primary">
          {{ links.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Home from '../views/Home'
import IconLogo from '../components/icon-logo'
import IconMenu from '../components/icon-menu'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconArrowRight from '../components/icon-arrow-right'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeLayout',
  components: {
    IconArrowRight,
    IconMenu,
    IconLogo,
    Home
  },
  setup () {
    const menu = ref(false)
    const store = useStore()
    const router = useRouter()
    const submenu = ref(false)
    return {
      menu,
      submenu,
      menuLinks: computed(() => {
        return store.state.menuLinks
      }),
      toggleMenu: () => {
        menu.value ? menu.value = false : menu.value = true
      },
      toggleSubMenu: () => {
        submenu.value ? submenu.value = false : submenu.value = true
      },
      home: () => {
        router.push({ name: 'Home' })
      },
      pushUrl: (name) => {
        router.push({ name: name })
        submenu.value = false
        menu.value = false
      }
    }
  }
}
</script>

<style scoped>

</style>
