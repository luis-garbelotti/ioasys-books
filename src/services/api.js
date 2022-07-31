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

async function changePage(page, token) {
  const promise = await axios.get(`${BASE_URL}/books?page=${page}&amount=12`, createConfig(token));

  return promise.data;
}

async function getBookInfo(bookId, token) {
  const promise = await axios.get(`${BASE_URL}/books/${bookId}`, createConfig(token));

  return promise.data;
}

async function refreshToken(body) {
  const promise = await axios.post(`${BASE_URL}/auth/refresh-token`, body);

  return promise.headers;
}

const api = {
  signIn,
  getBooks,
  changePage,
  getBookInfo,
  refreshToken,
};

export default api;
