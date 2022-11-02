import React from 'react'
import { useSelector } from 'react-redux'

export const FirstName = () => {
	const name = useSelector((state:any) => state.user.firstName)
	return <div className='font-bold'>{name}</div>
}
