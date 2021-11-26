import { Product } from './Product';

function Products({ products, removeProduct, onComplete }) {
	return (
		<>
			{products.map((product) => (
				<Product
					product={product}
					removeProduct={removeProduct}
					key={product.name}
					onComplete={onComplete}
				/>
			))}
		</>
	);
}

export { Products };
