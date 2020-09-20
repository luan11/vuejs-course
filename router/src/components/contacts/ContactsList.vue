<template>
	<div>
		<h3 class="font-weight-light">Contacts</h3>

		<ul class="list-group" v-if="contacts.length > 0">
			<ContactsListItem
				class="list-group-item"
				v-for="contact in contacts"
				:key="contact.id"
				:contact="contact"
			/>
		</ul>

		<p v-else>No one contact registered...</p>

		<button class="btn btn-secondary my-4" @click="goback">Go back</button>
	</div>
</template>

<script>
import ContactsListItem from './ContactsListItem'

export default {
	components: {
		ContactsListItem
	},
	data() {
		return {
			contacts: [
				{
					id: 1,
					name: 'Luan Novais',
					email: 'oi@luandev.ml'
				},
				{
					id: 2,
					name: 'Luan B',
					email: 'oi@luandev.ml'
				},
				{
					id: 3,
					name: 'Luan C',
					email: 'oi@luandev.ml'
				}
			]
		}
	},
	methods: {
		goback() {
			this.$router.back()
		}
	},
}
</script>