export default function(state=null, action){
  switch (action.type){
    case 'FETCH_COMPANIES':
      return action.payload.companies;
    case 'FETCH_COMPANY':
      return action.payload;
    case 'FETCH_COMPANIES_DATA':
      for(let company in state){
        if(state[company].id === action.company){
          let oldcompany = state[company];
          let newcompany = {...oldcompany, metrics: action.payload};
          return {...state, [company]: newcompany};
        }
      }
      return state;
    case 'FETCH_COMPANY_DATA':
      return {...state, metrics: action.payload};
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
}
