import {combineReducers} from 'redux';
import CompaniesReducer from './reducer_companies.js';
import MetricsReducer from './reducer_availablemetrics.js';
import ActiveCompany from './reducer_activecompany.js';
import ActiveMetrics from './reducer_activemetrics.js';
import ActiveUser from './reducer_loginuser.js';
import ChangeUser from './reducer_changeUser.js';
import CompanyDataStatus from './reducer_companyDataStatus.js';

const rootReducer = combineReducers({
  companiesdata: CompaniesReducer,
  availableMetrics: MetricsReducer,
  activeCompany: ActiveCompany,
  activeMetrics: ActiveMetrics,
  activeUser: ActiveUser,
  changedUser: ChangeUser,
  companyDataStatus: CompanyDataStatus
});

export default rootReducer;
