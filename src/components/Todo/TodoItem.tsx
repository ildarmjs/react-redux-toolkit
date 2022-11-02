import React, { FC } from 'react'
import s from './Todo.module.scss'
import { toggleComplete, removeTodo } from './../../store/reducers/TodoSlice'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../hook'
import { GrClose } from 'react-icons/gr'
interface PropsTodoItem {
	id: string
	title: string
	completed: boolean
}

export const TodoItem: FC<PropsTodoItem> = ({ id, title, completed }) => {
	const dispatch = useAppDispatch()
	return (
		<li className={s.todo_item}>
			<input
				className=' h-4 w-4'
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleComplete(id))}
			/>
			<span>{title}</span>
			<GrClose className='cursor-pointer' onClick={() => dispatch(removeTodo(id))} />
		</li>
	)
}
