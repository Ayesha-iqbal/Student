import axios from 'axios';


export const getProject = async  (projectId) =>{
    const result =  await axios.get(`${process.env.URL}/project/${projectId}`);
    return result;
}

export const patchProject = async (dto,projectId) =>{
    const result = await axios.patch(`${process.env.URL}/project/${projectId}`,dto);
    return result;
}

export const createProject = async (dto,projectId) =>{
    const result = await axios.post(`${process.env.URL}/project/${projectId}`,dto);
    return result;
}