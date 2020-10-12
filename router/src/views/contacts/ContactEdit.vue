<template>
	<div>
		<h3 class="font-weight-light">Edit contact with id: {{ id }}</h3>

		<button 
			class="btn btn-secondary my-4"
			@click="$router.back()"
		>
			Go back
		</button>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: [String, Number],
			required: true
		}
	},
	data() {
		return {
			course: 'VueJS'
		}
	},
	beforeRouteEnter(to, from, next) {
		/* if(to.query.authenticated === 'true') {
			return next(vm => {
				console.log('Course:', vm.course);
			});
		}

		next('/contacts'); */

		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log('beforeRouteLeave');

		const confirm = window.confirm('You really want to exit?');

		next(confirm);
	}
}
</script>