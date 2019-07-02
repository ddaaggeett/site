import React from 'react'
import MusicItem from './MusicItem'
import MediaQuery from 'react-responsive'

const MusicList = (props) => {
        return (
                <ul className="center_item" className="home_links">
                        {props.list.map((item, index) => {
                                return (
                                        <MusicItem item={item} key={index} />
                                )
                        })}
                </ul>
        )
}

export default MusicList
