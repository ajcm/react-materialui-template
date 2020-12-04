import axios from 'axios';
import _ from 'lodash';



export const doPost = async (url,data) =>{
  return await axios.post(url, data)
}

export const doGet = async (url) =>{
  return await axios.get(url,{ headers: { 
    'x-apikey': '59a7ad19f5a9fa0808f11931',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }})
}

export const doDelete = async (url) =>{
  return await axios.delete(url)
}
