import Vue from 'vue'

export default new Vue({
	data: {
		authenticated: false,
		contacts: [
			{
				id: 1,
				name: 'Pedro Paulo',
				email: 'oi@luandev.ml'
			},
			{
				id: 2,
				name: 'Leonardo Santos',
				email: 'oi@luandev.ml'
			},
			{
				id: 3,
				name: 'Luan Novais',
				email: 'oi@luandev.ml'
			}
		]
	},
	created() {
		this.$on('auth', (authenticated) => {
			this.authenticated = authenticated
		})
	},
	methods: {
		searchContact(id) {
			return Object.assign({}, this.contacts.find(contact => contact.id === id))
		},
		contactEdit(contact) {
			const index = this.contacts.findIndex(contact => contact.id === contact.id);

			this.contacts.splice(index, 1, contact);
		}
	},
})