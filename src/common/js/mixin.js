import {mapGetters} from 'vuex'
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playList'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playList)
  },
  activated() {
    this.handlePlaylist(this.playList)
  },
  watch: {
    playList(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      // 方法具体实现交给调用它的组件，如果组件没有实现 就抛出异常
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
