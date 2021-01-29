import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
	error: null,
	tasks: [],
	selectedTask: null
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};