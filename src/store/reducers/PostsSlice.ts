
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


type Posts = {
	id: number
	title: string
	completed: boolean
}

type PostsState = {
	list: Posts[]
	loading: boolean
	error: null|string
}

const initialState: PostsState = {
	list: [],
	loading: false,
	error: null
}

export const fetchPosts = createAsyncThunk<Posts[], undefined, {rejectValue: string}>(
	'posts/fetchPosts',
	async function (_, { rejectWithValue}) {
		const response = await fetch('https://dummyjson.com/posts?limit=10')
		if(!response.ok) {
			return rejectWithValue('server error')
		}

		const data = await response.json()

		return data.posts
	}
)

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.list = action.payload
				state.loading = false
			})
			.addMatcher(isError, (state,action: PayloadAction<string>)=> {
				state.error = action.payload
				state.loading = false
			})
		
	}
})


export default postsSlice.reducer

function isError(action: AnyAction) {
	return action.type.endsWith('rejected')
}