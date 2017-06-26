export default function(state=null, action){
  switch (action.type) {
    case 'COMPANY_SELECTED':
      return action.payload;
    case 'FETCH_COMPANY':
      return action.payload.name;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
}
