<template>
  <div class="h-screen absolute top-0 right-0 w-full bg-black">
    <div class="text-white" @click="toHome">Home</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Project',
  setup () {
    const router = useRouter()
    return {
      router,
      toHome: () => {
        router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style scoped>

</style>
