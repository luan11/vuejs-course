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
							:value="task && task.title"
						>
					</div>
				</div>

				<div class="col-sm-2" v-if="task">
					<div class="form-group">
						<label for="">Done?</label>
						<button
							type="button"
							class="btn btn-sm d-block"
							:class="btnClass"
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
export default {
	props: {
		task: {
			type: Object,
			required: true
		}
	},
	computed: {
		columnClass() {
			return this.task ? 'col-sm-10' : 'col-sm-12';
		},
		btnClass() {
			return this.task && this.task.done ? 'btn-success' : 'btn-secondary';
		}
	},
	created() {
		if(this.task) {
			console.log('Task by ID:', this.$store.getters.getTaskById(this.task.id))
		}
	},
	methods: {
		save() {
			const action = this.task ? 'create' : 'edit';

			console.table(action);
		}
	}
}
</script>