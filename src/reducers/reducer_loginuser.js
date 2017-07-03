export default function(state=null, action){
  switch (action.type){
    case 'LOGIN_USER':
      if(action.payload.staff){
        return ({"loggedinbrand": true});
      }else{
        return ({"loggedincomp": true});
      }
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_ERROR':
      return ({"usererror": true});
    default:
      return state;
  }
}
