import axios from 'axios';

const API_URL = 'http://localhost:8080/api/system';

export const fetchSystemResources = async () => {
    try {
        const response = await axios.get(`${API_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error('Error fetching system resources:', error);
        throw error;
    }
};