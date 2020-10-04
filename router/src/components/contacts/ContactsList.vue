<template>
	<div>
		<h3 class="font-weight-light">Contacts</h3>

		<div class="form-group">
			<input type="search" class="form-control" placeholder="Search contacts"
				@keyup.enter="doSearch"
				:value="$route.query.kw"
			>
		</div>

		<hr>

		<ul class="list-group" v-if="filteredContacts.length > 0">
			<ContactsListItem
				class="list-group-item"
				v-for="contact in filteredContacts"
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
		}
	},
	computed: {
		filteredContacts() {
			const search = this.$route.query.kw;

			return !search ? this.contacts : this.contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
		}
	},
	methods: {
		doSearch(event) {
			this.$router.push({
				path: 'contacts',
				query: {
					kw: event.target.value
				}
			});
		},
		goback() {
			this.$router.back()
		}
	},
}
</script>