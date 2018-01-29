import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'

import { PieChart, Pie, Tooltip } from 'recharts'
import { occupation } from './data'

import WelcomeMat from './WelcomeMat'
import HomeLinks from './dumb/HomeLinks'
import { emailConfigs } from '../../../configs/emailConfigs'

class Home extends Component {

    constructor(props) {
        super(props)

        var io = require('socket.io-client')
        if (process.env.NODE_ENV === "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://'+emailConfigs.ddaaggeett+':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }
    }

    componentWillMount() {
        this.socket.emit('getSpreadsheetData')
        this.socket.on('mountSpreadsheetData', function(data) {
            console.log('table data\n',data)
            this.handleDataRetrieval(data)
        }.bind(this))
    }

    handleDataRetrieval = function(data) {
        this.props.setSpreadsheetData(data)
    }

    render() {

        var videoWidth = 0
        var videoHeight = 0

        if(typeof window !== 'undefined') {
            videoWidth = document.documentElement.clientWidth
            videoHeight = videoWidth * 9 / 16
        }

        console.log('this.props.main.homeLinks\n',this.props.main.homeLinks)

        return (
            <div>

                <WelcomeMat />

                <div>
                <MediaQuery maxWidth={991}>
                <div className="mobile_vertical">
                    <h4 className="topic_mobile">to my fellow:</h4>
                    <iframe className="center_item" id="video" width={videoWidth} height={videoHeight} src="https://www.youtube.com/embed/XbOeO_frzvg" frameborder={0} allowfullscreen />
                    <iframe className="center_item" id="video" width={videoWidth} height={videoHeight} src="https://www.youtube.com/embed/Cf2nqmQIfxc" frameborder={0} allowfullscreen />
                    <HomeLinks list={this.props.main.homeLinks} />
                </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                <div className="mobile_vertical">
                    <h4 className="topic"><span id="warning">to my fellow :</span></h4>
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/XbOeO_frzvg" frameborder={0} allowfullscreen />
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/Cf2nqmQIfxc" frameborder={0} allowfullscreen />
                    <HomeLinks list={this.props.main.homeLinks} />
                </div>
                </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Home
