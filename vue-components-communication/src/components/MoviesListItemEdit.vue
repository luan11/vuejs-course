<template>
	<div>
		<h2>Edit Movie</h2>

		<div class="form-group">
			<label>Title</label>
			<input 
				type="text"
				class="form-control"
				placeholder="Insert the title"
				:value="selectedMovie.title"
				@input="selectedMovie = { property: 'title', value: $event.target.value }"
			>
		</div>

		<div class="form-group">
			<label>Year</label>
			<input 
				type="text"
				class="form-control"
				placeholder="Insert the Year"
				:value="selectedMovie.year"
				@input="selectedMovie = { property: 'year', value: $event.target.value }"
			>
		</div>

		<button @click="saveMovie" class="btn btn-primary float-right">Save</button>
	</div>
</template>

<script>
import { eventBus } from './../main'

export default {
	props: {
		movie: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			localMovie: this.movie
		}
	},
	computed: {
		selectedMovie: {
			set(data) {
				this.localMovie = Object.assign(
					{},
					this.localMovie,
					{
						[data.property]: data.value
					}
				)
			},
			get() {
				return this.movie
			}
		}
	},
	watch: {
		movie(newMovie) {
			this.localMovie = Object.assign({}, newMovie)
		}
	},
	methods: {
		saveMovie() {
			eventBus.updateMovie(this.localMovie);
		}
	},
}
</script>