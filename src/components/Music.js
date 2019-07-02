import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import WelcomeMat from './WelcomeMat'
import MusicList from './MusicList'
import GetSheetDone from 'get-sheet-done'
import { spreadsheet } from '../../config'

export default class Music extends Component {

        constructor(props) {
                super(props)
        }

        componentWillMount() {
                GetSheetDone.raw(spreadsheet, 2)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setMusicLinksData(data)
                })
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
