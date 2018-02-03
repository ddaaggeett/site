const initialState = {
	homeLinks: [],
	musicLinks: [],
	projectLinks: [],
}

export default function main(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
				...state,
				homeLinks: action.data[0],
				musicLinks: action.data[1],
				projectLinks: action.data[2],
			}

		default:
			return state

	}
}
