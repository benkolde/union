export default function(state="default", action){
  switch (action.type){
    case 'UPDATE_METRICS_ERROR':
      return action.payload;
    case 'SUBMIT_METRICS_ERROR':
      return action.payload;
    default:
      return "default";
  }
}
