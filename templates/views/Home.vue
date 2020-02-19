<template>
    <main>
      <!-- Hero -->
      <Hero></Hero>

      <!-- Benefits -->
      <Benefits></Benefits>
      
      <!-- Contact -->
      <Contact></Contact>
    </main>
</template>

<script>
import Hero from '@/components/hero/Hero.vue'
import Benefits from '@/components/hero/Benefits.vue'
import Contact from '@/components/hero/Contact.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Benefits,
    Contact
  }
}
</script>
