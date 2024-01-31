<template>
	<!-- <Transition name="slide">
		<div
			v-if="show"
			class="app-alert alert"
			:class="typeStyle"
			role="alert"
		>
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="({ message, type }, index) in alerts"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
import { useAlert } from '@/composables/alert';
const { alerts } = useAlert();

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');

// import { computed } from 'vue';

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: 'error',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });

// const typeStyle = computed(() =>
// 	props.type === 'error' ? 'alert-danger' : 'alert-primary',
// );
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}
/* 
.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s;
}

.v-enter-to,
.v-leave-from {
	opacity: 1;
}
*/

/* name 값이 있는 Transition에 애니메이션을 적용하기 위해서는 v 대신 이름을 기재 */
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>
