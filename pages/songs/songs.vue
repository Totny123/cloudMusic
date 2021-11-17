<template>
  <view>
    <u-list style="height: 110vh">
      <u-list-item
        v-for="(item, index) in songList"
        :key="index"
        @click.native="playSong(item.id)"
      >
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
      ids: [],
      requestIds: [],
    };
  },
  methods: {
    getRequestIds() {
      this.requestIds = [];
      for (let i = 0; i < 20; i++) {
        this.requestIds.push(this.ids.pop());
      }
      return this.requestIds.join(",");
    },
    getSongDetail(ids) {
      getSongDetail({ ids }).then((res) => {
        this.songList.push(...res.data.songs);
      });
    },
    playSong(songId) {
      uni.navigateTo({
        url: `../music/music?songId=${songId}`,
      });
    },
  },
  onLoad(params) {
    this.ids = params.ids.split(",");
    this.getSongDetail(this.getRequestIds());
  },
  onReachBottom() {
    this.getSongDetail(this.getRequestIds());
  },
};
</script>

<style>
</style>
