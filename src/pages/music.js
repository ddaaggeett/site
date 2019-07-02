import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Music from '../components/Music'
import '../style/main.css'

function mapStateToProps(state) {
	return {
		main: state.main
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, actions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Music)
