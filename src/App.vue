<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item class="menu-item" index="1">
        <router-link class="router-node" to="/personManager">人员管理</router-link>   
      </el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
      <el-menu-item class="menu-item" index="2">
        <router-link class="router-node" to="/taskManager">任务管理</router-link>  
      </el-menu-item>
      <el-menu-item class="menu-item" index="3">
        <router-link class="router-node" to="/orgManager">组织管理</router-link>  
      </el-menu-item>
      <el-menu-item class="menu-item" index="4">缴费报表</el-menu-item>
      <el-menu-item class="menu-item" index="5">入住率报表</el-menu-item>
    </el-menu>
    <router-view class="container"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.menu-item {
  width: 96px;
  padding: 0;
}
</style>
