<template>
    <div>
      <!-- Tüm sayfalarda görünecek Navbar -->
      <Navbar />
      
      <slot />
      
      <!-- Tüm sayfalarda görünecek Footer -->
      <TheFooter />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import TheFooter from '@/components/TheFooter.vue'
  
  export default {
    components: {
      Navbar,
      TheFooter
    }
  }
  </script>
  