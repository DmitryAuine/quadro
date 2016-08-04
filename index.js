var five = require("johnny-five");
var Raspi = require("raspi-io");

var board = new five.Board({
  io: new Raspi()
});
var socketUser = null;

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


io.on('connection', function (socket) {
  socketUser = socket;
  console.log('User connected')
});

board.on("ready", function() {
  var imu = new five.IMU({
    controller: "MPU6050"
  });
  
  imu.on("change", function() {
    if(socketUser) {
      console.log('Emit')
      socketUser.emit('MPU6050', [this.gyro.roll, this.gyro.pitch, this.gyro.yaw]);
    }
  });
});

