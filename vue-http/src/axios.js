import axios from 'axios'
import config from './config/config'

const instance = axios.create();

instance.defaults.baseURL = config.api.baseURL;

export default instance;