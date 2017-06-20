import axios from 'axios';



const BASE_URL = "https://unionapi.herokuapp.com";

export function selectCompany(company){
  return{
    type: 'COMPANY_SELECTED',
    payload: company
  };
}

export function selectMetric(metric){
  return{
    type: 'METRIC_SELECTED',
    payload: metric
  }
}

export function fetchCompanies(){
  const url = `${BASE_URL}/companies`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*"}});
   return{
     type: 'FETCH_COMPANIES',
     payload: request
   }
}

export function loginUser(credentials){
  const url = `${BASE_URL}/auth/login`;
  const request = axios({method: 'post', url: url, data: credentials, headers: {"Access-Control-Allow-Origin": "*"}}).then(function(response){return response.data;});
  return{
    type: 'LOGIN_USER',
    payload: request
  }
}
