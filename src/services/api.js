import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-y500.onrender.com',withCredentials: true 
  // baseURL: 'http://localhost:3333',withCredentials: true 
});