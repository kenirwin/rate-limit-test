var limit = require('simple-rate-limiter');
const C = require('./classes/ConvertEmail');
const c = new C();

// wrap the .then() up as part of the limited function
const getId = limit(function (email) {
  c.getId(email).then((data) => {
    let result = c.resolveProperty('data.uid', data);
    console.log(result);
  });
})
  .to(2)
  .per(5000);

let arr = ['irwinkr', 'jerry.yarnetsky', 'aaron.shrimplin', 'qum@miamioh.edu'];

arr.forEach((email) => {
  getId(email);
});
