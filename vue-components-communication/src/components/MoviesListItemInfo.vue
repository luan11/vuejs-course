<template>
	<div>
		<h2>Selected Movie</h2>

		<div class="card" v-if="movie">
			<div class="card-body">
				<h5 class="card-title">{{ movie.title }} | {{ movie.year }}</h5>
				<button class="btn btn-danger float-right">Edit</button>
			</div>
		</div>
		
		<p v-else>Nothing selected</p>
	</div>
</template>

<script>
export default {
	props: {
		movie: Object
	}
}
</script>