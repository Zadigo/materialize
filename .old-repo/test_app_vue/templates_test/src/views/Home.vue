<template>
  <div class="home">
    <Hero :hero="hero" />
    <Benefits :cards="cards" />
  </div>
</template>

<script>
import Hero from '@/components/hero/Hero.vue'
import Benefits from '@/components/hero/Benefits.vue'

export default {
  // name: 'hero',
  components: {
    Hero,
    Benefits
  },
  data() {
    return {
      hero: {
        lead: "This is a test",
        subtitle: "This is a great, great test"
      },
      cards: [
        {
          "id": 1,
          "icon": "room",
          "title": "title",
          "content": "This is some sort of test that is interesting"
        },
        {
          "id": 2,
          "icon": "room",
          "title": "title",
          "content": "content"
        },
        {
          "id": 3,
          "icon": "room",
          "title": "title",
          "content": "content"
        }
      ]
    }
  }
}
</script>
