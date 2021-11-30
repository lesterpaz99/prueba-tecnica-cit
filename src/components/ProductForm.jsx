import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm({ updateProducts, titleForm }) {
	const [product, setProduct] = useState({
		name: '',
		price: 0,
		description: '',
		quantity: 0,
		active: true,
		id: '',
	});

	const { state } = useContext(GlobalContext); //products

	const navigate = useNavigate();
	const params = useParams();

	const handleInput = (e) => {
		product[e.target.name] = e.target.value;
		setProduct({ ...product });
	};

	const onSave = (e) => {
		e.preventDefault();
		if (product.id) {
			updateProducts('UPDATE_PRODUCT', product);
		} else {
			product['id'] = uuidv4();
			setProduct({ ...product });
			updateProducts('ADD_PRODUCT', product);
		}
		e.target.reset();
		navigate('/home');
	};

	useEffect(() => {
		const productFound = state.find(
			(currentProduct) => currentProduct.id === params.id
		);

		if (productFound) {
			setProduct(productFound);
		}
	}, [params.id, state]);

	const inputStyles =
		'w-full py-2 px-3 bg-gray-800 placeholder-gray-400 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent rounded-md';

	return (
		<div className='flex justify-center items-center h-3/4'>
			<form
				className='w-6/12 bg-gray-900 p-10 text-white shadow-2xl flex flex-col gap-4 rounded-lg'
				onSubmit={onSave}
			>
				<h2 className='mb-4 text-3xl'>{titleForm}</h2>
				<div className='mb-5 flex flex-col gap-3'>
					<label className='flex flex-col'>
						<span className='pl-2 text-left'>Product Name: </span>
						<input
							type='text'
							name='name'
							placeholder='i.e: Tortillas de harina'
							className={inputStyles}
							onChange={handleInput}
							value={product.name}
						/>
					</label>
					<div>
						<label className='flex flex-col mb-2'>
							<span className='pl-2 text-left'>L. Price</span>
							<input
								type='number'
								name='price'
								placeholder='i.e: 20'
								className={inputStyles}
								onChange={handleInput}
								value={product.price}
							/>
						</label>
						<textarea
							name='description'
							id=''
							cols='30'
							rows='3'
							maxLength='50'
							placeholder='A short description here'
							className={inputStyles}
							onChange={handleInput}
							value={product.description}
						></textarea>
					</div>
					<label className='flex flex-col'>
						<span className='pl-2 text-left'>Quantity: </span>
						<input
							type='number'
							name='quantity'
							placeholder='i.e: 10'
							className={inputStyles}
							onChange={handleInput}
							value={product.quantity}
						/>
					</label>
					<label className='flex justify-items-start gap-2 mt-2'>
						<input
							type='checkbox'
							name='active'
							className='appearance-none bg-white p-3 rounded-sm checked:bg-green-400 checked:border-transparent'
							onChange={handleInput}
							value={product.active}
						/>
						Active
					</label>
					<button className='bg-green-600 px-2 py-1 mt-5 rounded-md hover:bg-green-500 transform hover:-translate-y-1'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export { ProductForm };
