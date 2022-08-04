import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/index.css'
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Layout from './components/layout/Layout'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<App />
			</Layout>
		</BrowserRouter>
	</Provider>
);
