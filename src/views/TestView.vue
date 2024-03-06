<template>
	<div v-for="item in items" :key="item.id">
		<input type="text" v-model="item.id" />
		<br />
		<input type="text" v-model="item.name" />
		<br />
		<button type="button" @click="updateItem($event, item)">수정</button>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	setup() {
		const items = ref([]);
		let testItems = [];

		const fetchItems = async () => {
			try {
				const response = await fetch('http://localhost:5000/items');
				const data = await response.json();
				items.value = data;
				testItems = data;
			} catch (error) {
				console.error(error);
			}
			console.log(items.value);
			console.log(testItems);
		};

		const updateItem = async (event, item) => {
			// event.preventDefault();

			// debugger
			try {
				const response = await fetch(
					`http://localhost:5000/items/${item.id}`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(item),
					},
				);
				if (response.ok) {
					console.log('아이템이 수정되었습니다.');
					console.log(items.value);
					console.log(testItems);
					return false;
				} else {
					console.error('아이템 수정에 실패했습니다.');
				}
			} catch (error) {
				console.error(error);
			}
			console.log(items.value);
			console.log(testItems);
		};

		onMounted(async () => {
			await fetchItems();
			console.log(items.value);
			console.log(testItems);
		});
		console.log(items.value);
		console.log(testItems);

		return {
			items,
			updateItem,
		};
	},
};
</script>
