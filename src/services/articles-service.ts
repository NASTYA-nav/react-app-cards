import axios from "axios";
import {IArticle} from "../app/contracts";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const ArticlesService = {
    async getAll() {
        debugger;
        const resp = await axios.get<IArticle[]>(baseUrl)
        return resp.data
    },
    async getById(id: number) {
        const resp = await axios.get<IArticle>(`${baseUrl}/${id}`)
        return resp.data
    }
}