import {combineReducers} from 'redux';
import CompaniesReducer from './reducer_companies.js';
import MetricsReducer from './reducer_availablemetrics.js';
import ActiveCompany from './reducer_activecompany.js';
import ActiveMetrics from './reducer_activemetrics.js';

const rootReducer = combineReducers({
  companiesdata: CompaniesReducer,
  availableMetrics: MetricsReducer,
  activeCompany: ActiveCompany,
  activeMetrics: ActiveMetrics
});

export default rootReducer;
