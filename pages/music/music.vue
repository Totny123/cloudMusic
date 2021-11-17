<template>
  <view> <audio style="text-align: left" :src="songUrl" controls></audio></view>
</template>

<script>
import { getSongUrl } from "@/api/user";
export default {
  data() {
    return {
      songId: "",
      songUrl: "",
    };
  },
  methods: {
    getSongUrl(id) {
      getSongUrl({ id }).then((res) => {
        console.log(res);
        this.songUrl = res.data.data[0].url;
        console.log(this.songUrl);
      });
    },
  },
  onLoad(params) {
    this.songId = params.songId;
    this.getSongUrl(this.songId);
  },
};
</script>

<style>
</style>
