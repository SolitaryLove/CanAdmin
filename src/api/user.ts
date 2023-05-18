import request from '@/utils/request';

export function login(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token: string) {
    return request({
        url: '/user/getInfo',
        method: 'post',
        data: {
            token,
        }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}

export function getAuthority(token: string) {
    return request({
        url: '/user/authority',
        method: 'post',
        data: {
            token,
        }
    })
}