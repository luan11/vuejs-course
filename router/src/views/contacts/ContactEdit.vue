<template>
	<div v-if="contact">
		<h3 class="font-weight-light">Name: {{ contact.name }}</h3>

		<form @submit.prevent="save">
			<div class="form-group">
				<label for="">Name</label>
				<input 
					type="text"
					class="form-control"
					placeholder="Insert the name"
					v-model="contact.name"
				>
			</div>

			<div class="form-group">
				<label for="">Email</label>
				<input 
					type="email"
					class="form-control"
					placeholder="Insert the name"
					v-model="contact.email"
				>
			</div>
			
			<button 
				type="button"
				class="btn btn-secondary my-4 mr-2"
				@click="$router.back()"
			>
				Go back
			</button>

			<button 
				type="submit"
				class="btn btn-success"
			>
				Save
			</button>
		</form>
	</div>
</template>

<script>
import EventBus from './../../event-bus'

export default {
	props: {
		id: {
			type: [String, Number],
			required: true
		}
	},
	data() {
		return {
			contact: null,
			isCanceling: true
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.contact = EventBus.searchContact(vm.id);
		});
	},
	beforeRouteLeave(to, from, next) {
		this.isCanceling ? next(window.confirm('You really want to exit?')) : next();
	},
	methods: {
		save() {
			EventBus.contactEdit(this.contact);

			this.isCanceling = false;

			this.$router.push({
				name: 'contacts'
			});
		}
	},
}
</script>