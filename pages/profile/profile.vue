<template>
  <view>
    <!-- <u--image :src="1" width="80px" height="80px" shape="circle"></u--image>
    <u--text :text="profile"></u--text> -->
		<view>{{profile}}</view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(['profile']),
  },
};
</script>

<style>
</style>
