import axios from 'axios'
import config from './config/config'

axios.defaults.baseURL = config.api.baseURL

export default axios