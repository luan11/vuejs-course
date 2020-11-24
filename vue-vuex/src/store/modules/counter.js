const state = {
	counter: 0
};

const getters = {
	currentCounter: state => state.counter
};

export default {
	namespaced: true,
	state,
	getters
};