<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    if (!this.$store.getters.isLogin) {
      uni.redirectTo({
        url: "./pages/login/login",
      });
    }
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang='scss'>
/*每个页面公共css */
@import "@/uni_modules/uview-ui/index.scss";
</style>
