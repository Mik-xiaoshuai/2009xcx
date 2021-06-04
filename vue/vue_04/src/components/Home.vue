<template>
  <el-container class="container">
    <el-header class="header">
      <p>在线管理预约管理后台</p>
       <!-- 退出按钮 -->
       <div class='header-right'>
        <el-row>
           <el-button type="danger" @click="loginout">退出</el-button>
        </el-row>
        </div>
        <!-- 退出按钮 -->
      
    </el-header>
    <el-container>
      <!-- 侧边栏开始 -->
      <el-aside width="200px" class="aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
          :uniqueOpened="true"
        >
          <!-- 第一层循环 -->
          <el-submenu :index="item.url" v-for="(item, key) in menulist" :key="key">
            <template #title>
              <i :class="iconlist[key]"></i>
              <span>{{ item.menu_name }}</span>
            </template>
            <!-- 第二层循环 -->
            <el-menu-item :index="item.url" v-for="(item, k) in item.sonmenu" :key="k">
              <template #title>
                <i :class="iconlist[key][k]"></i>
                <span>{{ item.menu_name }}</span>
              </template>
            </el-menu-item>
            <!-- 第二层循环 -->
          </el-submenu>
          <!-- 第一层循环 -->
        </el-menu>
      </el-aside>
      <!-- 侧边栏结束 -->
      <el-main class="main">
        <router-view></router-view>
       
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      menulist: [],
      iconlist:[
        ['el-icon-takeaway-box',['el-icon-cherry','el-icon-school']],
        ['el-icon-message',['el-icon-sunny','el-icon-sunny']],
        ['el-icon-lollipop',['el-icon-ice-cream-round','el-icon-ice-cream-round']],
      ]
    };
  },
  created() {
    this.getMenuList();
  },


  methods: {
    loginout() {
      //清除token
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    getMenuList() {
      //发起网络请求获取菜单数据
      this.$http
        .get("/menu")
        .then((res) => {
          console.log(res.data);


          if (res.data.code != "00000") {
            this.$message.error(res.data.msg);
          }


          this.menulist = res.data.data;
        })
        .catch((err) => {});
    },
  },
};
</script>


 
<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 260px;
  background-color: #b3c0d1;
  line-height: 60px;
  color: #fff;
}
.header p{
   margin-top:-1px;
   color: #fff;
}
.header .header-right {
    position: absolute;
    top: 12px;
    left: 1550px;
  }
.aside {
  height: 100%;
  background-color: #fff;
}


.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}


.el-aside {
  color: #333;
}
.main {
  position: relative;
  height: 100%;
  background-color: whitesmoke;
}


</style>