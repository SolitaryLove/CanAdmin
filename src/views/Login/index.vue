<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/rocket.png" class="people p-animtion" alt="people">
                <img src="../../assets/images/star.png" class="sphere s-animtion" alt="sphere">
            </div>
            <div class="right">
                <div class="form-wrappepr">
                    <div class="text">
                        <span>CanAdmin</span>
                        <span style="margin-left:5px;">▶</span>
                    </div>
                    <el-form>
                        <el-input v-model="formData.account" placeholder="Enter Email Or Number" clearable></el-input>
                        <el-input v-model="formData.password" placeholder="Password" type="password"
                            show-password></el-input>
                    </el-form>
                    <button @click="handleLogin">Sigin In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { usePersonStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const counterStore = usePersonStore();
const router = useRouter();

onMounted(() => {
    const socket = document.querySelector('.people') as HTMLImageElement;
    const star = document.querySelector('.sphere') as HTMLImageElement;
    socket.addEventListener('animationend', function () {
        this.classList.remove('p-animtion');
        this.classList.add('p-other-animtion');
    });
    star.addEventListener('animationend', function () {
        this.classList.remove('s-animtion');
        this.classList.add('s-other-animtion')
    });
});

const formData = reactive({
    account: '',
    password: ''
});

const handleLogin = () => {
    const { account, password } = formData;
    if (account === '' || password === '') {
        ElMessage({ message: '请输入账号或密码', type: 'warning', offset: 60 });
        return;
    }
    counterStore.login(formData).then((result) => {
        if (result === 'success') {
            router.push({ name: 'dashboard' });
            setTimeout(() => {
                ElMessage({ message: '登陆成功！', type: 'success', offset: 60 });
            }, 1100)
        } else {
            setTimeout(() => {
                ElMessage({ message: '登陆失败！', type: 'error', offset: 60 });
            }, 1100);
        }
    });
}

</script>

<style scoped>
.wrapper {
    margin: 0;
    min-height: 100vh;
    background-color: #abc6f8;
    background-image: radial-gradient(closest-side, rgb(255, 255, 255), rgba(235, 105, 78, 0)), radial-gradient(closest-side, rgb(250, 203, 203), rgba(243, 11, 164, 0)), radial-gradient(closest-side, rgb(237, 252, 202), rgba(254, 234, 131, 0)), radial-gradient(closest-side, rgb(197, 248, 241), rgba(170, 142, 245, 0)), radial-gradient(closest-side, rgb(206, 200, 243), rgba(248, 192, 147, 0));
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
}

.wrapper::after {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.content {
    width: 90vw;
    height: 90vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
}

.content .left {
    flex: 1;
    position: relative;
    overflow: hidden;
    width: 100%;
}

.content .left .sphere {
    position: absolute;
    left: 30%;
    top: 10%;
    width: 90%;
    z-index: 1;
    animation: sphereAnimation 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

.content .left .people {
    position: absolute;
    left: -50%;
    top: 20%;
    width: 70%;
    z-index: 2;
}

.content .left .p-animtion {
    animation: peopleAnimation 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

.content .left .p-other-animtion {
    animation-name: pOtherAnimation;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
}

.content .left .s-animtion {
    animation: sphereAnimation 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

.content .left .s-other-animtion {
    animation-name: sOtherAnimation;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
}

.content .right {
    flex: 1;
    position: relative;
    z-index: 12;
}

.content .right .top {
    width: 80%;
    margin-left: 38px;
    color: rgb(51, 52, 124);
    font-size: 20px;
    font-weight: 600;
    font-family: "Century Gothic", Times, serif;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0);
}

.content .right .top .top-item {
    float: left;
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-right: 10px;
    transition: 0.5s;
}

.content .right .top .top-item:hover {
    border: 0;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: -20px 10px 32px 1px rgba(182, 183, 185, 0.37);
}

.content .right .form-wrappepr {
    width: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: right;
}

.content .right .form-wrappepr .text {
    float: right;
    font-family: "Century Gothic", Times, serif;
    margin: 30px 0;
    font-size: 4vw;
    font-weight: bold;
}

::v-deep(.el-input) {
    margin: 10px 0;
}

::v-deep(.el-input__wrapper) {
    outline: none;
    height: 70px;
    box-sizing: border-box;
    border-radius: 10px;
    color: rgb(80, 82, 84);
    font-family: "Century Gothic", Times, serif;
    padding: 1px 2px;
    background-color: rgb(210, 223, 237);
}

::v-deep(.el-input__inner) {
    display: block;
    width: 100%;
    height: 100%;
    margin: 30px 0;
    border-radius: 10px;
    border: 0;
    background-color: rgb(210, 223, 237);
    outline: none;
    padding: 20px;
    box-sizing: border-box;
    font-size: 20px;
}

/* 显示隐藏密码 icon */
::v-deep(.el-input__suffix) {
    margin-right: 15px;
    transform: scale(1.5);
}

.content .right .form-wrappepr .tips {
    display: block;
    margin-top: -15px;
    color: rgb(160, 170, 182);
    cursor: pointer;
}

.content .right .form-wrappepr button {
    width: 100%;
    height: 50px;
    background-color: rgb(68, 96, 241);
    border-radius: 10px;
    font-size: 15px;
    color: #fff;
    border: 0;
    font-weight: 600;
    margin: 30px 0;
    cursor: pointer;
    box-shadow: -20px 28px 42px 0 rgba(62, 145, 255, 0.37);
    font-family: "Century Gothic", Times, serif;
}

.content .right .form-wrappepr .other-login .divider {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content .right .form-wrappepr .other-login .divider .line {
    display: inline-block;
    max-width: 35%;
    width: 35%;
    flex: 1;
    height: 1px;
    background-color: rgb(162, 172, 185);
}

.content .right .form-wrappepr .other-login .divider .divider-text {
    vertical-align: middle;
    margin: 0px 20px;
    display: inline-block;
    width: 150px;
    color: rgb(162, 172, 185);
    white-space: normal;
}

@keyframes movement {

    0%,
    100% {
        background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
        background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
    }

    25% {
        background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
        background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax, 40vmax 60vmax;
    }

    50% {
        background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax, 60vmax 60vmax, 80vmax 80vmax;
        background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax, 20vmax 10vmax, 30vmax 70vmax;
    }

    75% {
        background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 70vmax 70vmax;
        background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax, -10vmax 10vmax, 40vmax 60vmax;
    }
}

@keyframes sphereAnimation {
    0% {
        width: 10%;
    }

    100% {
        width: 90%;
        transform: translate(-30%, 5%);
    }
}

@keyframes peopleAnimation {
    0% {
        width: 40%;
    }

    100% {
        width: 70%;
        transform: translate(90%, -10%);
    }
}

@keyframes pOtherAnimation {
    0% {
        transform: translate(90%, -10%);
    }

    100% {
        transform: translate(90%, -15%);
    }
}

@keyframes sOtherAnimation {
    0% {
        transform: translate(-30%, 5%);
    }

    100% {
        transform: translate(-30%, 10%);
    }
}
</style>
