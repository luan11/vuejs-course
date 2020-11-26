import * as types from './mutation-types'

export default {
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
		commit(types.LIST_TASKS, { tasks });

		commit('login', 'Luan Novais', {
			root: true
		});
	}
};