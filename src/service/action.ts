import actiontype from './actiontype';
import axios from 'axios';
import { map as _map } from 'lodash';

import { store } from './../index'

export const getAllRecord = () => {

  return axios.get('http://localhost:3001/people')
  .then( res =>{
    store.dispatch({
      type: actiontype.ALL_DATA_SUCCESS,
      payload: res.data
    })}
  )
}

export const addUser = (user) => {

  return axios.post('http://localhost:3001/people', user)
  .then( res => {
    console.log('called..', res)
      if(res.statusText === 'Created') {
        getAllRecord()
      }
    }
  )
}
export const setActiveUser = (user: any) => {
    store.dispatch({
      type: actiontype.SET_ACTIVE_USER,
      payload: user
    })
}
export const reqToDeleteUser = (userIdList: Array<any>) => {
  _map(userIdList, each =>
    axios.delete('http://localhost:3001/people/'+ each.id)
    .then(() => getAllRecord()));
  
}