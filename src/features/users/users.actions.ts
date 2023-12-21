import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../app/contracts";
import {UsersService} from "../../services/users-service";

const users = (): Promise<IUser[]> => {
    return UsersService.getAll();
}

export const fetchUsers = createAsyncThunk(
    "users/fetch",
    async (any, thunkApi) => {
        try {
            return await users()
        } catch (err) {
            return thunkApi.rejectWithValue(err)
        }

    });