import axios from 'axios'
import { getToken } from '../lib/util'
export const rules = () => {
  return axios.get('/rules', {
    params: { token: getToken() }
  })
}
