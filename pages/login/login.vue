<template>
  <view>
    <u--form :model="loginData">
      <u-form-item label="手机号码" prop="phone">
        <u--input v-model="loginData.phone"></u--input>
      </u-form-item>
      <u-form-item label="密码">
        <u--input v-model="loginData.password"></u--input>
      </u-form-item>
    </u--form>
    <u-button @click="submit">登录</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loginData: {},
      dict: { phone: "手机号码", password: "密码" },
    };
  },
  methods: {
    submit() {
      for (let key in this.dict) {
        if (!this.loginData[key]) {
          uni.showToast({
            title: `${this.dict[key]}不能为空！`,
            icon: "none",
          });
          return;
        }
      }
      this.$store.dispatch("Login", this.loginData).then(() => {
        uni.switchTab({
          url: "../index/index",
        });
      });
    },
  }
};
</script>