import axios from "axios";
import {Article} from "../hooks/contracts";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const ArticlesService = {
    async getAll() {
        const resp = await axios.get<Article[]>(baseUrl)
        return resp.data
    },
    async getById(id: number) {
        const resp = await axios.get<Article>(`${baseUrl}/${id}`)
        return resp.data
    },
    // async create(article: Article){
    //     const resp = await axios.post<any, any, Article>(baseUrl, {
    //         userId: 11,
    //     })
    //     return resp.data
    // }
}