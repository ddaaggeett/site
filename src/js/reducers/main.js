const initialState = {
	homeLinks: [],
	musicLinks: []
}

export default function main(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
				...state,
				homeLinks: action.data[0],
				musicLinks: action.data[1]
			}

		default:
			return state

	}
}
