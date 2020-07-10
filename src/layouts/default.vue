<template>
  <div class="default">
    <div class="nav-box">
      <div class="logo-box">
        <div class="fl-box">
          <div class="title">益火房产</div>
          <!-- <ctos-logo></ctos-logo> -->
        </div>
      </div>
      <o-menu></o-menu>
    </div>
    <div class="view-panel">
      <el-header>
        <!-- <el-button
          type="text"
          v-if="userInfo.user_type == 1"
          @click="$router.push('/admin/user/list')"
        >设置</el-button> -->
        <el-button round @click="signOut">退出登录</el-button>
      </el-header>
      <nuxt class="view-box" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    // this.userInfo = JSON.parse(localStorage.userInfo);
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$store.commit("user/set", null);
      this.$store.commit("power/set", []);

      this.$router.replace("/login");
    }
  },
  computed: {
    userName() {
      if (this.$store.state.user.info) {
        return this.$store.state.user.info.name;
      } else {
        return null;
      }
    }
  },
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
