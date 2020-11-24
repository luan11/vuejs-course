const state = {
	tasks: []
};

const getters = {
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
};

const actions = {
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
};

const mutations = {
	listTasks: (state, { tasks }) => {
		state.tasks = tasks;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};