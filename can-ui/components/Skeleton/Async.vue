<template>
    <div class="wraps">
        <div class="avatar skeleton">
            <img :src="data.avatar" alt="">
        </div>
        <div class="content">
            <div class="username skeleton">{{ data.username }}</div>
            <div class="description skeleton">{{ data.description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Data {
    data: {
        avatar: string,
        username: string,
        description: string,
    }
}
async function myFetch<T>(url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url);
            setTimeout(async () => {
                resolve(response.json());
            }, 3000);
        } catch (error) {
            console.log('Request Failed', error);
        }
    });
}
const { data } = await myFetch<Data>('./skeletonData.json');
</script>

<style scoped>
.wraps {
    width: 250px;
    height: 250px;
    border: 1px solid rgba(63, 63, 63, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    -webkit-box-shadow: 3px 4px 8px -4px rgba(204, 202, 204, 1);
    -moz-box-shadow: 3px 4px 8px -4px rgba(204, 202, 204, 1);
    box-shadow: 3px 4px 8px -4px rgba(204, 202, 204, 1);
}

.avatar {
    width: 220px;
    height: 180px;
}

.avatar>img {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.content {
    width: 220px;
    height: 50px;
    font-size: 12px;
    text-align: left;
}

.content .username {
    width: 70px;
    height: 20px;
    border-radius: 3px;
    margin-bottom: 5px;
    color: rgb(71, 71, 71);
}

.content .description {
    width: 220px;
    height: 20px;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>