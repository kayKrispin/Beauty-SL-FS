import axios from 'axios';
import { API_URL } from '@/api/constants';

// SWR fetcher
export const swrFetcher = (url: string, config?: { [key: string]: any }) =>
  axios.get(`${API_URL}${url}`, config).then((res) => res.data);
