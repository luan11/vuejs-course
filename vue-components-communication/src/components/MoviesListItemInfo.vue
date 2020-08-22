<template>
	<div>
		<h2>Selected Movie</h2>

		<div class="card" v-if="movie">
			<div class="card-body">
				<h5 class="card-title">{{ movie.title }} | {{ movie.year }}</h5>
				<button @click="edit" class="btn btn-danger float-right">Edit</button>
			</div>
		</div>
		
		<p v-else>Nothing selected</p>
	</div>
</template>

<script>
import { eventBus } from './../main'

export default {
	data() {
		return {
			movie: undefined
		}
	},
	created() {
		eventBus.$on('selectMovie', selectedMovie => {
			this.movie = selectedMovie
		})
	},
	methods: {
		edit() {
			this.$emit('movieEdit', this.movie)
		}
	}
}
</script>