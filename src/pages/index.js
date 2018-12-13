import React from 'react'
import { Link } from 'gatsby'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../js/actions/main'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi Dave</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

function mapStateToProps(state) {
	return {
		main: state.main
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, actions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
