import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { login, logout, getInfo, getAuthority } from '@/api/user';
import { UniversalRoutes } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';

export const usePersonStore = defineStore('user', {
    state: () => {
        return {
            username: '',
            avatar: '',
            token: getToken(),
            routes: UniversalRoutes,
        }
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
                        }, 2000);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
        getInfo() {
            return new Promise(async (resolve, reject) => {
                const { data } = await getInfo((this.token as string));
                if (!data) { reject('Verification failed, please Login again.'); }
                this.username = data.username;
                this.avatar = data.avatar;
                const authorityData = await getAuthority((this.token as string));
                resolve(authorityData.data.authority);
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
        setRoutes(DynamicRoutes: RouteRecordRaw[]) {
            this.routes = [...UniversalRoutes, ...DynamicRoutes];
        }
    }
});