<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			About으로 이동
		</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<h2>{{ position }}</h2>
		<h2>x: {{ x }}, y: {{ y }}</h2>
	</div>
</template>

<script>
export default {
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>

<script setup>
import { reactive } from 'vue';
import { toRefs } from 'vue';
import { toRef } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const position = reactive({
	x: 100,
	y: 1000,
});

// const x = toRef(position, 'x');
// const y = toRef(position, 'y');

const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
