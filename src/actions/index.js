import axios from 'axios';

const BASE_URL = "http://138.197.89.23:5000";
let AUTH_TOKEN = null;
let BRANDERY_USER = false;

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
    return status >= 200 && status < 300;
    },
    headers: {"Access-Control-Allow-Origin": "*"}}).then(
      function(response){
        AUTH_TOKEN = response.data.auth_token;
        if(response.data.staff){
          BRANDERY_USER = true;
        }
        return {
          type: 'LOGIN_USER',
          payload: response.data
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

export function fetchCompanies(){
  const url = `${BASE_URL}/companies`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
    function(response){
      return{type: 'FETCH_COMPANIES' , payload: response.data}
  });
  return request;
}

export function fetchCompany(id){
  const url = `${BASE_URL}/companies/${id}`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
    function(response){
      return{type: 'FETCH_COMPANY' , payload: response.data}
  });
  return request;
}

export function fetchCompanyData(id, isBrand){
  const url = `${BASE_URL}/companies/${id}/metrics`;
  const request = axios({method: 'get', url: url, headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
    function(response){
      if(isBrand){
        return{type: 'FETCH_COMPANIES_DATA', payload: response.data, company: id};
      }else{
        return{type: 'FETCH_COMPANY_DATA' , payload: response.data};
      }
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
    return status >= 200 && status < 300;
    },
    headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
      function(response){
        if(BRANDERY_USER){
          return fetchCompanyData(id, true);
        }else{
          return fetchCompanyData(id, false);
        }
      }
    ).catch(
      function(reason){
        return {
          type: 'UPDATE_METRICS_ERROR',
          payload: reason
        };
      }
    );
    return request;
}

export function submitMetrics(metric, data, id){
  const url = `${BASE_URL}/companies/${id}`;
  const request = axios(
    {method: 'post',
    url: url,
    data: {[metric]: data},
    validateStatus: function (status) {
    return status >= 200 && status < 300;
    },
    headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
      function(response){
        if(BRANDERY_USER){
          return fetchCompanyData(id, true);
        }else{
          return fetchCompanyData(id, false);
        }
      }
    ).catch(
      function(reason){
        return {
          type: 'SUBMIT_METRICS_ERROR',
          payload: reason
        };
      }
    );
    return request;
}

export function changeUser(credentials){
  const url = `${BASE_URL}/auth/change`;
  const request = axios(
    {method: 'put',
    url: url,
    data: credentials,
    validateStatus: function (status) {
    return status >= 200 && status < 300;
    },
    headers: {"Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${AUTH_TOKEN}`}}).then(
      function(response){
        return {
          type: 'CHANGE_USER',
          payload: response.data
        }
      }
    ).catch(
      function(reason){
        return {
          type: 'CHANGE_USER_ERROR',
          payload: reason
        };
      }
    );
  return request;
}

export function logoutUser(){
  AUTH_TOKEN = null;
  return{
    type: 'LOGOUT_USER'
  }
}
