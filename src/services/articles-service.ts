import axios from "axios";

export const ArticlesService = {
    async getAll() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return resp.data
    }
}