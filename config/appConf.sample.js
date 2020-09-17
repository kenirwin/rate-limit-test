module.exports = {
  convert: {
    method: 'get',
    url: '',
    requireEmailDomain: true,
    emailDomain: '@miamioh.edu',
    idPropertyPath: 'data.uid', //what part of the API response contains the desired Id/data
  },
};
