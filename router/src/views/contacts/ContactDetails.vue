<template>
	<div>
		<h3 class="font-weight-light">Details about the contact ID {{ id }}</h3>

		<div style="height: 900px"></div>

		<pre id="params">
			<code>Params: {{ params }}</code>
			<code>Hash: {{ $route.hash }}</code>
		</pre>

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
			type: Number,
			required: true
		}
	},
	data() {
		return {
			params: this.$route.params
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
	beforeRouteUpdate(to, from, next) {
		console.log('beforeRouteUpdate');

		this.params = to.params;

		next();
	}
}
</script>