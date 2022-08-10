import axios from "axios";

export const API_URL = 'http://localhost:8080/'

export const getData = axios.create({
    baseURL : API_URL
});