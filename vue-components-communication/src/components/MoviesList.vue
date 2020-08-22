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
			<MoviesListItemInfo :movie="selectedMovie"/>
		</div>
	</div>
</template>

<script>
import MoviesListItem from './MoviesListItem'
import MoviesListItemInfo from './MoviesListItemInfo'

export default {
	components: {
		MoviesListItem,
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
			selectedMovie: undefined
		}
	},
	methods: {
		applyActiveClass(iteratedMovie) {
			return {
				active: this.selectedMovie && this.selectedMovie.id === iteratedMovie.id
			}
		}
	}
}
</script>