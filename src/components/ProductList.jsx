import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function ProductList({ updateProducts }) {
	const { state } = useContext(GlobalContext);

	const onDelete = (product) => {
		updateProducts('DELETE_PRODUCT', product);
	};

	return (
		<div className='flex justify-center pt-6'>
			<div className='w-6/12'>
				{state.map((product) => (
					<div
						key={product.id}
						className='bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex flex-col gap-4 rounded-lg'
					>
						<div className='flex flex-col mb-3'>
							<h5 className='font-bold'>{product.name}</h5>
							<span className='font-light'>Price: L. {product.price}</span>
						</div>
						<div className='flex justify-center gap-2'>
							<Link
								to={`/edit${product.id}`}
								className='bg-gray-600 px-2 py-1 font-bold rounded-sm'
							>
								Edit
							</Link>
							<button
								className='bg-red-700 px-2 py-1 font-bold rounded-sm'
								onClick={() => onDelete(product)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { ProductList };
