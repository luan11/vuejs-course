import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
	tasks: []
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};