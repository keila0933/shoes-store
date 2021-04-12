import _axios from 'axios'

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || 'https://vast-dusk-10802.herokuapp.com/',
    //baseURL || process.env.REACT_APP_API_DOMAIN || 'http://localhost:3004', //if have url parameters,then use it,otherwise using 3004port
    timeout: 1000,
  })

  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      const jwToken = global.auth.getToken()
      config.headers['Authorization'] = 'Bearer ' + jwToken
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  return instance
}
export { axios } //if have parameters
export default axios()
