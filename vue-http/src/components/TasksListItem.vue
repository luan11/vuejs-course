<template>
	<li class="list-group-item d-flex">
		<span>{{ task.title }}</span>
		<span class="space"></span>
		<button 
			class="btn btn-sm mr-4"
			:class="cssClass"
			:title="completeButtonTitle"
			@click="completeTask"
		>
			<i class="fa fa-check"></i>
		</button>
		<button 
			class="btn btn-primary btn-sm mr-1"
			title="Edit"
			@click="$emit('edit', task)"
		>
			<i class="fa fa-pencil-alt"></i>
		</button>
		<button 
			class="btn btn-danger btn-sm"
			title="Delete"
			@click="$emit('delete', task)"
		>
			<i class="fa fa-trash"></i>
		</button>
	</li>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			required: true
		}
	},
	computed: {
		cssClass() {
			return {
				'btn-secondary': !this.task.complete,
				'btn-success': this.task.complete
			}
		},
		completeButtonTitle() {
			return this.task.complete ? 'Remake' : 'Complete'
		}
	},
	methods: {
		completeTask() {
			this.$emit('complete', Object.assign({}, this.task, {
				complete: !this.task.complete
			}));
		}
	},
}
</script>

<style scoped>
	.space {
		flex: 1 1 auto;
	}
</style>