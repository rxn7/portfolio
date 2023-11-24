import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import {HashRouter} from 'react-router-dom'

const root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
)
