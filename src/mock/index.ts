import Mock from 'mockjs';

// Mock.mock('/mock/getData', 'get', { code: 200, data: 'success' })

const aacountArr = ['admin', 'test'];

const atop = new Map();
atop.set('admin', '123456');
atop.set('test', 'abcdefg')

Mock.mock('/mock/user/login', 'post', (options) => {
    /* options
        - body
        - type
        - url */
    /* const body = JSON.parse(options.body);
    if (body.account == "admin" && body.password == "123456") {
        return { data: { token: 'success' } }
    } else {
        return { data: { token: 'failed' } }
    } */
    const { account, password } = JSON.parse(options.body);
    if (aacountArr.includes(account) && atop.get(account) === password) {
        switch (account) {
            case 'admin':
                return { data: { token: 'admin' } }
            case 'test':
                return { data: { token: 'test' } }
        }
    } else {
        return { data: { token: 'failed' } }
    }
});

Mock.mock('/mock/user/logout', 'get', () => {
    return { data: { token: 'logout' } }
});

Mock.mock('/mock/user/getInfo', 'post', (options) => {
    const body = JSON.parse(options.body);
    if (body.token === 'admin') {
        return {
            data: {
                username: 'admin',
                avatar: 'https://pic.616pic.com/ys_bnew_img/00/26/51/sUrv0qe1tk.jpg'
            }
        }
    } else if (body.token === 'test') {
        return {
            data: {
                username: 'test',
                avatar: 'https://i.pinimg.com/originals/1d/18/fb/1d18fb013c28c42e466d07f3fb0cabda.jpg'
            }
        }
    } else {
        return { data: { message: 'none' } };
    }
});

Mock.mock('/mock/user/authority', 'post', (options) => {
    const body = JSON.parse(options.body);
    switch (body.token) {
        case 'admin':
            return { data: { authority: ['test'] } };
        case 'test':
            return { data: { authority: [] } };
    }
});