var readlineSync = require('readline-sync');
var Jetty = require("jetty");
var five = require("johnny-five");
var Raspi = require("raspi-io");

var jetty = new Jetty(process.stdout);
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var imu = new five.IMU({
    controller: "MPU6050"
  });
  
  imu.on("change", function() {
    // Clear the screen
    jetty.clear();
    
    jetty.text(`
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
});
