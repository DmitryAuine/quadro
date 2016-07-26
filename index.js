var readlineSync = require('readline-sync');
var five = require("johnny-five");
var Raspi = require("raspi-io");

var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var imu = new five.IMU({
    controller: "MPU6050"
  });

  imu.on("change", function() {
    console.log("temperature", '\x1b[0G');
    console.log("  celsius      : ", this.temperature.celsius, '\x1b[0G');
    console.log("  fahrenheit   : ", this.temperature.fahrenheit, '\x1b[0G');
    console.log("  kelvin       : ", this.temperature.kelvin, '\x1b[0G');
    console.log("--------------------------------------", '\x1b[0G');
  
    console.log("accelerometer", '\x1b[0G');
    console.log("  x            : ", this.accelerometer.x, '\x1b[0G');
    console.log("  y            : ", this.accelerometer.y, '\x1b[0G');
    console.log("  z            : ", this.accelerometer.z, '\x1b[0G');
    console.log("  pitch        : ", this.accelerometer.pitch, '\x1b[0G');
    console.log("  roll         : ", this.accelerometer.roll, '\x1b[0G');
    console.log("  acceleration : ", this.accelerometer.acceleration, '\x1b[0G');
    console.log("  inclination  : ", this.accelerometer.inclination, '\x1b[0G');
    console.log("  orientation  : ", this.accelerometer.orientation, '\x1b[0G');
    console.log("--------------------------------------", '\x1b[0G');
  
    console.log("gyro", '\x1b[0G');
    console.log("  x            : ", this.gyro.x, '\x1b[0G');
    console.log("  y            : ", this.gyro.y, '\x1b[0G');
    console.log("  z            : ", this.gyro.z, '\x1b[0G');
    console.log("  pitch        : ", this.gyro.pitch, '\x1b[0G');
    console.log("  roll         : ", this.gyro.roll, '\x1b[0G');
    console.log("  yaw          : ", this.gyro.yaw, '\x1b[0G');
    console.log("  rate         : ", this.gyro.rate, '\x1b[0G');
    console.log("  isCalibrated : ", this.gyro.isCalibrated, '\x1b[0G');
    console.log("--------------------------------------");
  });
});
