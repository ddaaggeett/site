import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class MusicItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var videoWidth = 0
        var videoHeight = 0

        if(typeof window !== 'undefined') {
            videoWidth = document.documentElement.clientWidth
            videoHeight = videoWidth * 9 / 16
        }

        const srcEmbedString = "https://www.youtube.com/embed/".concat(this.props.item[0])

        return (
            <div>
                <MediaQuery maxWidth={991}>
                    <li>
                        <iframe className="center_item" id="video" width={videoWidth} height={videoHeight} src={srcEmbedString} frameBorder={0} allowFullScreen />
                    </li>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <li>
                        <iframe className="center_item" id="video" width={560} height={315} src={srcEmbedString} frameBorder={0} allowFullScreen />
                    </li>
                </MediaQuery>
            </div>
        )
    }
}

export default MusicItem
