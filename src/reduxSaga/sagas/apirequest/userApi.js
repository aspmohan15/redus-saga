import axios from "axios";

export default function getUserDataFromAPI() {
  // return promises
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
}
