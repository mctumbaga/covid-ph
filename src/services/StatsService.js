import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://covid19.mathdro.id/api/countries',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getStats() {
    return apiClient.get('/philippines/');
  }
};
