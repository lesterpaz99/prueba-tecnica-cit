import './Product.css';

function Product({ product, removeProduct, onComplete }) {
	const styleCompleted = () => {
		return {
			fontSize: '18px',
			color: product.state ? 'gray' : 'black',
			textDecoration: product.state ? 'line-through' : 'none',
		};
	};

	return (
		<div className='product-container'>
			<p style={styleCompleted()}>
				{product.name} - L. {product.price} {product.description}:{' '}
				{product.state}
			</p>
			<input
				type='checkbox'
				onChange={() =>
					onComplete(product.name, product.description, product.state)
				}
			/>
			<button onClick={() => removeProduct(product.name)}>x</button>
		</div>
	);
}

export { Product };
