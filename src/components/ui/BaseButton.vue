<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}

const props = defineProps<Props>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-slate-200 text-slate-900 hover:bg-slate-300'
    case 'ghost':
      return 'bg-transparent hover:bg-slate-100'
    default:
      return 'bg-sky-500 text-white hover:bg-sky-600'
  }
})
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md px-4 py-2 transition-colors',
      variantClass,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    type="button"
  >
    <slot />
  </button>
</template>


