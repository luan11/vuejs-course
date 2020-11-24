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
			/>
		</ul>

		<p v-else>No any task To Do.</p>

		<h3 class="font-weight-light mt-4">Done ({{ doneTasks.length }})</h3>

		<ul class="list-group" v-if="doneTasks.length > 0">
			<TasksListItem
				v-for="task in doneTasks" :key="task.id"
				:task="task"
				@edit="selectTaskForEdit"
			/>
		</ul>

		<p v-else>No any task Done.</p>

		<TaskSave
			v-if="showForm"
			:task="selectedTask"
		/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapGetters, mapState } = createNamespacedHelpers('tasks');

import TasksListItem from './TasksListItem'
import TaskSave from './TaskSave'

export default {
	components: {
		TasksListItem,
		TaskSave
	},
	data() {
		return {
			showForm: false,
			selectedTask: null
		}
	},
	computed: {
		...mapState(['tasks']),
		...mapGetters([
			'doneTasks',
			'tasksToDo',
			'doneTasksCount',
			'welcome'
		])
	},
	created() {
		/* this.$store.commit({
			type: 'listTasks',
			tasks: [
				{
					id: 1,
					title: 'Aprender ... #1',
					done: true
				},
				{
					id: 2,
					title: 'Aprender ... #2',
					done: false
				},
				{
					id: 3,
					title: 'Aprender ... #3',
					done: true
				}
			]
		}); */

		setTimeout(async () => {
			console.log('Current user: ', this.welcome);

			await this.listTasks();
			console.log('Actions executed');

			console.log('Current user: ', this.welcome);
		}, 1000);
	},
	methods: {
		...mapActions(['listTasks']),
		// ...mapMutations(['listTasks']), // ['listTasks'] || {loadTasks: 'listTasks'} || (commit, payload, options) => { commit('listTasks', payload, options) } 
		showCreateTaskForm() {
			if(this.selectedTask) {
				this.selectedTask = null;
				return;
			}

			this.showForm = !this.showForm;
		},
		selectTaskForEdit(task) {
			this.showForm = true;
			this.selectedTask = task;
		},
		reset() {
			this.showForm = false;
			this.selectedTask = null;
		}
	},
}
</script>