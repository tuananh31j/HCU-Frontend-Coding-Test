import axios from 'axios';
import ENV_CONFIG from '~/configs/env';

const axiosOptions = {
    baseURL: ENV_CONFIG.API_URL,
};

const instance = axios.create(axiosOptions);

export default instance;
