import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const counterModule = {
	namespaced: true,
	state: {
		counter: 0
	},
	getters: {
		currentCounter: state => state.counter
	}
};

const tasksModule = {
	namespaced: true,
	state: {
		tasks: []
	},
	getters: {
		doneTasks: (state/* , getters, rootState, rootGetters */) => {
			return state.tasks.filter(task => task.done);
		},
		tasksToDo: state => state.tasks.filter(task => !task.done),
		doneTasksCount: (state, getters) => getters.doneTasks.length,
		getTaskById: state => id => state.tasks.find(task => task.id === id),
		welcome: (state, getters, rootState, rootGetters) => {
			console.log('Global State: ', rootState.user);
			console.log('Global Getter: ', rootGetters.welcomeMessage);

			return rootGetters.welcomeMessage
		}
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

			commit('login', 'Luan Novais', {
				root: true
			});
		}
	}
};

const store = new Vuex.Store({
	state: {
		user: 'Luan'
	},
	getters: {
		welcomeMessage: state => `Hello ${state.user}`
	},
	actions: {
		login: ({ commit }, user) => {
			commit('login', user);
		}
	},
	mutations: {
		login: (state, user) => {
			state.user = user;
		}
	},
	modules: {
		counter: counterModule,
		tasks: tasksModule
	}
});

export default store