<template>
	<div class="mt-4">
		<hr>
		<h2 class="font-weight-light">Save task</h2>

		<form>
			<div class="row">
				<div :class="columnClass">
					<div class="form-group">
						<label>Title</label>
						<input 
							type="text"
							class="form-control"
							placeholder="Title of task"
						>
					</div>
				</div>

				<div class="col-sm-2" v-if="task">
					<div class="form-group">
						<label>Complete?</label>
						<button class="btn btn-secondary btn-sm d-block"><i class="fa fa-check"></i></button>
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
		columnClass() {
			return this.task ? 'col-sm-10' : 'col-sm-12'
		}
	}
}
</script>