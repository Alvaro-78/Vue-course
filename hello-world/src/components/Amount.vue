<template lang="">
	<div>
		<h1>Saldo: {{ amount }}€</h1>
		<h2>Tipo de cuenta: {{ count }}</h2>
		<h2>{{ state ? 'Activa' : 'Inactiva' }}</h2>
		<div v-for="(service, index) in services" :key="service.id">
			{{ index + 1 }}-{{ service }}
		</div>
	</div>
	<div class="button-group">
		<AmountAction text="Aumentar Saldo" @action="increment" />
		<AmountAction
			text="Disminuir Saldo"
			@action="decrement"
			:desactivar="desactivar"
		/>
	</div>
	<hr />
	<a v-bind:href="link1">Vue Cli</a><br />
	<a v-bind:href="link2">Vue Router</a>
</template>
<script>
	import AmountAction from './AmountAction.vue';
	export default {
		data() {
			return {
				amount: 0,
				count: 'Visa',
				state: true,
				services: ['giro', 'abono', 'transferencia'],
				desactivar: false,
				link1: 'https://vue-cli-course.netlify.app',
				link2: 'https://vue-router-practice-course.netlify.app/',
			};
		},
		components: {
			AmountAction,
		},
		methods: {
			increment() {
				this.amount = this.amount + 100;
				this.desactivar = false;
			},
			decrement() {
				if (this.amount === 0) {
					this.desactivar = true;
					alert('Sin blanca');
				}
				this.amount = this.amount - 100;
			},
		},
	};
</script>
<style lang="">
	/* .button-group {
		display: flex;
		flex-direction: row;
	} */
</style>
