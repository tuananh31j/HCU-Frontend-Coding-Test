const ENV_CONFIG = {
    API_URL: import.meta.env.VITE_REACT_API_URL || '',
    NODE_ENV: import.meta.env.NODE_ENV || 'development',
};

if (!ENV_CONFIG.API_URL || ENV_CONFIG.API_URL === '') {
    throw new Error('API_URL is not defined in .env file');
}
export default ENV_CONFIG;
