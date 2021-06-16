import * as axios from 'axios';
import { unfollow } from '../redux/usersReducer';



const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '1183db7d-d392-4b78-97f2-533146b0b0ed'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})




export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 40) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)  
    },
    follow(id){
        return instance.post(`/follow/${id}`)
    }     
}






/* export const getUsers = (currentPage = 1, pageSize = 40) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
} */
//ADDED THIS ONE TO THE USERSAPI OBJECT TO MAKE IT COMPACT
