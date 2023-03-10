import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL)
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get =  async (path, option={} ) => {
    const response1 = await request.get(path,option);
    return response1.data;
}

export default request;