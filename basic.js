var limit = require('simple-rate-limiter');
//var request = limit(require('request')).to(5).per(3000);

// identify class with call to limit
const Output = require('./classes/Generic');

// instantiate class
const o = new Output();

// alias the call to a function through the limiter
const LogWrite = limit(o.LogWrite).to(5).per(3000);

for (let i = 0; i < 10; i++) {
  LogWrite('test output');
}
