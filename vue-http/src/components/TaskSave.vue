<template>
	<div class="mt-4">
		<hr>
		<h2 class="font-weight-light">Save task</h2>

		<form @submit.prevent="save">
			<div class="row">
				<div :class="columnClass">
					<div class="form-group">
						<label>Title</label>
						<input 
							type="text"
							class="form-control"
							placeholder="Title of task"
							v-model="localTask.title"
						>
					</div>
				</div>

				<div class="col-sm-2" v-if="task">
					<div class="form-group">
						<label>Complete?</label>
						<button 
							type="button"
							class="btn btn-sm d-block"
							:class="buttonClass"
							@click="localTask.complete = !localTask.complete"
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
			default: null
		}
	},
	data() {
		return {
			localTask: Object.assign({}, {
				title: '',
				complete: false
			}, this.task)
		}
	},
	computed: {
		buttonClass() {
			return this.task && this.localTask.complete ? 'btn-success' : 'btn-secondary';
		},
		columnClass() {
			return this.task ? 'col-sm-10' : 'col-sm-12'
		}
	},
	watch: {
		task() {
			this.localTask = Object.assign({}, this.task);
		}
	},
	methods: {
		save() {
			const operation = !this.task ? 'create' : 'edit';

			this.$emit(operation, this.localTask);

			this.localTask = {
				title: '',
				complete: false
			};
		}
	},
}
</script>