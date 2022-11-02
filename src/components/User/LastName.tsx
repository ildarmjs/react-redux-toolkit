import React from 'react'
import { useSelector } from 'react-redux'

export const LastName = () => {
	const last_name = useSelector((state: any) => state.user.lastName)
  return (
	
	 <div className='font-bold'>{last_name}</div>
  )
}
