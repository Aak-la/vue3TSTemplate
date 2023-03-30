import { defineStore } from "pinia";

export const songState = defineStore("song", {
  state: () => {
    return {
      musicState: false,
      SongHttp: undefined,
    };
  },
  getters: {},
  actions: {
    changeMusicState(value: boolean) {
      this.musicState = value;
    },
    setSongUrl(value: any) {
      this.SongHttp = value;
    },
  },
});
