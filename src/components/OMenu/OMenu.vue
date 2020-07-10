<template>
  <el-menu
    router
    class="o-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="home">
      <template slot="title">
        <span>首页</span>
      </template>
      <el-menu-item index="/home" :route="{path:'/home'}">首页详情</el-menu-item>
      <!-- <el-menu-item index="/data/store/list" :route="{path:'/data/store/list'}">门店信息</el-menu-item> -->
    </el-submenu>
    <el-submenu index="goods">
      <template slot="title">
        <span>商品管理</span>
      </template>
      <el-menu-item index="/goods/list" :route="{path:'/goods/list'}">商品列表</el-menu-item>
      <!-- <el-menu-item index="/data/store/list" :route="{path:'/data/store/list'}">门店信息</el-menu-item> -->
    </el-submenu>
    <!-- <el-submenu index="job">
      <template slot="title">
        <span>招聘管理</span>
      </template>
      <el-menu-item index="/job/list" :route="{path:'/job/list'}">职位列表</el-menu-item>
    </el-submenu>-->
    <!-- <el-submenu index="liuyan">
      <template slot="title">
        <span>留言系统</span>
      </template>
      <el-menu-item index="/liuyan/list" :route="{path:'/liuyan/list'}">用户留言</el-menu-item>
    </el-submenu>-->
    <!-- <el-submenu index="tuwen">
      <template slot="title">
        <span>图文系统</span>
      </template>
      <el-menu-item index="/tuwen/list" :route="{path:'/tuwen/list'}">图文列表</el-menu-item>
    </el-submenu>-->

    <!-- <el-submenu index="goods">
      <template slot="title">
        <span>商品管理</span>
      </template>
      <el-menu-item index="/goods/list" :route="{path:'/goods/list'}">商品列表</el-menu-item>
    </el-submenu>-->
  </el-menu>
</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>