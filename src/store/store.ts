import todoSlice from './reducers/TodoSlice'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserSlice'
import postsSlice from './reducers/PostsSlice'
export const store = configureStore({
	reducer: {
		user: userSlice,
		todos: todoSlice,
		posts: postsSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
