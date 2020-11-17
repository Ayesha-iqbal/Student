import Axios from "axios"
import axios from 'axios';


export const getUser = async  (dto,token) =>{
    const result =  await axios.get(`${process.env.URL}/user/${userId}`);
    return result;
}

export const patchUser = async (dto,userId) =>{
    const result = await axios.patch(`l${process.env.URL}/user/${userId}`,dto);
    return result;
}