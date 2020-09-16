var limit = require('simple-rate-limiter');
const G = require('./classes/Generic');
const g = new G();
// wrap the .then() up as part of the limited function
const SendGetRequest = limit(function () {
  g.sendGetRequest().then((data) => {
    console.log(data.results[0].name);
  });
})
  .to(3)
  .per(3000);

for (let i = 0; i < 10; i++) {
  SendGetRequest();
}
