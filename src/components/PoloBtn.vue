<template>
  <div :class="`${btnColor}`">
    <!-- <span v-if="btnColor === 'grey'">
      <img src="@/assets/images/btn-sec.png" />
    </span>
    <span v-else>
      <img src="@/assets/images/news-img1.jpg" />
    </span> -->
    <img :src="imgSrc" />
    <p>Learn More</p>
  </div>
</template>

<script>
import greyBg from '@/assets/images/btn-sec.png'
import blueBg from '@/assets/images/btn-pri.png'

export default {
  btnColor: 'grey',
  props: {
    btnColor: String
  },
  computed: {
    imgSrc () {
      return this.btnColor === 'grey' ? greyBg : blueBg
    }
  }
}
</script>

<style lang="scss" scoped>
  div.grey{
    cursor: pointer;
    position: relative;
    p{
      position: absolute;
      top: 0px;
      left: 8px;
      font-size: 10px;
      color: #016999;
    }
  }

  div.blue{
    position: relative;
    cursor: pointer;
    p{
      position: absolute;
      top: -3px;
      left: 8px;
      font-size: 12px;
      color: white;
    }
  }

</style>
