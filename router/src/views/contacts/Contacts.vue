<template>
	<div>
		<h3 class="font-weight-light">Contacts</h3>

		<button class="btn btn-secondary my-4" @click="goback">Go back</button>
	</div>
</template>

<script>
export default {
	methods: {
		goback() {
			/* this.$router.push({
				path: '/'
			}) */

			// this.$router.replace('/');

			// this.$router.go(-1);

			// this.$router.forward() // Avança 1 registro no histórico de navegação

			this.$router.back() // Retorna 1 registro no histórico de navegação
		}
	}
}
</script>