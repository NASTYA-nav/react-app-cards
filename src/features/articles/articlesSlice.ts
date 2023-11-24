import {createSlice} from "@reduxjs/toolkit";
import {Article} from "../../hooks/contracts";

const initialState: Article = {
    body: '',
    id: 1,
    title: '',
    userId: 11
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers:{
        addArticleToStore: (state, {payload: article}) => {
            state.body = article.body
            state.title = article.title
            state.id = article.id
            state.userId = article.userId
        },
        getAllArticleToStore: (state, {payload: article}) => {

        },
        updateArticleFromStore: (state, {payload: article}) => {

        },
        deleteArticleFromStore: (state, {payload: articleId}) => {

        },
    }
})

export const {actions, reducer} = articleSlice