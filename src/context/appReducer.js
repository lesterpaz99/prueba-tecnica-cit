const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return [...state, action.payload];
		case 'DELETE_PRODUCT':
			return state.filter((product) => product.id !== action.payload.id);
		case 'UPDATE_PRODUCT':
			const index = state.findIndex(
				(product) => product.id === action.payload.id
			);
			state.splice(index, 1, action.payload);
			return [...state];
		default:
			return state;
	}
};

export { appReducer };
