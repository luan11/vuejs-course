<template>
	<div>
		<h2 class="font-weight-light">Counter: {{ $store.state.counter }}</h2>

		<button 
			class="btn btn-lg btn-danger mr-2"
			@click="decrement"
		>
			-
		</button>
		
		<button 
			class="btn btn-lg btn-success"
			@click="increment"	
		>
			+
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		decrement() {
			this.$store.state.counter--;
		},
		increment() {
			this.$store.state.counter++;
		}
	}
}
</script>