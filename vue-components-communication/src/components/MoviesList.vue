<template>
	<div class="row">
		<div class="col-8">
			<h2>Movies</h2>

			<div class="list-group list-group-flush">
				<MoviesListItem
					v-for="(movie, i) in movies"
					:key="i"
					:movieTitle="movie"
				/>
			</div>
		</div>
		<div class="col-4">
			<MoviesListItemInfo/>
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
				'Avengers: Infinity War',
				'Iron Man',
				'Black Panter',
				'Deadpool 2'
			]
		}
	}
}
</script>