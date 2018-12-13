import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import WelcomeMat from './WelcomeMat'
import HomeLinks from './HomeLinks'
import GetSheetDone from 'get-sheet-done'
import { spreadsheet } from '../../config'

export default class Home extends Component {

        constructor(props) {
                super(props)
        }

        componentWillMount() {
                GetSheetDone.raw(spreadsheet, 1)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setHomeLinksData(data)
                })
        }

        render() {
                var videoWidth = 0
                var videoHeight = 0

                if(typeof window !== 'undefined') {
                        videoWidth = document.documentElement.clientWidth
                        videoHeight = videoWidth * 9 / 16
                }

                return (
                        <div>
                                <WelcomeMat />
                                <div>
                                        <MediaQuery maxWidth={991}>
                                                <div className="mobile_vertical">
                                                        <HomeLinks list={this.props.main.homeLinks} />
                                                </div>
                                        </MediaQuery>

                                        <MediaQuery minWidth={992}>
                                                <div className="mobile_vertical">
                                                        <HomeLinks list={this.props.main.homeLinks} />
                                                </div>
                                        </MediaQuery>
                                </div>
                        </div>
                )
        }
}
