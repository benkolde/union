export default function(state={changedcredentials:false}, action){
  switch (action.type){
    case 'CHANGE_USER':
      return {changedcredentials: true};
    case 'CHANGE_USER_ERROR':
      return {changedcredentials: false};
    default:
      return {changedcredentials: false};
  }
}
