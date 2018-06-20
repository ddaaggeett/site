import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { emailConfigs } from '../../../configs/emailConfigs'
import marked from 'marked'

class ClientPitch extends Component {

    constructor(props) {
        super(props)

        var io = require('socket.io-client')
        if (process.env.NODE_ENV === "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://'+emailConfigs.ddaaggeett+':1236')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1236')
        }
    }

    componentDidMount() {
        this.socket.emit('getMarkdown')
        this.socket.on('serveMarkdown', function(mdString) {
            document.getElementById('md').innerHTML = marked(mdString)
        })
    }

    render() {
        return (
            <div id="md" />
        )
    }
}

export default ClientPitch
