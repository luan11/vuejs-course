<template>
	<div class="row">
		<div class="col-8">
			<h2>Movies</h2>

			<ul class="list-group list-group-flush">
				<MoviesListItem
					v-for="movie in movies"
					:key="movie.id"
					:movie="movie"
					:class="applyActiveClass(movie)"
					@selectMovie="selectedMovie = $event"
				/>
			</ul>
		</div>
		<div class="col-4">
			<MoviesListItemInfo 
				v-if="!edit"
				:movie="selectedMovie"
				@movieEdit="movieEdit"
			/>

			<MoviesListItemEdit
				v-else
				:movie="selectedMovie"
			/>
		</div>
	</div>
</template>

<script>
import { eventBus } from './../main'

import MoviesListItem from './MoviesListItem'
import MoviesListItemEdit from './MoviesListItemEdit'
import MoviesListItemInfo from './MoviesListItemInfo'

export default {
	components: {
		MoviesListItem,
		MoviesListItemEdit,
		MoviesListItemInfo
	},
	data() {
		return {
			movies: [
				{
					id: 1,
					title: 'Avengers: Infinity War',
					year: 2018,
					director: 'Stan Lee'
				},
				{
					id: 2,
					title: 'Iron Man',
					year: 2018,
					director: 'Stan Lee'
				},
				{
					id: 3,
					title: 'Black Panter',
					year: 2018,
					director: 'Stan Lee'
				},
				{
					id: 4,
					title: 'Deadpool 2',
					year: 2018,
					director: 'Stan Lee'
				}
			],
			selectedMovie: undefined,
			edit: false
		}
	},
	methods: {
		applyActiveClass(iteratedMovie) {
			return {
				active: this.selectedMovie && this.selectedMovie.id === iteratedMovie.id
			}
		},
		movieEdit(movie) {
			this.edit = true
			this.selectedMovie = movie
		},
		updateMovie(movieUpdate) {
			const i = this.movies.findIndex(movie => movie.id === movieUpdate.id)
			this.movies.splice(i, 1, movieUpdate);
			this.selectedMovie = undefined;
			this.edit = false;
		}
	},
	created() {
		eventBus.$on('selectMovie', selectedMovie => {
			this.selectedMovie = selectedMovie
		})

		eventBus.$on('updateMovie', this.updateMovie)
	}
}
</script>