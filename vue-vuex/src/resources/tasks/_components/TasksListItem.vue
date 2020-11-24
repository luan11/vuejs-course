<template>
	<li class="list-group-item d-flex">
		<span>{{ task.title }}</span>

		<span class="spacing"></span>

		<button 
			class="btn btn-sm mr-4"
			:class="cssClass"
			:title="doneButtonTitle"
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
				'btn-secondary': !this.task.done,
				'btn-success': this.task.done
			}
		},
		doneButtonTitle() {
			return this.task.done ? 'Remake' : 'Done';
		}
	},
}
</script>

<style scoped>
	.spacing {
		flex: 1 1 auto;
	}
</style>