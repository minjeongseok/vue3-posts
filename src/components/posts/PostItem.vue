<template>
  <AppCard>
    <template v-slot:header>header slot</template>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">{{ createAt }}</p>
    <template #footer>footer slot</template>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createAt: {
    type: [String, Date, Number],
  },
})
</script>

<style lang="scss" scoped>

</style>