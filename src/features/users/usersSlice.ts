import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialUserState, IUser} from "../../app/contracts";
import {fetchUsers} from "./users.actions";

const initialState: IInitialUserState = {
    isLoading: false,
    error: null,
    data: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUserToStore: (state, {payload: user}) => {
            debugger
            state.data.unshift(user)
        },
        setAllUsersToStore: (state, {payload: users}) => {
            state.data = users
        },
        updateUserFromStore: (state, {payload: user}) => {
            const userStore = state.data.find(u => u.id === user.id)
            if (userStore){
                userStore.name = user.name
                userStore.website = user.website
                userStore.email = user.email
                userStore.phone = user.phone
            }
        },
        deleteUserFromStore: (state, {payload: userId}) => {
            debugger
            state.data = state.data.filter(u => u.id !== userId)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action: any) => {
            state.isLoading = false;
            state.error = action.payload.message
            state.data = [];
        });
    }
})

export const {actions, reducer} = userSlice