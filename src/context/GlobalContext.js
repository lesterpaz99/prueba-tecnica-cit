import { createContext } from 'react';

let initialValue = {
	products: [
		{
			name: 'Tortillitas',
			price: '10',
			description: 'lorem ipsum',
			quantity: 20,
			active: true,
			id: '651-513-4541',
		},
		{
			name: 'Huevitos',
			price: '92',
			description: 'lorem ipsum',
			quantity: 12,
			active: true,
			id: '8465-942-01168',
		},
		{
			name: 'Manzana',
			price: '6',
			description: 'lorem ipsum',
			quantity: 50,
			active: true,
			id: '9820-653-48706',
		},
	],
	username: 'admin',
};

const GlobalContext = createContext(initialValue);

export { GlobalContext };
