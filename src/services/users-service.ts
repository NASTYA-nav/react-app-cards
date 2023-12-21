import axios from "axios";
import {IUser} from "../app/contracts";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const UsersService = {
    async getAll() {
        debugger;
        const resp = await axios.get<IUser[]>(baseUrl)
        return resp.data
    },
}