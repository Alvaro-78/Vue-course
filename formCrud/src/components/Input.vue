<template lang="">
	<input
		type="text"
		class="form-control mt-2"
		placeholder="Nombre de la tarea"
		v-model.trim="task.name"
	/>
	<div class="form-check form-check-inline">
		<input
			class="form-check-input"
			type="checkbox"
			id="Checkbox1"
			value="Javascript"
			v-model="task.categories"
		/>
		<label class="form-check-label" id="Checkbox1">Javascript</label>
	</div>
	<div class="form-check form-check-inline">
		<input
			class="form-check-input"
			type="checkbox"
			id="Checkbox2"
			value="Node.js"
			v-model="task.categories"
		/>
		<label class="form-check-label" id="Checkbox2"> Node.js </label>
	</div>
	<div class="form-check form-check-inline">
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			id="Radio1"
			value="urgente"
			v-model="task.state"
		/>
		<label class="form-check-label" for="Radio1">Urgente</label>
	</div>
	<div class="form-check form-check-inline">
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			id="Radio2"
			value="relax"
			v-model="task.state"
		/>
		<label class="form-check-label" for="Radio2">Relax</label>
	</div>
	<div class="mt-2">
		<input type="number" class="form-control" v-model.trim="task.number" />
	</div>
	<button class="btn btn-dark mt-2 btn-block" :disabled="block">Guardar</button>
</template>
<script>
	export default {
		props: {
			task: Object,
		},
		computed: {
			block() {
				return this.task.name.trim() === '' ? true : false;
			},
		},
	};
</script>
