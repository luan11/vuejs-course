import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		counter: 0,
		tasks: []
	},
	getters: {
		doneTasks: state => state.tasks.filter(task => task.done),
		tasksToDo: state => state.tasks.filter(task => !task.done),
		doneTasksCount: (state, getters) => getters.doneTasks.length,
		getTaskById: state => id => state.tasks.find(task => task.id === id)
	},
	mutations: {
		listTasks: (state, { tasks }) => {
			state.tasks = tasks;
		}
	}
})