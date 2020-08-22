<template>
	<li class="list-group-item">
		<span>{{ movie.title }} | {{ movie.year }}</span>
		<button @click="select" class="btn btn-secondary float-right">Select</button>
	</li>
</template>

<script>
export default {
	props: {
		movie: {
			type: Object,
			required: true
		}
	},
	methods: {
		select() {
			this.$emit('selectMovie', this.movie)
		}
	}
}
</script>