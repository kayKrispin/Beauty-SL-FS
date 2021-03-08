import axios from 'axios';
import { Moment } from 'moment';
import { API_URL } from './constants';

type Service = {
  id: number;
  time: string;
  timeToComplete: string;
};

type ServiceValues = {
  phone: string;
  instagramName: string;
  email: string;
  time: Moment | string | any;
  date: string | Date;
  service: Service | string;
  isAccepted: boolean;
};

const serviceApi = {
  async create(data: ServiceValues) {
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

  async update(data: { id: string | string[] | undefined }) {
    try {
      const result = await axios.patch(`${API_URL}/service/`, data);

      return result.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw err.response.data;
      }

      throw err;
    }
  },

  async delete(id: number) {
    try {
      const result = await axios.delete(`${API_URL}/service/?id=${id}`);

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
