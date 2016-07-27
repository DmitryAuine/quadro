var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});
var socketUser = null;

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
app.listen(80);

io.on('connection', function (socket) {
  socketUser = socket;
});

board.on("ready", function() {
  var imu = new five.IMU({
    controller: "MPU6050"
  });
  
  imu.on("change", function() {
    if(socketUser) {
      socketUser.emit('MPU6050', {
        temperature: this.temperature,
        accelerometer: this.accelerometer,
        gyro: this.gyro,
      });
    }
  });
});
