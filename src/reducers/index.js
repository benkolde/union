import {combineReducers} from 'redux';
import CompaniesReducer from './reducer_companies.js';
import MetricsReducer from './reducer_availablemetrics.js';

const rootReducer = combineReducers({
  companiesdata: CompaniesReducer,
  availableMetrics: MetricsReducer
});

export default rootReducer;
