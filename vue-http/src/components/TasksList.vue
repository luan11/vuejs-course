<template>
	<div>
		<h1 class="font-weight-light">Tasks</h1>

		<ul class="list-group" v-if="tasks.length > 0">
			<TasksListItem
				v-for="task in tasks"
				:key="task.id"
				:task="task"
			/>
		</ul>

		<p v-else>No one task created.</p>

		<TaskSave />
	</div>
</template>

<script>
import TaskSave from './TaskSave'
import TasksListItem from './TasksListItem'

export default {
	components: {
		TaskSave,
		TasksListItem
	},
	data() {
		return {
			tasks: [
				{
					id: 1,
					title: 'Learn TypeScript',
					complete: true
				},
				{
					id: 2,
					title: 'Learn Vue',
					complete: false
				},
				{
					id: 3,
					title: 'Learn Axios',
					complete: false
				}
			]
		}
	}
}
</script>