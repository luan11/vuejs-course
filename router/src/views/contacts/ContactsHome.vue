<template>
	<ContactsList :kw="kw"/>
</template>

<script>
import ContactsList from './../../components/contacts/ContactsList'

export default {
	components: {
		ContactsList
	},
	props: ['kw']
	/* methods: {
		goback() {
			this.$router.push({
				path: '/'
			})

			this.$router.replace('/');

			this.$router.go(-1);

			this.$router.forward() // Avança 1 registro no histórico de navegação

			this.$router.back() // Retorna 1 registro no histórico de navegação
		}
	} */
}
</script>