import { reactive, toRefs } from 'vue'

const state = reactive({
  open: false
})

export function useModal () {
  return {
    ...toRefs(state)
  }
}
