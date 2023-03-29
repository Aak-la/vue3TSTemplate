import { defineStore } from "pinia";

export const songState = defineStore("song", {
  state: () => {
    return {
      musicState: false,
      palySong: "",
    };
  },
  getters: {},
  actions: {
    changeMusicState(value: boolean) {
      this.musicState = value;
    },
  },
});
