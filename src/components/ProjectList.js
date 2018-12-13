import React from 'react'
import MusicItem from './MusicItem'
import MediaQuery from 'react-responsive'

const ProjectItem = (props) => {
        return (
                <div>
                        <MediaQuery maxWidth={991}>
                                <li><a href={props.item[1]} className="project_button_mobile"><p>{props.item[0]}</p></a></li>
                        </MediaQuery>

                        <MediaQuery minWidth={992}>
                                <li><a href={props.item[1]} className="project_button"><p>{props.item[0]}</p></a></li>
                        </MediaQuery>
                </div>
        )
}

const ProjectList = (props) => {
        return (
                <div id="projects">
                        <ul id="project_list">
                                {props.list.map((item, index) => {
                                        return (
                                                <ProjectItem item={item} key={index} />
                                        )
                                })}
                        </ul>
                        <span className="blinking-cursor">...</span>
                </div>
        )
}

export default ProjectList
