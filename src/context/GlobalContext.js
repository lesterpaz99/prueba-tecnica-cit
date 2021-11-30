import { createContext } from 'react';

let initialValue = {
	products: [
		{
			name: 'Product one',
			price: '50',
			description: 'lorem ipsum',
			quantity: 1,
			active: true,
			id: '651-513-4541',
		},
		{
			name: 'Product two',
			price: '45',
			description: 'lorem ipsum',
			quantity: 5,
			active: true,
			id: '8465-942-01168',
		},
		{
			name: 'Product three',
			price: '80',
			description: 'lorem ipsum',
			quantity: 2,
			active: true,
			id: '9820-653-48706',
		},
	],
	username: 'admin',
};

const GlobalContext = createContext(initialValue);

export { GlobalContext };
