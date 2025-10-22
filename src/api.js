import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Altere se seu backend estiver em outra porta
});

export default api;
