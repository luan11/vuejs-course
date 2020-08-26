<template>
	<div>
		<h2>About</h2>

		<p v-if="author">Author: {{ author }}</p>
		<input type="text" v-model="author">
	</div>
</template>

<script>
export default {
	data() {
		return {
			author: ''
		};
	},
	created() {
		console.log('Created!')
	},
	destroyed() {
		console.log('Destroyed!')
	},
	activated() {
		console.log('Activated!')
	},
	deactivated() {
		console.log('Deactivated!')
	}
}
</script>