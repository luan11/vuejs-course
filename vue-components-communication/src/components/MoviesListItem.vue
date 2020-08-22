<template>
	<!-- <li class="list-group-item">
		<span>{{ movieTitleConcat }} | {{ year }}</span>
		<button class="btn btn-secondary float-right">Select</button>
	</li> -->
	<div>
		<input class="form-control" type="text" :value="title" :placeholder="$attrs.placeholder">
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
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
	},
	created() {
		console.log('Attrs', this.$attrs);
	}
}
</script>