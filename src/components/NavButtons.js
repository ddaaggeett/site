import React, { Component } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'

export default class NavButtons extends Component {
        render() {
                return (
                        <div>
                                <MediaQuery maxWidth={991}>
                                        <div className="mobile_vertical">
                                                <Link to={'/'}><div className="button_mobile"><p>home</p></div></Link>
                                                <Link to={'/projects'}><div className="button_mobile"><p>I do things</p></div></Link>
                                                <Link to={'/contact'}><div className="button_mobile"><p>contact me</p></div></Link>
                                        </div>
                                </MediaQuery>

                                <MediaQuery minWidth={992}>
                                        <div className="mobile_vertical">
                                                <Link to={'/'}><div className="button"><p>home</p></div></Link>
                                                <Link to={'/projects'}><div className="button"><p>I do things</p></div></Link>
                                                <Link to={'/contact'}><div className="button"><p>contact me</p></div></Link>
                                        </div>
                                </MediaQuery>
                        </div>
                )
        }
}
