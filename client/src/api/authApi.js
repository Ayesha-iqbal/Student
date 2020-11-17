//API requests related to authentication
import axios from 'axios';

export const login = async (dto) =>{
  const result = await axios.post(`${process.env.URL}/auth/login`, dto);
  return result;
}
