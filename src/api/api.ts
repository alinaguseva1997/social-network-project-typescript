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
}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(res => res.data)
    },
    updateUserStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status})
            .then(res => res.data)
    }
}

export const authAPI= {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}
