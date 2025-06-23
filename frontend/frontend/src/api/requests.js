import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/adoption';

export const getAllRequests = async () => {
  const token = localStorage.getItem('token');
  const res = await axios.get(`${BASE_URL}/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateRequestStatus = async (id, status, observations = '') => {
  console.log('ID:', id);
console.log('Status:', status);
console.log('Observations:', observations);

    const token = localStorage.getItem('token');
  console.log(id);
  const res = await axios.put(`${BASE_URL}/updateStatus/${id}`, {
    status: status,
    observations
  }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
