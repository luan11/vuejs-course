<template>
	<div>
		<div class="row">
			<div class="col-sm-10">
				<h1 class="font-weight-light">Tasks</h1>
			</div>

			<div class="col-sm-2">
				<button 
					class="btn btn-primary float-right"
					@click="showFormCreateTask"
				>
					<i class="fa fa-plus mr-2"></i>
					<span>Create</span>
				</button>
			</div>
		</div>

		<ul class="list-group" v-if="sortedTasks.length > 0">
			<TasksListItem
				v-for="task in sortedTasks"
				:key="task.id"
				:task="task"
				@edit="selectTaskToEdit"
				@delete="deleteTask"
				@complete="editTask"
			/>
		</ul>

		<p v-else-if="!errorMessage">No one task created.</p>

		<div class="alert alert-danger" v-else>{{ errorMessage }}</div>

		<TaskSave
			v-if="showForm"
			:task="selectedTask"
			@create="createTask"
			@edit="editTask"
		/>
	</div>
</template>

<script>
import axios from 'axios'

import config from './../config/config'
import TaskSave from './TaskSave'
import TasksListItem from './TasksListItem'

const axiosConfig = {
	baseURL: config.api.baseURL
};

export default {
	components: {
		TaskSave,
		TasksListItem
	},
	data() {
		return {
			tasks: [],
			showForm: false,
			selectedTask: null,
			errorMessage: null
		}
	},
	computed: {
		sortedTasks() {
			let tasks = this.tasks;

			return tasks.sort((task1, task2) => {
				if(task1.complete === task2.complete) {
					return task1.title < task2.title ? -1 : task1.title > task2.title ? 1 : 0;
				}

				return task1.complete - task2.complete;
			});
		}
	},
	created() {
		axios
			.get('tasks', axiosConfig)
			.then(response => {
				this.tasks = response.data;
			}, error => {
				console.log('Then error callback', error);

				return Promise.reject(error);
			})
			.catch(error => {
				if(error.response) {
					this.errorMessage = `Server returned an error: ${error.message} (${error.response.statusText})`;
				} else if(error.request) {
					this.errorMessage = `Error to call server: ${error.message}`;
				} else {
					this.errorMessage = `Error to make a request: ${error.message}`;
				}
			});
	},
	methods: {
		createTask(task) {
			axios
				.post('tasks', task, axiosConfig)
				.then(response => {
					this.tasks.push(response.data);
					
					this.reset();
				});
		},
		deleteTask(task) {
			const confirm = window.confirm(`Do you want to delete the task "${task.title}"?`);

			if(!confirm) {
				return;
			}

			axios
				.delete(`tasks/${task.id}`, axiosConfig)
				.then(() => {
					const index = this.tasks.findIndex(t => t.id === task.id);

					this.tasks.splice(index, 1);
				});
		},
		editTask(task) {
			axios
				.put(`tasks/${task.id}`, task, axiosConfig)
				.then(response => {
					const index = this.tasks.findIndex(t => t.id === task.id);

					this.tasks.splice(index, 1, response.data);

					this.reset();
				});
		},
		showFormCreateTask() {
			if(this.selectedTask) {
				this.selectedTask = null;

				return;
			}

			this.showForm = !this.showForm;
		},
		reset() {
			this.selectedTask = null;
			this.showForm = false;
		},
		selectTaskToEdit(task) {
			this.selectedTask = task;
			
			this.showForm = true;
		}
	}
}
</script>