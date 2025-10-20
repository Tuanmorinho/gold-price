<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

<template>
  <teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="$emit('update:modelValue', false)" />
      <div class="relative z-10 w-full max-w-lg rounded-lg bg-white p-4 shadow-lg">
        <header class="mb-3 flex items-center justify-between">
          <h3 class="text-lg font-semibold">
            <slot name="title">Modal</slot>
          </h3>
          <button class="rounded p-1 hover:bg-slate-100" @click="$emit('update:modelValue', false)">✕</button>
        </header>
        <section class="mb-4">
          <slot />
        </section>
        <footer class="flex justify-end gap-2">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </teleport>
</template>


