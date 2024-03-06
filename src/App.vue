<template>
	<TheHeader v-if="route.path != '/test'"></TheHeader>
	<TheView></TheView>
	<AppAlert />
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
