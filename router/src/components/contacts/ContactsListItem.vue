<template>
	<li>
		<span>{{ contact.name }}</span>
		<router-link 
			:to="{
				name: 'contact',
				params: {
					id: contact.id
				}
			}"
			class="btn btn-info btn-sm float-right"
		>
			Details
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		contact: {
			type: Object,
			required: true
		}
	}
}
</script>