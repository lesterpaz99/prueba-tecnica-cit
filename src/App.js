import { useState } from 'react';
import './App.css';
import importedProducts from './sample/products.json';
import { Products } from './components/Products';
import { ProductsForm } from './components/ProductsForm';

function App() {
	const [products, setProducts] = useState(importedProducts);

	const updateProducts = (newProduct) => {
		const updatedProducts = [...products, newProduct];
		setProducts(updatedProducts);
	};

	const removeProduct = (name) => {
		const newProducts = products.filter((product) => product.name !== name);
		setProducts(newProducts);
	};

	const onComplete = (name, description, state) => {
		const updatedProduct = {
			name,
			description,
			// price,
			// quantity,
			state: !state,
		};
		const productIndex = products.findIndex((product) => product.name === name);
		products.splice(productIndex, 1, updatedProduct);
		setProducts([...products]);
	};

	return (
		<div className='App'>
			<ProductsForm updateProducts={updateProducts} />
			<Products
				products={products}
				removeProduct={removeProduct}
				onComplete={onComplete}
			/>
		</div>
	);
}

export default App;
