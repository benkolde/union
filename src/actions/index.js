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
