import { put, takeLatest} from 'redux-saga/effects';
import {fetchCompanies, fetchCompany} from '../actions/index.js';


export function* loginSaga(){
  yield takeLatest('LOGIN_USER', fetchCompanySaga);
}

function* fetchCompanySaga(action){
  if(action.payload.staff){
    yield put(fetchCompanies());
  }else{
    yield put(fetchCompany(action.payload.company_id));
  }
}
