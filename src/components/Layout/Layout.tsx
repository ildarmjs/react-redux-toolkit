import React, { FC, PropsWithChildren } from 'react'
import s from './Layout.module.scss'
export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <div className={s.layout}>{children}</div>
}
