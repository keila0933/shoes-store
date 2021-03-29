import _axios from 'axios'

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || 'http://localhost:3004', //if have url parameters,then use it,otherwise using 3004port
    timeout: 1000,
  })
  return instance
}
export { axios } //if have parameters
export default axios()
