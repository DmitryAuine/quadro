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
    console.log(`
      [TEMPERATURE]
      celsius      : ${this.temperature.celsius}
      fahrenheit   : ${this.temperature.fahrenheit}
      kelvin       : ${this.temperature.kelvin}
      --------------------------------------
    
      [ACCELEROMETER]
      x            : ${this.accelerometer.x}
      y            : ${this.accelerometer.y}
      z            : ${this.accelerometer.z}
      pitch        : ${this.accelerometer.pitch}
      roll         : ${this.accelerometer.roll}
      acceleration : ${this.accelerometer.acceleration}
      inclination  : ${this.accelerometer.inclination}
      orientation  : ${this.accelerometer.orientation}
      --------------------------------------
    
      [GYRO]
      x            : ${this.gyro.x}
      y            : ${this.gyro.y}
      z            : ${this.gyro.z}
      pitch        : ${this.gyro.pitch}
      roll         : ${this.gyro.roll}
      yaw          : ${this.gyro.yaw}
      rate         : ${this.gyro.rate}
      isCalibrated : ${this.gyro.isCalibrated}
      --------------------------------------
  `);
});
