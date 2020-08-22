<template>
	<li class="list-group-item">
		<span>{{ movieTitleConcat }}</span>
		<button class="btn btn-secondary float-right">Select</button>
	</li>
</template>

<script>
export default {
	props: [
		'movieTitle'
	],
	computed: {
		movieTitleConcat() {
			return `Title: ${this.movieTitle}`
		}
	},
	created() {
		console.log('Movie title:', this.movieTitle)
	}
}
</script>