<script setup lang="ts">
import Header from '@components/layout/Header.vue'
import Sidebar from '@components/layout/Sidebar.vue'
import Footer from '@components/layout/Footer.vue'
</script>

<template>
    <div>
        <Header />
        <Sidebar />
        <slot />
        <Footer />
    </div>
</template>