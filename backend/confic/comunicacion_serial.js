const SerialPort = require('serialport');

module.exports = function (io) {
    const  readline = SerialPort.parsers.Readline;

    const myserial = new SerialPort('COM3', {
        baudRate: 9600
    })
    const parser = myserial.pipe(new readline({delimiter: '\r\n'}));
    io.on('connection' , function (socket) {
        console.log('a new socket connected');
    })

    parser.on('open', function () {
        console.log('puerto abierto');
    })
    parser.on('data', function (data) {
        io.emit('arduino:data', {
            value: data.toString()
        });
    });
    myserial.on('err', function (err) {
        console.log(err.message);
    });
};
