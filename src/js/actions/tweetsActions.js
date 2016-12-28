import axios from "axios";

export function fetchTweets(){
  return function(dispatch) {

    axios.get("http://rest.learsadfcode.academy/api/wstern/users")
    //DO something async
    .then((response) => {
      dispatch({type: "FETCH_TWEETS_FULLFILLED", payloads: response.data})
    })  
    .catch((err) => {
      dispatch({type: "FETCH_TWEETS_REJECTED", payloads: err})
    })
 
  }
}

export function addTweet(id, text){
  return{
    type: "ADD_TWEET",
    payloads: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text){
  return{
    type: "UPDATE_TWEET",
    payloads: {
      id,
      text,
    },
  }
}

export function updateTweet(id){
  return{
    type: "DELETE_TWEET",
    payloads: id
  }
}