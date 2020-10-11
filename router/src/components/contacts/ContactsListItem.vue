<template>
	<li>
		<span>{{ contact.name }}</span>
		<!-- O MAIS CORRETO SEMPRE É TRABALHAR COM ROUTER LINKS -->
		<router-link 
			:to="{
				path: `/contacts/details/${contact.id}`,
			}"
			class="btn btn-info btn-sm float-right"
		>
			Details
		</router-link>
		<!-- <button 
			class="btn btn-info btn-sm float-right"
			@click="viewDetails"
		>
			Details
		</button> -->
	</li>
</template>

<script>
export default {
	props: {
		contact: {
			type: Object,
			required: true
		}
	},
	methods: {
		viewDetails() {
			// this.$router.push(`/contacts/details/${this.contact.id}`)
			/* this.$router.push({
				path: `/contacts/details/${this.contact.id}`
			}) */ /* Desta forma não é possivel trabalhar com parametros pois a rota não é nomeada */

			/* this.$router.push({
				name: 'contact',
				params: {
					id: this.contact.id
				}
			}) */
			
			this.$router.replace({
				name: 'contact',
				params: {
					id: this.contact.id
				}
			})
		}
	}
}
</script>