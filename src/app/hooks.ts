import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as articlesActions} from "../features/articles/articlesSlice";
import {actions as userActions} from '../features/users/usersSlice'
import {actions as photoActions} from '../features/photos/photosSlice'
import { fetchPosts } from '../features/articles/articles.actions'
import { fetchUsers } from "../features/users/users.actions";
import { fetchPhotos } from "../features/photos/photos.actions";

const rootActions = {
    ...articlesActions,
    ...userActions,
    ...photoActions,
    fetchPosts,
    fetchUsers,
    fetchPhotos,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
