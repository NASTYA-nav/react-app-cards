import axios from "axios";
import {IPhoto} from "../app/contracts";

const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

export const PhotosService = {
    async getAll() {
        debugger;
        const resp = await axios.get<IPhoto[]>(baseUrl)
        return resp.data
    },
}