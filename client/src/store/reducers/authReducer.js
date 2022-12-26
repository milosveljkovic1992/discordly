const initialState = {
	userDetails: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DUMMY':
			return {
				...state,
			};
		default:
			return state;
	}
};
