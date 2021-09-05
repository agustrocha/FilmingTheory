<template>
  <div class="relative cursor-pointer mb-1 text-center" @click="toggleTag">
    <div :class="tag ? 'bg-neutral text-white' : 'bg-primary'" class="transition duration-500 px-4 relative z-10 h-12 flex font-bold justify-center items-center">
      <p class="text-sm lg:text-base">{{ label }}</p>
      <icon-arrow-down :class="tag ? '-rotate-180' : 'rotate-0'" class="transform transition hidden lg:block duration-500 ml-4 w-3 mt-1" />
    </div>
    <div :class="[tag ? 'static opacity-100 bg-neutral text-white overflow-y-auto' : 'absolute opacity-0 bg-primary']" class="transition duration-500 pb-4 text-sm lg:text-base w-full h-auto flex font-bold justify-center items-center">{{ label_2 }}</div>
  </div>
</template>

<script>
import IconArrowDown from './icon-arrow-down'
import { ref } from '@vue/runtime-core'
export default {
  name: 'rebateTag',
  components: { IconArrowDown },
  props: {
    label: String,
    label_2: String
  },
  setup () {
    const tag = ref(false)
    return {
      tag,
      toggleTag: () => {
        tag.value ? tag.value = false : tag.value = true
      }
    }
  }
}
</script>

<style scoped>

</style>
