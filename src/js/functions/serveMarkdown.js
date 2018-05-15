import client_data from '../../../configs/restaurant/clients'
var fs = require('fs');

export const serveMarkdown = (app, title) => {

    var ioServer = app.listen(process.env.PORT || 1236, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {
        socket.on('getMarkdown', function() {

            var spreadsheet_document = client_data.clients.ddaaggeett.sheet

            const mdString = fs.readFile('src/assets/markdown/' + title + '.md', 'utf8', function(err, data) {
                if (err) throw err;
                socket.emit('serveMarkdown', data)
            });

        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });

}
