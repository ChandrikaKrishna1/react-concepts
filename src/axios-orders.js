import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c27c3.firebaseio.com/",
});

export default instance;
