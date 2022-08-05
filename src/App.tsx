// * react 
import {Routes, Route} from 'react-router-dom'

// * components 
import MainPage from './pages/Main'
import AuthPage from './pages/Auth'

const App = () => {

	return (
		<>
			<Routes>
				<Route path='/' element={ <MainPage/>} />
				<Route path='/auth' element={ <AuthPage/>} />
			</Routes>
		</>
	);
}

export default App;
