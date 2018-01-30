import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import WelcomeMat from './WelcomeMat'
import MusicList from './dumb/MusicList'
import { emailConfigs } from '../../../configs/emailConfigs'

class Music extends Component {

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
            this.handleDataRetrieval(data)
        }.bind(this))
    }

    handleDataRetrieval = function(data) {
        this.props.setSpreadsheetData(data)
    }

    render() {
        return (
            <div>
                <WelcomeMat />
                <div>
                    <MediaQuery maxWidth={991}>
                        <div className="mobile_vertical" >
                            <h2 className="topic_mobile">just practice</h2>
                            <MusicList list={this.props.main.musicLinks} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={992}>
                        <div className="mobile_vertical">
                            <h2 className="topic">just practice</h2>
                            <MusicList list={this.props.main.musicLinks} />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

export default Music
