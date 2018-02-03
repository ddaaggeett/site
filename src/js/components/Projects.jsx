import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import { Link} from 'react-router-dom'
import WelcomeMat from './WelcomeMat'
import ProjectList from './dumb/ProjectList'
import { emailConfigs } from '../../../configs/emailConfigs'

class Projects extends Component {

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
                <div className="mobile_vertical">
                    <h4 className="topic_mobile">ongoing projects:</h4>
                    <ProjectList list={this.props.main.projectLinks} />
                </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                <div className="mobile_vertical">
                    <div id="projects">
                        <h2>ongoing projects</h2>
                    </div>
                    <ProjectList list={this.props.main.projectLinks} />
                </div>
                </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Projects
