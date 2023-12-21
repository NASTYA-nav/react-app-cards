import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticle, IInitialArticleState} from "../../app/contracts";
import {useQuery} from "@tanstack/react-query";
import {ArticlesService} from "../../services/articles-service";
import {fetchPosts} from "./articles.actions";



const initialState: IInitialArticleState = {
    isLoading: false,
    error: null,
    data: [],
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticleToStore: (state, {payload: article}) => {

            debugger;
            state.data.unshift(article)
        },
        setAllArticlesToStore: (state, {payload: articles}) => {
            state.data = articles
        },
        updateArticleFromStore: (state, {payload: article}) => {
            const articleStore = state.data.find(p => p.id === article.id)
            if (articleStore){
                articleStore.title = article.title
                articleStore.body = article.body
            }
        },
        deleteArticleFromStore: (state, {payload: articleId}) => {
            state.data = state.data.filter(p => p.id !== articleId)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action: any) => {
            state.isLoading = false;
            state.error = action.payload.message
            state.data = [];
        });
    }
})

export const {actions, reducer} = articleSlice