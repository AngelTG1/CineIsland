import axios from "axios";

export const getUsers= async()=>{
    return await axios.get(`http://3.233.102.44/courses/getAll`)
  }

  export const createUser= async(user)=>{
    return await axios.post(`http://localhost:3000/cine/auth/signin`,user);
    }