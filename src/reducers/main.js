const initialState = {
	homeLinks: [],
	musicLinks: [],
	projectLinks: [],
}

export default function main(state = initialState, action) {
	switch(action.type) {

		case 'SET_HOME_LINKS_DATA':
			return {
				...state,
				homeLinks: action.data,
			}

		case 'SET_MUSIC_LINKS_DATA':
			return {
				...state,
				musicLinks: action.data,
			}

		case 'SET_PROJECT_LINKS_DATA':
			return {
				...state,
				projectLinks: action.data,
			}

		default:
			return state

	}
}
