
import react from "react"
import reactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={ store }><Layout /></Provider>, app);

//Async functions

// const initialState = {
//    fetching: false,
//    fetched: false,
//    users: [],
//    error: null,
// };


// const reducers = (state=initialState, action) =>    {
//   switch(action.type){
//     case "FETCH_USERS_PENDING":{
//       return {...state, fetching: true}
//       break;
//     }
//     case "FETCH_USERS_REJECTED":{
//       return {...state, fetched: true, error: action.payloads}
//       break;
//     }
//     case "FETCH_USERS_RECIEVED":{
//       return {
//         ...state, 
//         fetching: false, 
//         fetched: true, 
//         error: action.payloads, 
//         users:action.payload
//       }
//       break;
//     }
//   }

//   return state;
// }

// store.subscribe(() =>  {
//   console.log('store changed', store.getState());
// });

// store.dispatch({
//   type: "FETCH_USERS",
//   payload:  axios.get("http://rest.learncode.academy/api/wstern/users")
// })




// store.dispatch((dispatch)=>{
    
//     dispatch({type: "FETCH_USERS_START"})
//     axios.get("http://rest.learsadfcode.academy/api/wstern/users")
//     //DO something async
//     .then((response) => {
//       dispatch({type: "RECIEVE_USERS", payloads: response.data})
//     })  
//     .catch((err) => {
//       dispatch({type: "FETCH_USERS_ERROR", payloads: err})
//     })

// })




//Apply Middlewares 


// const reducer = function(state, action){
//   switch(action.type){
//     case "INC":{
//       return state+action.payload;
//       break;
//     }
//     case "DEC":{
//       return state-action.payload;
//       break;
//     }
//     case "E":{
//       throw new Error("AAAAAAAA!")
//     }

//   }
//   return state;
// }

// const logger = (store) => (next) => (action) =>{
//   console.log('action fired', action);
//   // action.type = "DEC";
//   next(action);
// }

// const error = (store) => (next) => (action) =>{
//    try{
//       next(action);
//     }
//     catch(e){
//       console.log("AHHH !", e);
//    }
// }

// const middleware = applyMiddleware(logger, error);

// const store = createStore(reducer, 0, middleware);

// store.subscribe(() =>  {
//   console.log('store changed', store.getState());
// });

// store.dispatch({type:"INC", payload: 1})
// store.dispatch({type:"DEC", payload: 2})

// store.dispatch({type:"E"})









// Multiple Reducers


// const userReducer = (state={}, action) => {

//   switch(action.type){
//     case "CHANGE_NAME": {
//       state = {...state, name: action.name}
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: action.age}
//     }
    
//   }
//   return state;
// };

// const tweetReducer = (state=[], action) => {
//   return state;
// };

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetReducer,
// })

// //Store
// const store = createStore(reducers);


// // To Listen this store we will just subscribe

// store.subscribe(() => {
//   console.log('Store Changed', store.getState());
// })


// //Actions
// store.dispatch({type : "CHANGE_NAME", name: "Will"})
// store.dispatch({type : "CHANGE_AGE", age: 35})
