<template>
  <view>
    <u-list>
      <u-list-item
        v-for="(item, index) in playlist"
        :key="index"
        @click.native="getDetail(item.id)"
      >
        <u-cell :title="item.name">
          <u-avatar
            slot="icon"
            shape="square"
            size="35"
            :src="item.coverImgUrl"
            customStyle="margin: -3px 5px -3px 0"
          ></u-avatar>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
import { playlist, getPlayListDetail } from "@/api/user";
export default {
  data() {
    return {
      playlist: [],
    };
  },
  methods: {
    getDetail(id) {
      getPlayListDetail({ id }).then((res) => {
        let ids = [];
        res.data.playlist.trackIds.forEach((item) => {
          ids.push(item.id);
        });
        ids = ids.join(",");
        uni.navigateTo({
          url: `../songs/songs?ids=${ids}`,
        });
      });
    },
  },
  onShow() {
    if (this.$store.getters.isLogin) {
      playlist().then((res) => {
        this.playlist = res.data.playlist;
      });
    } else {
      this.playlist = [];
    }
  },
};
</script>

<style>
</style>
