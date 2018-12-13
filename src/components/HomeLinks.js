import React from 'react'
import ListItem from './ListItem'
import MediaQuery from 'react-responsive'

const mapper = (props) => {
        return (
                props.list.map((item, index) => {
                        return (
                                <ListItem item={item} key={index} />
                        )
                })
        )
}

const HomeLinks = (props) => {

        return (
                <div>
                        <MediaQuery maxWidth={991} >
                                <ul className="center_item" className="home_links" id="quotes_mobile">
                                        { mapper(props) }
                                </ul>
                        </MediaQuery>

                        <MediaQuery minWidth={992} >
                                <ul className="center_item" className="home_links" id="quotes">
                                        { mapper(props) }
                                </ul>
                        </MediaQuery>
                </div>
        )
}

export default HomeLinks
