<template lang="">
	<table class="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Nombre</th>
				<th scope="col">Categorías</th>
				<th scope="col">Estado</th>
				<th scope="col">Número</th>
				<th scope="col">Acción</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in tasks" :key="item.id">
				<th scope="row">{{ item.id }}</th>
				<td>{{ item.name }}</td>
				<td>
					<span v-for="(category, index) in item.categories" :key="index">
						{{
							item.categories.length === index + 1 ? category : category + ', '
						}}
					</span>
				</td>
				<td>{{ item.state }}</td>
				<td>{{ item.number }}</td>
				<td>
					<button class="btn btn-danger btn-sm" @click="deleteTask(item.id)">
						Eliminar Tarea
					</button>
					<router-link
						class="btn btn-warning ml-2 btn-sm"
						:to="{
							name: 'Edit',
							params: {
								id: item.id,
							},
						}"
					>
						Editar
					</router-link>
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	import { mapState, mapActions } from 'vuex';
	export default {
		computed: {
			...mapState(['tasks']),
		},
		methods: {
			...mapActions(['deleteTask']),
		},
	};
</script>
