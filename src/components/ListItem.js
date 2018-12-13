import React from 'react'
import MediaQuery from 'react-responsive'

const ListItem = (props) => {
        return (
                <div>
                        <MediaQuery maxWidth={991}>
                                <li>
                                        <a href={props.item[1]} target="_blank"><p className="quote_mobile">{props.item[0]}</p></a>
                                </li>
                        </MediaQuery>

                        <MediaQuery minWidth={992}>
                                <li>
                                        <a href={props.item[1]} target="_blank"><p className="quote">{props.item[0]}</p></a>
                                </li>
                        </MediaQuery>
                </div>
        )
}

export default ListItem
