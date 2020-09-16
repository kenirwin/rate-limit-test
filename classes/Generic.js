const axios = require('axios').default;
// const axios = require('axios');

module.exports = class Generic {
  LogWrite(str) {
    console.log(str);
  }

  async AsyncLogWrite(str) {
    console.log(str);
  }

  async callUserApi() {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      console.log(response.data.results[0].name);
    } catch (error) {
      console.error(error);
    }
  }

  async sendGetRequest() {
    try {
      const resp = await axios.get('https://randomuser.me/api/');
      return resp.data;
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  async returnUserApi() {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
};
