<template>
    <div>
        <!--头部-->
        <div class="top">
            <div>
                <img src="../assets/toux.png" alt="">
                <span>在线体检预约管理后台</span>
            </div>
            <div>
                <div class="top_img">
                    <img src="../assets/ren.png" alt="">
                    <span>Home</span>
                </div>
                <i style="font-size: 30px" class="el-icon-switch-button"></i>
            </div>

        </div>
        <!--主体-->
        <div class="body">
            <!--主体左部分-->
            <div class="body_left">
                    <el-menu
                            default-active="/page3"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            router
                            background-color="#fff"
                            text-color="#606266"
                            >
                        <el-submenu index="/page">
                            <template #title><i class="el-icon-s-unfold"></i>体验商品管理</template>
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <!-- <span>体验商品管理</span> -->
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/page3">体验套餐管理</el-menu-item>
                                <el-menu-item index="/page2">体验项管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="2">
                            <template #title><i class="el-icon-s-unfold"></i>体验信息管理</template>
                             <template slot="title">
                                <i class="el-icon-location"></i>
                                <!-- <span>体验信息管理</span> -->
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/page1">预约信息查询</el-menu-item>
                                <el-menu-item index="/page4">体验机构管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="3">
                            <template #title><i class="el-icon-s-unfold"></i>体验指标管理</template>
                             <template slot="title">
                                <i class="el-icon-location"></i>
                                <!-- <span>体验指标管理</span> -->
                            </template>
                            <el-menu-item-group>
                                <el-menu-item  index="/page5">标准指标管理</el-menu-item>
                                <el-menu-item index="/page6">机构指标管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                    </el-menu>
            </div>
            <!--主体右部分-->
            <div class="body_right">
                <div class="dingbu">
                    <span>体检项管理</span>
                </div>


                 <!-- 数据筛选 -->
                <div class="sx">
                    <div class="sx1">
                        <div class="sx1-1">
                            <span>数据筛选</span>
                        </div>
                        <div class="sx1-2">
                            <span>输入查询：</span><input type="text">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    body{
        background-color: dimgray;
    }
    .el-menu{
        border: 0;
    }
    /* 头部 */
    .top{
        width: 100%;
        height: 50px;
        background-color:rgba(50, 64, 87, 1);
        display: flex;
        justify-content: space-between;
    }

    .top img{
        width: 40px;
        border-radius: 50%;
        margin-top: 5px;
        margin-left: 10px;
    }

    .top .top_img{
        float: left;
    }

    .top i{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 15px;
        color: #fff;
    }

    .top span{
        color: #fff;
        float: right;
        margin-top: 15px;
        margin-left: 10px;
    }


    /* 主体左部分 */
    .body_left{
        width: 15%;
        height: 500px;
        background-color: #fff;
        float: left;
        border: 0;
    }

    .body_right{
        width:85%;
        height: 500px;
        background-color: #fff;
        float: right;
    }



    /* 主体右部分 */
    .body_right{
        width: 84.5%;
        height: 700px;
        background-color: #f5f7fa;
        position: relative;
        /* display: block; */
    }
    .body_right .dingbu{
        /* z-index: 1; */
        width: 98%;
        height: 40px;
        background-color: #fff;
        position: absolute;
        left: 10px;
    }
    .body_right .dingbu span{
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 7px;
    }


    /* 数据筛选 */
    .body_right .sx{
        width: 98%;
        height: 804px;
        background-color: #fff;
        /* z-index: 2; */
        position: absolute;
        top: 50px;
        left: 10px;
    }
    .body_right .sx .sx1{
        width: 98%;
        height: 122px;
        border: 1px solid rgb(233, 233, 233);
        position: absolute;
        left: 10px;
    }
    .body_right .sx .sx1 .sx1-1{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgb(233, 233, 233);
    }
    .body_right .sx .sx1 .sx1-1 span{
        font-size:13px ;
        color: #333333;
        position: absolute;
        line-height: 50px;
        left: 20px;

    }
</style>