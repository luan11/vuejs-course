import TasksService from './../_services/TasksService'

import * as types from './mutation-types'

export default {
	doneTask: ({ dispatch }, payload) => {
		const task = Object.assign({}, payload.task)

		task.done = !task.done

		dispatch('editTask', { task })
	},
	createTask: ({ commit }, { task }) => {
		return TasksService.postTask(task)
			.then(response => commit(types.CREATE_TASK, { task: response.data }))
			.catch(error => commit(types.SET_ERROR, { error }))
	},
	editTask: async ({ commit }, { task }) => {
		const response = await TasksService.putTask(task)

		commit(types.EDIT_TASK, { task: response.data })
	},
	deleteTask: async ({ commit }, { task }) => {
		await TasksService.deleteTask(task.id)

		commit(types.DELETE_TASK, { task })
	},
	listTasks: async ({ commit }) => {
		try {
			const response = await TasksService.getTasks()

			commit(types.LIST_TASKS, { tasks: response.data })
		} catch(error) {
			commit(types.SET_ERROR, { error })
		}
	},
	selectTask: ({ commit }, payload) => {
		commit(types.SELECT_TASK, payload)
	},
	resetSelectedTask: ({ commit }) => {
		commit(types.SELECT_TASK, { task: null })
	}
}