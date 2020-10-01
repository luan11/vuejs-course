<template>
	<div>
		<div class="alert alert-warning">
			<h3 class="text-center">404</h3>
			<p class="text-center">Ops, page not found =(</p>
		</div>

		<button class="btn btn-secondary my-4"
			@click="$router.back()"
		>Go back</button>
	</div>
</template>