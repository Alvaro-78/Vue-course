window.addEventListener('load', () => {
	const app = Vue.createApp({
		data() {
			return {
				users: [],
				user: {
					id: '',
					name: '',
					username: '',
					email: '',
				},
				operation: 'Register',
				userIndex: -1,
			};
		},
		created() {
			if (localStorage.getItem('vue3.users') !== null) {
				this.user = JSON.parse(localStorage.getItem('vue3.users'));
			} else {
				this.listUsers();
			}
			this.listUsers();
		},
		mounted() {
			this.$refs.userName.focus();
		},
		methods: {
			async listUsers() {
				const res = await fetch('https://jsonplaceholder.typicode.com/users');
				const data = await res.json();
				this.users = data.slice(0, 5);
				this.updateLS();
				console.log(this.users);
			},

			updateLS() {
				localStorage.setItem('users', JSON.stringify(this.users));
			},
			processUser(event) {
				event.preventDefault();
				if (this.operaton === 'Register') {
					this.user.id = this.users.length + 1;
					this.users.push({
						id: this.user.id,
						name: this.user.name,
						username: this.user.username,
						email: this.user.email,
					});
				} else {
					this.users[this.userIndex].name = this.user.name;
					this.users[this.userIndex].username = this.user.username;
					this.users[this.userIndex].email = this.user.email;
				}
				this.updateLS();
				this.clearFields();
			},
			editUser(id) {
				this.operation = 'Update';
				const userFound = this.users.find((user, index) => {
					this.userIndex = index;
					return user.id === id;
				});
				this.user.name = userFound.name;
				this.user.username = userFound.username;
				this.user.email = userFound.email;
			},
			deleteUser(id, event) {
				const confirmation = confirm('Do you want to delete this user??');
				if (confirmation) {
					this.users = this.users.filter((user) => user.id !== id);
					this.updateLS();
				} else {
					event.preventDefault();
				}
			},
			clearFields() {
				this.user.id = '';
				this.user.name = '';
				this.user.username = '';
				this.user.email = '';
				this.operation = 'Register';
				this.$refs.userName.focus();
			},
		},
	});
	app.mount('#app');
});
