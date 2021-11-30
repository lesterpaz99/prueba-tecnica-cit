import { useContext, useReducer, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Heading } from './components/Heading';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { GlobalContext } from './context/GlobalContext';
import { appReducer } from './context/appReducer';
import { Login } from './components/Login';

function App() {
	const [isInLoginPage, setIsInLoginPage] = useState(true);
	const { products, username } = useContext(GlobalContext);
	const [state, dispatch] = useReducer(appReducer, products);

	const updateProducts = (type_action, product) => {
		dispatch({ type: type_action, payload: product });
	};

	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname !== '/') {
			setIsInLoginPage(false);
		}
	}, [pathname])

	return (
		<>
			{!isInLoginPage && <Heading />}
			<div className='text-center text-white mt-10'>
				<GlobalContext.Provider value={{ state, username }}>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route
							path='/home'
							element={<ProductList updateProducts={updateProducts} />}
						/>
						<Route
							path='/add'
							element={
								<ProductForm
									updateProducts={updateProducts}
									titleForm={'Add Product'}
								/>
							}
						/>
						<Route
							path='/edit:id'
							element={
								<ProductForm
									updateProducts={updateProducts}
									titleForm={'Edit Product'}
								/>
							}
						/>
					</Routes>
				</GlobalContext.Provider>
			</div>
		</>
	);
}

export default App;
