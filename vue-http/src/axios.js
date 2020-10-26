import axios from 'axios'
import config from './config/config'

const instance = axios.create();

instance.defaults.baseURL = config.api.baseURL;

/* instance.interceptors.request.use(config => {
	console.log(config);

	config.data = {
		...config.data,
		course: 'Vue JS'
	};

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(config);
		}, 2000);
	});
}, error => {
	console.log(error);

	return error;
}); */

instance.interceptors.request.use(config => {
	console.log(config);

	config.headers.common['Authorization'] = `Bearer token_jwt`;
	
	return config;
})

export default instance;