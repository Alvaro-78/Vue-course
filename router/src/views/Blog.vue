<template lang="">
	<div>
		<Title text="Título de mi Blog" />
		<div v-for="item in arrayBlog" :key="item.id">
			<router-link :to="`/blog/${item.id}`">
				{{ item.id }} - {{ item.title }}
			</router-link>
		</div>
		<!-- <button @click="consumApi">Consumir Api</button> -->
	</div>
</template>
<script>
	import Title from '../components/Title.vue';
	export default {
		components: { Title },
		methods: {
			async consumApi() {
				try {
					const data = await fetch(
						'https://jsonplaceholder.typicode.com/posts'
					);
					const array = await data.json();
					console.log(array);
					this.arrayBlog = array;
				} catch (error) {
					console.log(error);
				}
			},
		},
		data() {
			return {
				arrayBlog: [],
			};
		},
		// Equivalente a el useEffect
		created() {
			this.consumApi();
		},
	};
</script>
<style lang=""></style>
