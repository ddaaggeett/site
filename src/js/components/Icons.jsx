import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

var twitterIcon = require('../../assets/img/twitter_a.png')
var softwareIcon = require('../../assets/img/github_c.png')
var youtubeIcon = require('../../assets/img/youtube.png')

class Icons extends Component {

    render() {

        return (
            <div>

                <MediaQuery maxWidth={991}>
                    <div className="intro_line_item" id="icons_mobile">
                        <a className="icon_mobile"
                            href="https://www.youtube.com/channel/UCJxVVEGm6TFz68Y9Qe3IZtA"
                            target="_blank" >
                            <img src={youtubeIcon}
                                alt="software"
                                style={{width: 90, height: 45, marginLeft: -2}} /></a>
                        <a className="icon_mobile"
                            href="https://github.com/ddaaggeett"
                            target="_blank" >
                            <img src={softwareIcon}
                                alt="software"
                                style={{width: 45, height: 45, marginLeft: -2}} /></a>
                        <a className="icon_mobile"
                            href="https://twitter.com/ddaaggeett"
                            target="_blank" >
                            <img src={twitterIcon}
                                alt="social"
                                style={{width: 40, height: 40}} /></a>
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div className="intro_line_item" id="icons">
                        <a className="icon"
                            href="https://www.youtube.com/channel/UCJxVVEGm6TFz68Y9Qe3IZtA"
                            target="_blank" >
                            <img src={youtubeIcon}
                                alt="software"
                                style={{width: 90, height: 45, marginLeft: -2}} /></a>
                        <a className="icon"
                            href="https://github.com/ddaaggeett"
                            target="_blank" >
                            <img src={softwareIcon}
                                alt="software"
                                style={{width: 45, height: 45, marginLeft: -2}} /></a>
                        <a className="icon"
                            href="https://twitter.com/ddaaggeett"
                            target="_blank" >
                            <img src={twitterIcon}
                                alt="social"
                                style={{width: 40, height: 40}} /></a>
                    </div>
                </MediaQuery>

            </div>
        );
    }
}

export default Icons
