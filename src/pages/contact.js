import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Contact from '../components/Contact'
import '../style/main.css'

function mapStateToProps(state) {
	return {
		main: state.main
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, actions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
