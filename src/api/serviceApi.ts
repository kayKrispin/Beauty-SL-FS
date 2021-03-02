import { API_URL } from './constants';
import axios from 'axios';

const serviceApi = {

	async create(data) {
		try {
			const result = await axios.post(`${API_URL}/api/service/`, data);

			return result.data;
		} catch (err) {
			if (err.response && err.response.data) {
				throw err.response.data;
			}

			throw err;
		}
	}
};

export default serviceApi;
