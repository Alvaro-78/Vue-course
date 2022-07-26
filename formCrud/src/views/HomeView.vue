<template>
	<form @submit.prevent="handleForm">
		<Input :task="task" />
	</form>
	<hr />
	<TaskList />
</template>

<script>
	// @ is an alias to /src
	import Input from '../components/Input.vue';
	import TaskList from '../components/TaskList.vue';
	import { mapActions } from 'vuex';
	const shortid = require('shortid');

	export default {
		name: 'HomeView',
		components: {
			Input,
			TaskList,
		},
		data() {
			return {
				task: {
					id: String,
					name: '',
					categories: [],
					state: '',
					number: 0,
				},
			};
		},
		methods: {
			...mapActions(['setTasks']),
			handleForm() {
				console.log('click');
				if (this.task.name.trim() === '') {
					console.log('Campo Vacío');
					return;
				}
				this.task.id = shortid.generate();

				// Añadimos los datos del Form al State

				this.setTasks(this.task);

				// Limpiar Form
				this.task = {
					id: String,
					name: '',
					categories: [],
					state: '',
					number: 0,
				};
			},
		},
	};
</script>
