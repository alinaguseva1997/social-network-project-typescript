import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    // headers: {
    //     "API_KEY":"44a4436a-8c65-4104-a2a4-a52e873e68ac"
    // }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(id: number) {
       return instance.delete(`/follow/${id}`)
           .then(res => res.data)
    },
    follow(id: number) {
       return instance.post(`/follow/${id}`)
           .then(res => res.data)
    },
    getAuthUserData() {
       return instance.get(`/auth/me`)
           .then(res => res.data)
    },
    getUserProfile(userId: number) {
        return instance.get(`/profile/` + userId)
            .then(res => res.data)
    }
}
