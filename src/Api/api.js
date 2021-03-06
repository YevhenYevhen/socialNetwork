import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '771d2004-d8cc-480d-966c-51c18ddd433d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const news = axios.create({
    baseURL: 'https://api.currentsapi.services/v1/'
})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 36) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`/follow/${id}`);
    },
    getProfile(id) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    },
    saveNewMainPic(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, captcha=null) {
        return instance.post('auth/login', { email, password, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}



export const newsAPI = {
    getNews() {
        return news.get('latest-news?apiKey=9n6IQGitws7rrEQJwB8qTHhuuXPp87quwmxrY8Kgwi-W8Wgf')
    },
    getOlderNews(pageNumber) {
        return news.get(`search?page_number=${pageNumber}&apiKey=9n6IQGitws7rrEQJwB8qTHhuuXPp87quwmxrY8Kgwi-W8Wgf`)
    }
}

