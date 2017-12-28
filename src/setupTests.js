const fs = require('fs');

const parseAPI = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

global.fetch = (url) => new Promise((resolve, reject) => {
  // TODO: Should I change the mocks dir structure to match the version as a path?
  // i.e. /api/__mocks__/v1/endpoint.json?
  const endpoint = parseAPI(url);
  const d = fs.readFileSync(`${__dirname}/api/__mocks__/${endpoint}.json`, 'utf8');

  resolve({ status: 200, json: () => { return JSON.parse(d) } });
})
