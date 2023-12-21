import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPhoto} from "../../app/contracts";
import {PhotosService} from "../../services/photos-service";

const photos = (): Promise<IPhoto[]> => {
    return PhotosService.getAll();
}

export const fetchPhotos = createAsyncThunk(
    "photos/fetch",
    async (any, thunkApi) => {
        try {
            return await photos()
        } catch (err) {
            return thunkApi.rejectWithValue(err)
        }

    });