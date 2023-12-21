import {ArticlesService} from "../../services/articles-service";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IArticle} from "../../app/contracts";
const articles = (): Promise<IArticle[]> => {
    return  ArticlesService.getAll();
}

export const fetchPosts = createAsyncThunk(
    "articles/fetch",
    async (any, thunkApi) => {
        try {
            return await articles()
        } catch (err){
            return thunkApi.rejectWithValue(err)
        }

    });