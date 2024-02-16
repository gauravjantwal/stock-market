import axios from 'axios'

export function setAuthHeader(token) {
  axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : ''
}
export function setLoaderApiCalls()
{  
  axios.interceptors.request.use( config => {
    
    // Add this code to show global loading indicator
    document.body.classList.add('loading-indicator');
  
    const token = window.localStorage.token;
    if (token) {
       config.headers.Authorization = `token ${token}`
    }
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use( response => {
  
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');  
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
}