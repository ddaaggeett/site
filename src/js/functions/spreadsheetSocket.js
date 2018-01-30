import client_data from '../../../configs/restaurant/clients'
var gsjson = require('google-spreadsheet-to-json');

export const spreadsheetSocket = (app) => {

    var ioServer = app.listen(process.env.PORT || 1235, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {
        socket.on('getSpreadsheetData', function() {

            var spreadsheet_document = client_data.clients.ddaaggeett.sheet

            gsjson({
                spreadsheetId: spreadsheet_document,
                listOnly: true,
                worksheet: [0,1]
            })
            .then(function(data) {
                socket.emit('mountSpreadsheetData', data)
            })
            .catch(function(err) {
                console.log(err.message);
                console.log(err.stack);
            });
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}
