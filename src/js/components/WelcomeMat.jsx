import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Icons from './Icons'
import NavButtons from './NavButtons'
import DoughnutChart from './DoughnutChart'
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
                        <img className="intro_line_item" id="profile_pic_mobile" src={profileImage} alt="profile image" />
                        <Icons />
                        <DoughnutChart />
                    </div>

                    <div className="mobile_vertical">
                        <h4 className="intro_mobile">i make my life for my children</h4>
                        <h4 className="intro_mobile">i am a shade tree mechanic</h4>
                    </div>

                    <NavButtons />
                </MediaQuery>


                <MediaQuery minWidth={992}>
                    <h1 id="greet">hi, i'm <span id="name">Dave</span></h1>
                    <img className="media_item" id="profile_pic" src={profileImage} alt="profile image" />
                    <Icons />
                    <DoughnutChart />

                    <div id="iam">
                        <h4 className="intro">i make my life for my children</h4>
                        <h4 className="intro">i am a shade tree mechanic</h4>
                    </div>

                    <NavButtons />

                </MediaQuery>



            </div>
        );
    }
}

export default WelcomeMat
