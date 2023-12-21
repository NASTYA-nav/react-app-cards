import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import {reducer as articleReducer} from '../features/articles/articlesSlice';
import {reducer as userReducer} from '../features/users/usersSlice'
import {reducer as photoReducer} from '../features/photos/photosSlice'

const reducers = combineReducers({
  articles: articleReducer,
  users: userReducer,
  photos: photoReducer,
})

export const store = configureStore({
  reducer: reducers
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
