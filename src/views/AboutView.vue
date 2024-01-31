<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
		<hr class="my-4" />
		<h2>Store</h2>
		<p>counter: {{ store.counter }}</p>
		<p>doubleCount: {{ store.doubleCount }}</p>
		<p>doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>
		<button @click="store.increment">click!</button>
		<hr class="my-4" />
		<h2>구조분해 할당</h2>
		<p>storeToRefs { counter }: {{ counter }}</p>
		<p>storeToRefs { doubleCount }: {{ doubleCount }}</p>
		<p>storeToRefs { doubleCountPlusOne }: {{ doubleCountPlusOne }}</p>
		<button @click="increment">click!</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.path: ', route.path);

const store = useCounterStore();
// store.counter.value = 100; // 안되는 것 확인
// store.increment(); // 안되는 것 확인

// 위처럼 store. 하고 접근해도 안되는것을 보니 객체구조할당을 하는 이유는 store와의 연동을 위함인가?
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
counter.value = 100;

const { increment } = store;

increment();
</script>

<style lang="scss" scoped></style>
