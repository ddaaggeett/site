import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WelcomeMat from './WelcomeMat'

class Music extends Component {

    render() {

        return (
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <h2 className="topic">just practice</h2>
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/c-WBWQrpjmU" frameborder={0} allowfullscreen />
                </div>
            </div>
        )
    }
}

export default Music