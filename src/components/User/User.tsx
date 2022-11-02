import React from 'react'
import { useDispatch } from 'react-redux'
import { setFirstName, setLastName } from '../../store/reducers/UserSlice'
import { FirstName } from './FirstName'
import { LastName } from './LastName'
import s from './User.module.scss'
export const User = () => {
	const dispatch = useDispatch() // функция useDispatch вызывает экшены для того чтобы изменить наше состояние

	return (
		<div className={s.users}>
			<h1 className={s.heading}>Users form </h1>
			<form className={s.form}>
				<input
					className={s.input}
					type='text'
					placeholder='first name'
					onChange={e => {
						dispatch(setFirstName(e.target.value))
					}}
				/>
				<input
					className={s.input}
					type='text'
					placeholder='last name'
					onChange={e => {dispatch(setLastName(e.target.value))}}
				/>
			</form>
			<div className={s.user}>
				<div className={s.user_col}>
					<div className={s.user_name}>First Name:</div>
					<div className={s.user_component}>
						<FirstName />
					</div>
				</div>

				<div className={s.user_col}>
					<div className={s.user_name}>Last Name:</div>
					<div className={s.user_component}>
						<LastName />
					</div>
				</div>
			</div>
		</div>
	)
}
