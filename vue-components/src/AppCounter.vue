<template>
	<div>
		<h2>Clicked {{ counter }}</h2>
		<button @click="increment">Increment</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0
		};
	},
	methods: {
		increment() {
			this.counter++;
		}
	}
}
</script>