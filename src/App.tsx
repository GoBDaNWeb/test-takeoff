// * react 
import {Routes, Route} from 'react-router-dom'

// * components 
import MainPage from './pages/Main'
import AuthPage from './pages/Auth'

const App = () => {

	return (
		// <Layout>
			
			<Routes>
				<Route path='/' element={ <MainPage/>} />
				<Route path='/auth' element={ <AuthPage/>} />
			</Routes>
		// </Layout>
	);
}

export default App;
