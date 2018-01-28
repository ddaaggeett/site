const initialState = {
	homeLinks: []
}

export default function main(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
				...state,
				homeLinks: action.data[0]
			}

		default:
			return state

	}
}
