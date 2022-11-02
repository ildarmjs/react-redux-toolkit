import React from 'react'
import { useAppSelector } from '../../hook'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
	const todos = useAppSelector(state => state.todos.list)
  return (
	 <ul>
		{
			todos.map(todo => (
				<TodoItem key={todo.id} {...todo}/>
			))
		}
	 </ul>
  )
}
