<template>
	<div>
		<h2>About</h2>

		<p v-if="author">Author: {{ author }}</p>
		<input type="text" v-model="author">

		<!-- <AboutUs/> -->
	</div>
</template>

<script>
export default {
	name: 'AboutUs',
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