import axios from "axios";

axios.defaults.withCredentials = true;

export const getTodos = () => axios.get("http://localhost:4000/todos");
