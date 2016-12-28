export function fetchUser(){
  return{
    type: "FETCH_USER_FULLFILLED",
    payloads: {
      name: "Will",
      age: 28,
    }
  }
}

export function setUserName(name){
  return{
    type: "SET_USER_NAME",
    payloads: name
  }
}

export function setUserAge(age){
  return{
    type: "SET_USER_AGE",
    payloads: age
  }
}