<template>
	<li class="list-group-item">
		<span>{{ movieTitleConcat }} | {{ year }}</span>
		<button class="btn btn-secondary float-right">Select</button>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		year: {
			type: Number,
			required: true
		}
	},
	computed: {
		movieTitleConcat() {
			return `Title: ${this.title}`
		}
	}
}
</script>