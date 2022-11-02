import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { Layout } from './components/Layout/Layout'
import { AsyncPostsPage } from './pages/AsyncPostsPage'
import { TodoPage } from './pages/TodoPage'
import { UserFormPage } from './pages/UserFormPage'

function App() {
	return (
		<div className='app'>
			<Navigation />
			<Layout>
				<Routes>
					<Route path='/' element={<UserFormPage />} />
					<Route path='/todo' element={<TodoPage />} />
					<Route path='/async' element={<AsyncPostsPage />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
