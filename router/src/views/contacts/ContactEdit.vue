<template>
	<div>
		<h3 class="font-weight-light">Edit contact with id: {{ $route.params.id }}</h3>

		<button 
			class="btn btn-secondary my-4"
			@click="$router.back()"
		>
			Go back
		</button>
	</div>
</template>