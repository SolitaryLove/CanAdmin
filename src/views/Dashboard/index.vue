<!-- <template>
    <div class="wrapper">
        Dashboard
    </div>
</template>

<script setup lang='ts' name="Dashboard">

</script>
<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    border: 3px dashed skyblue;
    border-radius: 7px;
    padding: 7px;
    background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
}
</style>
 -->

<template>
    <div class="dashboard-container">
        <el-card class="header-card">
            <div>
                <div class="fl headL">
                    <div class="headImg">
                        <img :src="store.avatar">
                    </div>
                    <div class="headInfoTip">
                        <p class="firstChild">{{ store.username }}</p>
                        <p class="lastChild">Welcome</p>
                    </div>
                </div>
                <div class="fr" />
            </div>
        </el-card>
        <!-- 主要内容 -->
        <el-row type="flex" justify="space-between">
            <!-- 左侧内容 -->
            <el-col :span="13" style="padding-right: 26px">
                <!-- 工作日历 -->
                <el-card class="box-card">
                    <div slot="header" class="header headTit">
                        <span>工作日历</span>
                    </div>
                    <Calender />
                </el-card>
            </el-col>
            <!-- 右侧内容 -->
            <el-col :span="11">
                <el-card class="box-card">
                    <div slot="header" class="header headTit">
                        <span>个人信息</span>
                    </div>
                    <div class="sideNav">
                        内容待填充
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="header headTit">
                        <span>流程申请</span>
                    </div>
                    <div class="sideNav">
                        内容待填充
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="header headTit">
                        <span>绩效指数</span>
                    </div>
                    <div class="sideNav">
                        内容待填充
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
  
<script setup lang="ts">
import Calender from './components/Calender.vue';
import { usePersonStore } from '@/store/user';
const store = usePersonStore();
</script>
  
<style lang="scss" scoped>
::v-deep(.my-button) {
    color: #2c3e50;
}

::v-deep(.my-button span) {
    font-size: 12px;
}

::v-deep(.el-calendar-table td.is-today) {
    background-color: var(--sidebar-color);
}

.dashboard-container {
    margin: 10px;

    li {
        list-style: none;
    }

    .header-card {
        .headImg {
            float: left;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #999;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .headInfoTip {
            margin-left: 100px;

            p {
                padding: 0 0 5px;
                margin: 0;

                &.firstChild {
                    font-size: 26px;
                }

                &.lastChild {
                    font-size: 16px;
                    color: #7f8c8d;
                }
            }
        }
    }
}

.box-card {
    padding: 5px;
    margin-top: 20px;
    background-color: var(--sidebar-color);
    color: var(--text-color);

    .header {
        span {
            // color: #2c3e50;
            color: var(--text-color);
            font-size: 20px;
        }

        .item {
            // color: #97a8be;
            color: var(--text-color);
            float: right;
            padding: 3px 0;
        }
    }

    .headTit {
        span {
            border-bottom: 4px solid #8a97f8;
            padding-bottom: 10px;
        }
    }
}

.header-card {
    position: relative;
    background-color: var(--sidebar-color);
    color: var(--text-color);

    .header {
        position: absolute;
        right: 20px;
        top: 15px;
        z-index: 1;
    }
}

.advContent {
    background-color: var(--sidebar-color);
    color: var(--text-color);
    border-radius: 5px 5px 0px 0px;

    .title {
        font-size: 16px;
        padding: 20px;
        font-weight: bold;
        border-bottom: solid 1px #ccc;
    }

    .contentItem {
        padding: 0 30px;
        min-height: 350px;

        .item {
            display: flex;
            padding: 18px 0 10px;
            border-bottom: solid 1px #ccc;

            .col {
                color: #8a97f8;
            }

            img {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                margin-right: 10px;
            }

            p {
                padding: 0 0 8px;
            }
        }
    }
}

.noticeList {
    margin: 0;
    padding: 0;
}

.sideNav,
.sideLink {
    padding: 30px 0 12px;

    .sideBtn {
        padding: 16px 26px;
        font-size: 16px;
        margin: 10px 5px;
    }
}

.sideLink {
    text-align: center;

    .icon {
        display: inline-block;
        width: 76px;
        height: 76px;
        background: url("./../../assets/images/icon.png") no-repeat;
    }

    .iconGuide {
        background-position: 0 0;
    }

    .iconHelp {
        background-position: -224px 0;
    }

    .iconTechnology {
        background-position: -460px 0;
    }
}
</style>
  