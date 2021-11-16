<template>
  <view>
    <view v-if="isLogin">
      <u--image
        :src="imgUrl"
        width="80px"
        height="80px"
        shape="circle"
      ></u--image>
      <u--text :text="nickName"></u--text>
      <u-button @click="logOut">退出登录</u-button>
    </view>
    <view v-else> <u-button @click="toLoginPage">去登录</u-button> </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      imgUrl: "",
      nickName: "",
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("LogOut").then(() => {
        uni.switchTab({
          url: "../index/index",
        });
      });
    },
    toLoginPage() {
      uni.redirectTo({
        url: "../login/login",
      });
    },
  },
  computed: {
    ...mapGetters(["profile", "isLogin"]),
  },
  onShow() {
    this.imgUrl = this.profile?.profile?.avatarUrl || "";
    this.nickName = this.profile?.profile?.nickname || "";
  },
};
</script>

<style>
</style>
