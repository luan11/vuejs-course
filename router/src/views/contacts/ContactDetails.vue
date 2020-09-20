<template>
	<h3 class="font-weight-light">Details about the contact ID {{ id }}</h3>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id
		}
	},
	/* watch: {
		'$route'(to) {
			this.id = to.params.id
		}
	}, */
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id

		next()
	},
	created() {
		console.log(this.$route.params);
	}
}
</script>