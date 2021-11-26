import { useState } from 'react';

function ProductsForm({ updateProducts }) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		const newProduct = {
			name,
			description,
			state: false,
		};

		updateProducts(newProduct);
		setName('');
		setDescription('');
	};

	const onChange = (e) => {
		if (e.target.name === 'name') {
			setName(e.target.value);
		}
		if (e.target.name === 'description') {
			setDescription(e.target.value);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Write a product'
				name='name'
				onChange={onChange}
				value={name}
			/>
			<br />
			<br />
			<textarea
				onChange={onChange}
				value={description}
				name='description'
				id=''
				cols='30'
				rows='10'
				placeholder='Write a description'
			></textarea>
			<br />
			<br />
			<input type='submit' value='Add' />
		</form>
	);
}

export { ProductsForm };
