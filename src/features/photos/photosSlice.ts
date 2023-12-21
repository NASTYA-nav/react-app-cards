import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialPhotosState, IPhoto,} from "../../app/contracts";
import {fetchPhotos} from "./photos.actions";

const initialState: IInitialPhotosState = {
    isLoading: false,
    error: null,
    data: [],
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotoToStore: (state, {payload: photo}) => {
            state.data.unshift(photo)
        },
        setAllPhotosToStore: (state, {payload: photos}) => {
            state.data = photos
        },
        updatePhotoFromStore: (state, {payload: photo}) => {
            const photoStore = state.data.find(p => p.id === photo.id)
            if (photoStore){
                photoStore.title = photo.title
                photoStore.url = photo.url
            }
        },
        deletePhotoFromStore: (state, {payload: photoId}) => {
            state.data = state.data.filter(p => p.id !== photoId)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<IPhoto[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPhotos.rejected, (state, action: any) => {
            debugger;
            state.isLoading = false;
            state.error = action.payload.message
            state.data = [];
        });
    }
})

export const {actions, reducer} = photoSlice