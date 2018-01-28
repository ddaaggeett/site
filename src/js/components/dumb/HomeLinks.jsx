import React from 'react'
import ListItem from './ListItem'
import MediaQuery from 'react-responsive'

const HomeLinks = (props) => {

    console.log('listing = \n', props.list)

    return (
        <div>
            <MediaQuery maxWidth={991} >
                <ul className="center_item" className="home_links" id="quotes_mobile">
                    {props.list.map((item) => {
                        return (
                            <ListItem item={item} />
                        )
                    })}
                </ul>
            </MediaQuery>

            <MediaQuery minWidth={992} >
                <ul className="center_item" className="home_links" id="quotes">
                    {props.list.map((item) => {
                        return (
                            <ListItem item={item} />
                        )
                    })}
                </ul>
            </MediaQuery>
        </div>
    )
}

export default HomeLinks
