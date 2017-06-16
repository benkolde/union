export default function(state=null, action){
  switch (action.type) {
    case 'COMPANY_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
