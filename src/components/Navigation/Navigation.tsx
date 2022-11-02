import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'

export const Navigation = () => {
	return (
		<nav className={s.nav}>
			<Link to='/'>
				<li className={s.list}>
					<a href=''>UserPage</a>
				</li>
			</Link>
			<Link to={'/todo'}>
				<li className={s.list}>
					<a href=''>TodoPage</a>
				</li>
			</Link>
			<Link to={'/async'}>
				<li className={s.list}>
					<a href=''>AsyncPage</a>
				</li>
			</Link>
		</nav>
	)
}
