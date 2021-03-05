import axios from 'axios';
import { API_URL } from './constants';

const serviceApi = {
  async create(data: any) {
    try {
      const result = await axios.post(`${API_URL}/service/`, data);

      return result.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      }

      throw err;
    }
  },
};

export default serviceApi;
