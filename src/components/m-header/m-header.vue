<template>
  <div class="mHeader">
    <!-- <router-view/> -->
    <div class="title">BoomBoom</div>
  </div>
</template>

<script>
export default {
  name: 'mHeader'
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
.mHeader
  text-align: center
  position: relative
  height:44px
  line-height: 44px
  width: 160px
  margin: 5px auto
  text-align:center
  color: $color-theme
  font-size : $font-size-large
  .title
    bg-image('logo')
    background-repeat: no-repeat
    background-size: 30px 32px
</style>
