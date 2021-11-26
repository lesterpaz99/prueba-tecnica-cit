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
			<div className='product'>
				<p style={styleCompleted()}>
					{product.name} - Price: L. {product.price}
				</p>
				<p>{product.description}: </p>
				<div>
					<p>Activo: {product.state}</p>
					<input
						type='checkbox'
						onChange={() =>
							onComplete(product.name, product.description, product.state)
						}
					/>
				</div>
				<button onClick={() => removeProduct(product.name)}>Remove</button>
			</div>
		</div>
	);
}

export { Product };
