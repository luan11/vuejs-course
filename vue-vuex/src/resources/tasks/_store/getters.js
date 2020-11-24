export default {
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