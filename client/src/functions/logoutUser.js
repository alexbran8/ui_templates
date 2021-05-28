import {config} from '../config'
import axios from 'axios'

export default function logoutUser () {
  console.log('Logging out user...')
  localStorage.removeItem('user')

  axios
    .get(config.baseURL + config.baseLOCATION + '/auth/logout')
    .then(response => {
      window.location.href = 'config.baseLOCATION/login'
    })
    .catch(() => {
      window.location.href = 'config.baseLOCATION/login'
    })

  /// function logoutDone () { }
}

// module.exports = logoutUser
