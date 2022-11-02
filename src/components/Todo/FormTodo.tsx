import React, { FC, MouseEventHandler, useState } from 'react'
import s from './Todo.module.scss'
import { addTodo } from '../../store/reducers/TodoSlice'
import { useAppDispatch } from '../../hook'

export const FormTodo: FC = () => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState<string>('')

	const addTodoHandler = (): any => {
		if (value.trim().length) {
			dispatch(addTodo(value))
			setValue('')
		}
	}

	return (
		<div>
			<h1 className={s.heading}>Todos</h1>
			<form className={s.form_todo} onSubmit={e => e.preventDefault()}>
				<input
					type='text'
					placeholder='Type something...'
					className={s.form_input}
					value={value}
					onChange={e => setValue(e.target.value)}
				/>

				<button
					type='submit'
					className='bg-blue-500 rounded px-6 w-1/2'
					onClick={addTodoHandler}
				>
					Add new todo
				</button>
			</form>
		</div>
	)
}
