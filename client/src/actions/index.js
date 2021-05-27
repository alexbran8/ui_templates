import Axios from 'axios'
import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from './types'
import { config } from '../config'
// var jwtDecode = require('jwt-decode')
// import * as jwtDecode from 'jwt-decode';
import jwtDecode from 'jwt-decode'

export const SignUp = data => {
  return dispatch => {
    try {
      console.log(data)
      Axios.get(`${config.baseURL + config.baseLOCATION}/users/signup`, data)
        .then(function (response) {
          // alert(response.data.message + ' => imported: ' + response.data.imported + '; existing: ' + response.data.existing );
          console.log('res', response.data)
          alert(response.data)
          // that.setState({ messageData: response.data })
        })
        .catch(err => {
          console.log(err);
          alert(err)
        })
      // const decode = jwtDecode(res.data.token)
      // dispatch({
      //   type: AUTH_SIGN_UP,
      //   payload: res.data.token,
      //   payload_role: decode.role,
      //   payload_email: data.email,
      //   payload_name: decode.name,
      //   payload_nokiaid: decode.sub
      // })
      // localStorage.setItem('token', res.data.token)
      // localStorage.setItem('permisiuni', JSON.stringify(decode.role))
      // localStorage.setItem('email', data.email)
      // localStorage.setItem('name', decode.name)
      // localStorage.setItem('nokiaid', decode.sub)
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data.details[0].message
        })
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data
        })
      }
    }
  }
}

export const SignIn = data => {
  return async dispatch => {
    try {
      const res = await Axios.get(`${config.baseURL   }/login`,)
      
      console.log(res, 'nptbeta')
      // const decode = jwtDecode(res.data.token)
      // console.log(decode)
      // dispatch({
      //   type: AUTH_SIGN_IN,
      //   payload: res.data.token,
      //   payload_role: decode.role,
      //   payload_email: data.email,
      //   payload_name: decode.name,
      //   payload_nokiaid: decode.sub
      // })
      // localStorage.setItem('token', res.data.token)
      // localStorage.setItem('permisiuni', JSON.stringify(decode.role))
      // localStorage.setItem('email', data.email)
      // localStorage.setItem('name', decode.name)
      // localStorage.setItem('nokiaid', decode.sub)
    } catch (error) {
      console.log(error)
      if (error && error.response.status === 400) {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data.details[0].message
        })
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data
        })
      }
    }
  }
}

export const SignOut = () => {
  return async dispatch => {
    localStorage.removeItem('token')
    localStorage.removeItem('permisiuni')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('nokiaid')

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: '',
      payload_role: '',
      payload_email: '',
      payload_name: '',
      payload_nokiaid: ''
    })
  }
}
