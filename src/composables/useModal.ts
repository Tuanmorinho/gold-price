import { ref, type Ref } from 'vue'

export function useModal(initial = false) {
  const open: Ref<boolean> = ref(initial)
  function show() { open.value = true }
  function hide() { open.value = false }
  function toggle() { open.value = !open.value }
  return { open, show, hide, toggle }
}


