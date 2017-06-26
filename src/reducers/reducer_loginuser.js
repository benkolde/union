export default function(state=null, action){
  switch (action.type){
    case 'FETCH_COMPANIES':
      return ({"loggedinbrand": true});
    case 'FETCH_COMPANY':
      return({"loggedincomp": true})
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_ERROR':
      return ({"usererror": true});
    default:
      return state;
  }
}
