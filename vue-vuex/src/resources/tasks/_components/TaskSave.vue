<template>
	<div class="mt-4">
		<hr>

		<h2 class="font-weight-light">Save task</h2>

		<form @submit.prevent="save">
			<div class="row">
				<div
					:class="columnClass"
				>
					<div class="form-group">
						<label for="">Title</label>
						<input 
							type="text"
							class="form-control"
							placeholder="Title of task"
							v-model="task.title"
						>
					</div>
				</div>

				<div class="col-sm-2" v-if="selectedTask">
					<div class="form-group">
						<label for="">Done?</label>
						<button
							type="button"
							class="btn btn-sm d-block"
							:class="btnClass"
							@click="task.done = !task.done"
						>
							<i class="fa fa-check"></i>
						</button>
					</div>
				</div>
			</div>

			<button type="submit" class="btn btn-primary">Save</button>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			task: {}			
		}
	},
	computed: {
		...mapState('tasks', [
			'selectedTask'
		]),
		columnClass() {
			return this.selectedTask ? 'col-sm-10' : 'col-sm-12';
		},
		btnClass() {
			return this.selectedTask && this.task.done ? 'btn-success' : 'btn-secondary';
		}
	},
	watch: {
		selectedTask(newTask) {
			this.sync(newTask)
		}
	},
	created() {
		this.sync(this.selectedTask)
	},
	methods: {
		save() {
			const action = !this.selectedTask ? 'create' : 'edit';

			this.$emit('save', { action, task: this.task })
		},
		sync(newTask) {
			this.task = Object.assign(
				{},
				newTask || { title: '', done: false }
			)
		}
	}
}
</script>