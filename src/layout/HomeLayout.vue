<template>
  <div class="h-screen w-full bg-black">
    <suspense>
      <template #default>
        <router-view/>
      </template>
    </suspense>
    <Home/>
  </div>
</template>

<script>
import Home from '../views/Home'

export default {
  name: 'HomeLayout',
  components: { Home }
}
</script>

<style scoped>

</style>
