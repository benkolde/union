export default function(state=null, action){
  switch (action.type){
    case 'FETCH_COMPANIES':
      return action.payload.companies;
    case 'FETCH_COMPANY':
      return action.payload;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
}
