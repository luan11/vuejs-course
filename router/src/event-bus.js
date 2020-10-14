import Vue from 'vue'

export default new Vue({
	data: {
		authenticated: false
	},
	created() {
		this.$on('auth', (authenticated) => {
			this.authenticated = authenticated
		})
	}
})