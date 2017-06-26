import axios from 'axios';

const BASE_URL = "https://unionapi.herokuapp.com";
let AUTH_TOKEN = null;

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

export function loginUser(credentials){
  const url = `${BASE_URL}/auth/login`;
  const request = axios(
    {method: 'post',
    url: url,
    data: credentials,
    validateStatus: function (status) {
    return status >= 200 && status < 300; // default
    },
    headers: {"Access-Control-Allow-Origin": "*"}}).then(

      function(response){
        AUTH_TOKEN = response.data.auth_token;
        return {
          type: 'LOGIN_USER',
          payload: response.data
        }
      }
    ).then(
      function(response){
        if(response.payload.staff){
          return fetchCompanies(response.payload.auth_token);
        }else if(response.payload.staff === false){
          return fetchCompany(response.payload.auth_token, response.payload.company_id);
        }
      }
    ).catch(
      function(reason){
        return {
          type: 'LOGIN_USER_ERROR',
          payload: reason
        };
      }
    );
  return request;
}

export function fetchCompanies(auth){
  const url = `${BASE_URL}/companies`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${auth}`}}).then(
    function(response){
      console.log(response.data);
      return{type: 'FETCH_COMPANIES' , payload: response.data}
  });

  return request;
}

export function fetchCompany(auth, id){
  const url = `${BASE_URL}/companies/${id}`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${auth}`}}).then(
    function(response){
      console.log(response.data);
      return{type: 'FETCH_COMPANY' , payload: response.data}
  });
  return request;
}

export function updateMetrics(metric, data, id){
  const url = `${BASE_URL}/companies/${id}/metrics`;
  const request = axios(
    {method: 'put',
    url: url,
    data: {[metric]: data},
    validateStatus: function (status) {
    return status >= 200 && status < 300; // default
    },
    headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
      function(response){
        console.log(response);
        return{type: 'SUBMIT_METRIC'};
      }
    )
    return request;
}

export function submitMetrics(metric, data, id){
  const url = `${BASE_URL}/companies/${id}`;
  const request = axios(
    {method: 'post',
    url: url,
    data: {[metric]: data},
    validateStatus: function (status) {
    return status >= 200 && status < 300; // default
    },
    headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
      function(response){
        console.log(response);
        return{type: 'SUBMIT_METRIC'};
      }
    )
    return request;
}

export function logoutUser(){
  AUTH_TOKEN = null;
  return{
    type: 'LOGOUT_USER'
  }
}
