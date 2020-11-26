import TasksModule from './index'

const MODULE_NAME = 'tasks';

export default (rootStore) => {
	if(!(MODULE_NAME in rootStore._modules.root._children)) {
		rootStore.registerModule(MODULE_NAME, TasksModule)
	}
}