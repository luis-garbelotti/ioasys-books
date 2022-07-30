import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

async function signIn(body) {
  const promise = await axios.post(`${BASE_URL}/auth/sign-in`, body);

  return promise;
}

async function getBooks(page, token) {
  const promise = await axios.get(`${BASE_URL}/books?page=${page}&amount=12`, createConfig(token));

  return promise.data;
}

async function nextPage(page, token) {
  const promise = await axios.get(`${BASE_URL}/books?page=${page}&amount=12`, createConfig(token));

  return promise.data;
}

const api = {
  signIn,
  getBooks,
  nextPage,
};

export default api;
