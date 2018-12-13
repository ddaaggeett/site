import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Icons from './Icons'
import NavButtons from './NavButtons'
var profileImage = require('../images/profile.png')
var twitterIcon = require('../images/twitter.png')
var softwareIcon = require('../images/github.png')

export default class WelcomeMat extends Component {

        render() {
                return (
                        <div>
                                <MediaQuery maxWidth={991}>
                                        <h1 className="mobile_vertical" id="greet_mobile">hi, i'm <span style={{color: "blue"}}>Dave</span></h1>
                                        <div className="mobile_vertical">
                                                <img id="profile_pic_mobile" src={profileImage} alt="profile image" />
                                                <Icons />
                                        </div>
                                        <NavButtons />
                                </MediaQuery>

                                <MediaQuery minWidth={992}>
                                        <h1 className="mobile_vertical" id="greet">hi, i'm <span id="name">Dave</span></h1>
                                        <div className="mobile_vertical">
                                                <img className="media_item" id="profile_pic" src={profileImage} alt="profile image" />
                                                <Icons />
                                        </div>
                                        <NavButtons />
                                </MediaQuery>
                        </div>
                )
        }
}
