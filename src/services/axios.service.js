import axios from "axios";
import baseURL from "../constants/URL";


export const axiosService = axios.create({
	baseURL,
	headers: {
		Authorization: 'VolodymyrYag eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODg4MzdjM2QxZDdmMTYzMjdiMzM5MjUyNmJjM2JlOCIsInN1YiI6IjYxZmVjZDFmNDU4MTk5MDAxZmFjYjMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZKw4xU9gcTDhKcnGJr2kdAcFGHev80UL-_7nUYN2bEk'
	}
});