import axios from 'axios';

const api = axios.create({
  baseURL: '',
});
export const getDataRequest = async (url)=>{
  const response = await api.get(url);
  const results = await response.status === 200 ? await response.data : [];
  return results;
}

export const putRequest = async (url)=>{
  const response = await api.put(url);
  const results = await response.status === 200 ? await response.data : [];
  return results;
}

export const postRequest = async (url)=>{
  const response = await api.post(url);
  const results = await response.status === 200 ? await response.data : [];
  return results;
}

export const deleteRequest = async (url)=>{
  const response = await api.delete(url);
  const results = await response.status === 200 ? await response.data : [];
  return results;
}