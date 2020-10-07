<template>
	<div>
		<h3 class="font-weight-light">Details about the contact ID {{ id }}</h3>

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
export default {
	props: {
		id: {
			type: [String, Number],
			required: true
		}
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
	created() {
		console.log(this.$props);
	}
}
</script>