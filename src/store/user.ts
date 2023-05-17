import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { login, logout, getInfo } from '@/api/user';

export const usePersonStore = defineStore('user', {
    state: () => {
        return {
            username: '',
            avatar: '',
            token: getToken(),
        }
    },
    getters: {

    },
    actions: {
        login(formData: any) {
            const { account, password } = formData;
            return new Promise((resolve, reject) => {
                login({ account: account.trim(), password: password })
                    .then(response => {
                        const { data } = response;
                        console.log(data)
                        this.token = data.token;
                        setToken(data.token);
                        setTimeout(() => {
                            resolve(this.token);
                        },2000);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
        getInfo() {
            return new Promise((resolve, reject) => {
                getInfo((this.token as string))
                    .then(response => {
                        const { data } = response;
                        if (!data) { reject('Verification failed, please Login again.'); }
                        this.username = data.username;
                        this.avatar = data.avatar;
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
        logout() {
            return new Promise<void>((resolve, reject) => {
                logout()
                    .then(() => {
                        removeToken();
                        this.$reset();
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
    }
});