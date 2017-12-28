// TODO: can we make this act more like request/rest.js?
// https://hackernoon.com/api-testing-with-jest-d1ab74005c0a
const getRules = (callback) => {
  return fetch('/api/v1/systems', {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(callback);
}

const getSpecies = (system, callback) => {
  return fetch(`/api/v1/species?system=${system}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(callback);
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

const parseJSON = (response) => {
  return response.json();
}

const Seeker = {
  getRules,
  getSpecies,
};

export default Seeker;
