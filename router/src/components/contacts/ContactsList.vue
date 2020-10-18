<template>
	<div>
		<h3 class="font-weight-light">Contacts</h3>

		<div class="form-group">
			<input type="search" class="form-control" placeholder="Search contacts"
				@keyup.enter="doSearch"
				:value="kw"
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
import EventBus from './../../event-bus'

export default {
	components: {
		ContactsListItem
	},
	props: ['kw'],
	data() {
		return {
			contacts: []
		}
	},
	computed: {
		filteredContacts() {
			const search = this.kw;

			return !search ? this.contacts : this.contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
		}
	},
	created() {
		this.contacts = EventBus.contacts
	},
	methods: {
		doSearch(event) {
			this.$router.push({
				name: 'contacts',
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