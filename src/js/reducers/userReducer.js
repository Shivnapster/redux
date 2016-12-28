export default function reducer(state ={
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action){

     switch(action.type){
      
      case "FETCH_USERS":{
        return {...state, fetching: true}
        break;
      }
      
      case "FETCH_USERS_REJECTED":{
        return {...state, fetched: true, error: action.payload}
        break;
      }

      case "FETCH_USERS_FULLFILLED":{
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          tweets:action.payload,
        }
        break;
      }
      
    }
    
    return state;
}