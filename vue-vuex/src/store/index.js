import Vue from 'vue'
import Vuex from 'vuex'

import counter from '@/store/modules/counter'
import tasks from '@/store/modules/tasks'

Vue.use(Vuex);

const state = {
	user: 'Luan'
};

const getters = {
	welcomeMessage: state => `Hello ${state.user}`
};

const actions = {
	login: ({ commit }, user) => {
		commit('login', user);
	}
};

const mutations = {
	login: (state, user) => {
		state.user = user;
	}
};

const modules = {
	counter,
	tasks
};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules
});