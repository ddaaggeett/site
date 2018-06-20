import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Icons from './Icons'
import NavButtons from './NavButtons'
var profileImage = require('../../assets/img/profile.jpg')
var twitterIcon = require('../../assets/img/twitter_a.png')
var softwareIcon = require('../../assets/img/github_c.png')

class WelcomeMat extends Component {

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
        );
    }
}

export default WelcomeMat
