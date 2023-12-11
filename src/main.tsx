// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import { MovieProvider } from './context/movie/movieProvider'
import { AuthProvider } from './context/auth/authProvider'
import { ThemeProvider } from './context/theme/themeProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
<ThemeProvider>
			{/* <MovieProvider > */}
				<AuthProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</AuthProvider>
			{/* </MovieProvider> */}
</ThemeProvider>
	</React.StrictMode>
)



