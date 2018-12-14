import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import WelcomeMat from './WelcomeMat'

var io = require('socket.io-client')

const ContactForm = () => {


        return (
                <div>
                        <MediaQuery maxWidth={991}>
                                <form action="https://formspree.io/david.g.daggett@gmail.com" method="POST" name="contact_form" target="_top" className="form_mobile">
                                        <input className="form_item" type="text" name="_replyto" cols="35" id="email" tabIndex="4" placeholder="your email" />
                                        <textarea className="form_item" placeholder="hello, stranger ..." cols="35" rows="5" name="message" id="message"></textarea>
                                        <input className="button" className="form_item" type="submit" value="SEND" src="images/submit.png" border="0" alt="Submit Form" />
                                </form>
                        </MediaQuery>

                        <MediaQuery minWidth={992}>
                                <form action="https://formspree.io/david.g.daggett@gmail.com" method="POST" name="contact_form" target="_top" className="form_full">
                                        <input className="form_item" type="text" name="_replyto" cols="35" id="email" tabIndex="4" placeholder="your email" />
                                        <textarea className="form_item" placeholder="hello, stranger ..." cols="35" rows="5" name="message" id="message"></textarea>
                                        <input className="button" className="form_item" type="submit" value="SEND" src="images/submit.png" border="0" alt="Submit Form" />
                                </form>
                        </MediaQuery>
                </div>
        )
}

export default class Contact extends Component {

    render() {
        return(
            <div>

                <WelcomeMat />

                <div className="mobile_vertical">
                    <MediaQuery maxWidth={991}>
                        <h4 className="topic_mobile">contact me:</h4>
                    </MediaQuery>
                    <MediaQuery minWidth={992}>
                        <div id="projects">
                            <h2>contact me:</h2>
                        </div>
                    </MediaQuery>
                    <ContactForm />
                </div>

            </div>
        )
    }
}
