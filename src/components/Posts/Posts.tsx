import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchPosts } from '../../store/reducers/PostsSlice'
import { PostList } from './PostList'
export const Posts = () => {
	const dispatch = useAppDispatch()
	const {loading, error} = useAppSelector(state => state.posts)
	// useEffect(()=>{
	// 	dispatch(fetchPosts())
	// }, [dispatch])

	const addPostsHandler = (): any => {
		
			dispatch(fetchPosts())
			
		
	}
  return (
		<div className='text-center'>
			<button className=' bg-blue-400 p-2 rounded mb-2' onClick={addPostsHandler}>Получить посты</button>
			{loading && (
				<h2 className='text-3xl text-red-500 text-center'>Loading...</h2>
			)}
			{error && (
				<h2 className='text-3xl text-red-500 text-center'>Ой ошибка!</h2>
			)}
			<PostList />
		</div>
	)
}
