<template>
    <div class="wraps">
        <div class="avatar skeleton"></div>
        <div class="content">
            <div class="username skeleton"></div>
            <div class="description skeleton"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>
<style scoped>
.skeleton {
    background-image: linear-gradient(45deg,
            #f7f7f7 0%, #f7f7f7 40%,
            #c9c9c9 50%, #c9c9c9 55%,
            #f7f7f7 65%, #f7f7f7 100%);
    background-size: 400%;
    animation: skeleton 1s cubic-bezier(0.4, 0, 0.5, 1) infinite;
}

@keyframes skeleton {
    from {
        background-position: 100%;
    }

    to {
        background-position: 0%;
    }
}

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

.content {
    width: 220px;
    height: 50px;
}

.content .username {
    width: 70px;
    height: 20px;
    border-radius: 3px;
    margin-bottom: 5px;
}

.content .description {
    width: 220px;
    height: 20px;
    border-radius: 3px;
}
</style>
