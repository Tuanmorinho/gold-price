<script setup lang="ts">
import Header from '@components/layout/Header.vue'
import Sidebar from '@components/layout/Sidebar.vue'
import Footer from '@components/layout/Footer.vue'
</script>

<template>
  <div class="flex h-screen flex-col">
    <!-- Header -->
    <Header />

    <!-- Main content area with sidebar -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main content -->
      <main class="flex-1 overflow-y-auto bg-slate-50">
        <div class="container mx-auto p-6">
          <slot />
        </div>
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>