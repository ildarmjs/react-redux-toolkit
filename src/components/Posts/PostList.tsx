import React from 'react'
import { useAppSelector } from '../../hook'
import { PostItem } from './PostItem'
import s from './Posts.module.scss'
export const PostList = () => {
	const posts = useAppSelector(state => state.posts.list)
	return (
		<ul className={s.post_ul}>
			{posts.map(post => (
				<PostItem key={post.id} title={post.title} />
			))}
		</ul>
	)
}
