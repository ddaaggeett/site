import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import { Link} from 'react-router-dom'
import WelcomeMat from './WelcomeMat'

class Projects extends Component {

    render() {
        return (
            <div>

                <WelcomeMat />

                <div>
                <MediaQuery maxWidth={991}>
                <div className="mobile_vertical">
                    <h4 className="topic_mobile">ongoing projects:</h4>
                    <div id="projects">
                        <a href="http://www.blooprint.xyz" className='project_button'><p>Blooprint</p></a>
                        <Link to={'/music'}><div className="project_button"><p>music</p></div></Link>
                        <a href="http://www.uppermonroeavenue.org/" className='project_button'><p>UMNA</p></a>
                        <Link to={'/study'}><div className="project_button"><p>self study</p></div></Link>
                        <span className="blinking-cursor">...</span>
                    </div>
                </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                <div id="center_content">
                    <div id="projects">
                        <h2>ongoing projects</h2>
                    </div>
                    <div id="projects">
                        <a href="http://www.blooprint.xyz" className='project_button'><p>Blooprint</p></a>
                        <Link to={'/music'}><div className="project_button"><p>music</p></div></Link>
                        <a href="http://www.uppermonroeavenue.org/" className='project_button'><p>UMNA</p></a>
                        <Link to={'/study'}><div className="project_button"><p>self study</p></div></Link>
                        <span className="blinking-cursor">...</span>
                    </div>
                </div>
                </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Projects
