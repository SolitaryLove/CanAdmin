import Mock from 'mockjs';

// Mock.mock('/mock/getData', 'get', { code: 200, data: 'success' })

Mock.mock('/mock/user/login', 'post', (options) => {
    /* options
        - body
        - type
        - url */
    const body = JSON.parse(options.body);
    if (body.account == "admin" && body.password == "123456") {
        return { data: { token: 'success' } }
    } else {
        return { data: { token: 'failed' } }
    }
});

Mock.mock('/mock/user/logout', 'get', () => {
    return { data: { token: 'logout' } }
});

Mock.mock('/mock/user/getInfo', 'post', (options) => {
    const body = JSON.parse(options.body);
    if (body.token === 'success') {
        return {
            data: {
                username: 'Solitary',
                avatar: 'https://pic.616pic.com/ys_bnew_img/00/26/51/sUrv0qe1tk.jpg'
            }
        }
    } else {
        return { data: { message: 'none' } };
    }
});
