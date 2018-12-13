import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import WelcomeMat from './WelcomeMat'
import ProjectList from './ProjectList'
import GetSheetDone from 'get-sheet-done'
import { spreadsheet } from '../../config'

export default class Projects extends Component {

        constructor(props) {
                super(props)
        }

        componentWillMount() {
                GetSheetDone.raw(spreadsheet, 3)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setProjectLinksData(data)
                })
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
                )
        }
}
