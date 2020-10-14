<template>
	<form class="form-signin" @submit.prevent="login">
		<h1 class="h3 mb-3 font-weight-normal">Login</h1>
		
		<label class="sr-only">Email</label>
		<input 
			type="email"
			class="form-control"
			placeholder="Email"
			required
			autofocus
			v-model="user.email"
		>

		<label class="sr-only">Password</label>
		<input 
			type="password"
			class="form-control"
			placeholder="Password"
			required
			autofocus
			v-model="user.password"
		>

		<button type="submit" class="btn btn-lg btn-primary btn-block">Go</button>

		<div class="alert alert-danger mt-3" v-if="message">{{ message }}</div>
	</form>
</template>

<script>
import EventBus from './../../event-bus';

export default {
	data() {
		return {
			user: {
				email: '',
				password: ''
			},
			message: ''
		}
	},
	methods: {
		login() {
			if(this.user.email === 'oi@luandev.ml' && this.user.password === '101010') {
				EventBus.$emit('auth', true);
				
				const to = this.$route.query.redirect || '/contacts';

				this.$router.push(to);
				return;
			}

			this.message = 'Incorrect data!';
			setTimeout(() => {
				this.message = '';
			}, 3000);
		}
	}
}
</script>

<style scoped>
	.form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>