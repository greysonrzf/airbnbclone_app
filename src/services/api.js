import axios from "axios";

const api = axios.create({
  base_url: "http://192.168.0.109:3333"
});

export default api;
