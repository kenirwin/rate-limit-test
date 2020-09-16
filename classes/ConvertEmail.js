const axios = require('axios').default;
const conf = require('../config/appConf');

module.exports = class ConvertEmail {
  async getId(email) {
    try {
      if (conf.convert.requireEmailDomain) {
        if (!email.includes(conf.convert.emailDomain)) {
          email += conf.convert.emailDomain;
        }
      }
      let url = conf.convert.url + email;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  /* 
    resolveProperty: converts a string into an object property path.
    copied with gratitude from user 'speigg' on StackOverflow :
    https://stackoverflow.com/a/22129960/4811839
  */
  resolveProperty(path, obj = self, separator = '.') {
    var properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
  }
};
