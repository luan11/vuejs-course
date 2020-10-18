<template>
	<div v-if="contact">
		<h3 class="font-weight-light">Name: {{ contact.name }}</h3>

		<p>Email: {{ contact.email }}</p>

		<button 
			class="btn btn-secondary mr-2" 
			@click="$router.back()"
		>
			Go back
		</button>

		<router-link 
			class="btn btn-primary"
			:to="{
				name: 'contact-edit',
				params: {
					id: id
				}
			}"
		>
			Edit
		</router-link>
	</div>
</template>

<script>
import EventBus from './../../event-bus'

export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			contact: null
		};
	},
	/* data() {
		return {
			id: this.$route.params.id
		}
	}, */
	/* watch: {
		'$route'(to) {
			this.id = to.params.id
		}
	}, */
	/* beforeRouteUpdate(to, from, next) {
		this.id = to.params.id

		next()
	}, */
	/* created() {
		this.contact = EventBus.searchContact(this.id);
	}, */
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.contact = EventBus.searchContact(vm.id);
		});
	},
	beforeRouteUpdate(to, from, next) {
		this.contact = EventBus.searchContact(this.id);

		next();
	}
}
</script>