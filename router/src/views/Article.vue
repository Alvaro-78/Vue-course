<template lang="">
	<div>
		<Title text="Ruta con Parámetros" />
		<h2>Prámetro: {{ $route.params.id }}</h2>
		<h3>{{ data.title }}</h3>
		<p>{{ data.id }} -{{ data.body }}</p>
	</div>
</template>
<script>
	import Title from '../components/Title.vue';
	export default {
		components: { Title },
		data() {
			return {
				data: {},
			};
		},
		methods: {
			async consumArticle() {
				try {
					const data = await fetch(
						`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
					);
					const dataObject = await data.json();
					console.log(dataObject);
					this.data = dataObject;
				} catch (error) {
					console.log(error);
				}
			},
		},
		created() {
			this.consumArticle();
		},
	};
</script>
<style lang=""></style>
