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
	},
	actions: {
		searchTasks: () => {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve([
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
					]);
				}, 2000);
			});
		},
		listTasks: async ({ commit, dispatch }) => {
			const tasks = await dispatch('searchTasks');
			commit('listTasks', { tasks });
		}
	}
})