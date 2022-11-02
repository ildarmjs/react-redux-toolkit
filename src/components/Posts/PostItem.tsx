import React, { FC } from 'react'
import s from './Posts.module.scss'
interface PropsPostItem {

	title: string
}

export const PostItem: FC<PropsPostItem> = ({ title,}) => {
  return (
		<li className={s.post_list}>
			
			<span>{title}</span>
			
		</li>
	)
}
