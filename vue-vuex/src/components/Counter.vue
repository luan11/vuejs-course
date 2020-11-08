<template>
	<div>
		<h2 class="font-weight-light">Counter: {{ counter }}</h2>
		<h4 class="font-weight-light">Counter Alias: {{ counterAlias }}</h4>
		<h4 class="font-weight-light">Multiplicated Counter: {{ multiplicatedCounter }}</h4>

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
import {mapState} from 'vuex'

export default {
	data() {
		return {
			localCounter: 2
		}
	},
	/* computed: mapState([
		'counter'
	]), */
	computed: {
		...mapState({
			// counter: state => state.counter
			counter: 'counter',
			counterAlias: 'counter',
			multiplicatedCounter(state) {
				return state.counter * this.localCounter
			}	
		})
	},
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