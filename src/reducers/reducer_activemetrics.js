export default function(state={arr: []}, action){
  switch (action.type) {
    case 'METRIC_SELECTED':
      if(state.arr.indexOf(action.payload) === -1){
        return {
          ...state,
          arr: [...state.arr, action.payload]
        };
      }else{
        let toRemove = state.arr.indexOf(action.payload);
        let newArr = state.arr.slice(0, toRemove).concat(state.arr.slice(toRemove+1));
        return{
          ...state,
          arr: newArr
        };
      }
    case 'COMPANY_SELECTED':
      return{
        ...state, arr: []
      }
    default:
      return state;
  }
}
