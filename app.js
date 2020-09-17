var limit = require('simple-rate-limiter');
const Convert = require('./classes/ConvertEmail');
const convert = new Convert();

// wrap the .then() up as part of the limited function
const getId = limit(function (email) {
  convert.getId(email).then((data) => {
    let result = convert.resolveProperty('data.uid', data);
    console.log('Printed by the callback (not what we want): ', result);
  });
})
  .to(3)
  .per(3000);

let arr = ['irwinkr', 'jerry.yarnetsky', 'aaron.shrimplin', 'qum@miamioh.edu'];

arr.forEach((email) => {
  let result = getId(email);
  if (typeof result == 'string') {
    console.log('SUCCESS: ', result);
  }
});
