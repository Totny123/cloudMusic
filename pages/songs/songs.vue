<template>
  <view>
    <u-list>
      <u-list-item v-for="(item, index) in songList" :key="index">
        <u-cell :title="item.name">
          <u-avatar
            slot="icon"
            shape="square"
            size="35"
            :src="item.al.picUrl"
            customStyle="margin: -3px 5px -3px 0"
          ></u-avatar>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
import { getSongDetail } from "@/api/user";

export default {
  data() {
    return {
      songList: [],
    };
  },
  methods: {},
  onLoad(params) {
    getSongDetail({ ids: params.ids }).then((songList) => {
      this.songList = songList.data.songs;
    });
  },
};
</script>

<style>
</style>
