import { put, takeLatest, fork} from 'redux-saga/effects';
import {fetchCompanies, fetchCompany, fetchCompanyData} from '../actions/index.js';


export function* loginSaga(){
  yield takeLatest('LOGIN_USER', fetchCompanySaga);
}

function* fetchCompanySaga(action){
  if(action.payload.staff){
    yield put(fetchCompanies());
    yield takeLatest('FETCH_COMPANIES', getCompaniesDataSaga);
  }else{
    yield put(fetchCompany(action.payload.company_id));
    yield takeLatest('FETCH_COMPANY', getDataSaga);
  }
}

function* getDataSaga(action){
  yield put(fetchCompanyData(action.payload.id, false));
}

function* getCompaniesDataSaga(action){
  try{
    for(let company in action.payload.companies){
      yield fork(callCompanies, action.payload.companies[company].id);
    }
  }catch(e){
    console.log("caught");
  }
}

function* callCompanies(company){
  yield put(fetchCompanyData(company, true));
}
