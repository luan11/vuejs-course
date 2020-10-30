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

/* instance.interceptors.response.use(response => {
	if(Array.isArray(response.data)) {
		response.data = response.data.slice(1, 3);
	}

	return response;
}) */

export default instance;