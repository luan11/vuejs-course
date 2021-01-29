<template>
	<div>
		<div class="row">
			<div class="col-sm-10">
				<h1 class="font-weight-light">Tasks List</h1>
			</div>

			<div class="col-sm-2">
				<button
					class="btn btn-primary float-right"
					@click="showCreateTaskForm"
				>
					<i class="fa fa-plus mr-2"></i>
					<span>Create</span>
				</button>
			</div>
		</div>

		<h3 class="font-weight-light mt-4">To Do ({{ tasksToDo.length }})</h3>

		<ul class="list-group" v-if="tasksToDo.length > 0">
			<TasksListItem
				v-for="task in tasksToDo" :key="task.id"
				:task="task"
				@edit="selectTaskForEdit"
				@done="doneTask({task: $event})"
				@delete="confirmDelete"
			/>
		</ul>

		<p v-else>No any task To Do.</p>

		<h3 class="font-weight-light mt-4">Done ({{ doneTasks.length }})</h3>

		<ul class="list-group" v-if="doneTasks.length > 0">
			<TasksListItem
				v-for="task in doneTasks" :key="task.id"
				:task="task"
				@edit="selectTaskForEdit"
				@done="doneTask({task: $event})"
				@delete="confirmDelete"
			/>
		</ul>

		<p v-else>No any task Done.</p>

		<TaskSave
			v-if="showForm"
			@save="saveTask"
		/>

		<div class="alert alert-danger" v-if="error">{{ error.message }}</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import register from './../_store/register'
import TasksListItem from './TasksListItem'
import TaskSave from './TaskSave'

const { mapActions, mapGetters, mapState } = createNamespacedHelpers('tasks');

export default {
	components: {
		TasksListItem,
		TaskSave
	},
	data() {
		return {
			showForm: false
		}
	},
	computed: {
		...mapState(['error', 'selectedTask']),
		...mapGetters([
			'doneTasks',
			'tasksToDo',
			'doneTasksCount',
			'welcome'
		])
	},
	created() {
		register(this.$store)

		this.listTasks()
	},
	methods: {
		...mapActions([
			'createTask',
			'deleteTask',
			'editTask',
			'listTasks',
			'doneTask',
			'selectTask',
			'resetSelectedTask'
		]),
		// ...mapMutations(['listTasks']), // ['listTasks'] || {loadTasks: 'listTasks'} || (commit, payload, options) => { commit('listTasks', payload, options) } 
		confirmDelete(task) {
			const confirm = window.confirm(`Do you really want to delete the task "${task.title}"?`);

			if(confirm) {
				this.deleteTask({ task });
			}
		},
		showCreateTaskForm() {
			if(this.selectedTask) {
				this.resetSelectedTask()
				return;
			}

			this.showForm = !this.showForm;
		},
		async saveTask(event) {
			switch(event.action) {
				case 'create':
					await this.createTask({ task: event.task })
				break;

				case 'edit':
					await this.editTask({ task: event.task })
				break;
			}
			
			this.reset()
		},
		selectTaskForEdit(task) {
			this.showForm = true;
			this.selectTask({ task })
		},
		reset() {
			this.showForm = false;
			this.resetSelectedTask()
		}
	},
}
</script>