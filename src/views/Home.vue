<template>
  <div class="container">
    <div class="same-width nav-part">
      <img src="@/assets/images/logo.png"/>
      <navbar></navbar>
    </div>
    <div class="full-width"></div>
    <div class="same-width header-part">
      <swiper :options="swiperOption">
        <swiper-slide><img src="@/assets/images/slider-img.jpg"></swiper-slide>
        <swiper-slide><img src="@/assets/images/slider.png"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
    </div>
    <div class="same-width learn-more">
      <div class="learn-1">
        <p class="become-blue">Perfect logic<span>All you want your website to do.</span></p>
        <img src="../assets/images/thumb1.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Odio, sapiente, est, suscipit maiores dolorum
        animi doloribus corporis ullam libero facere expedita
        amet temporibus hic alias ipsam aspernatur iusto
        voluptate dignissimos.</p>
        <polo-btn btnColor="grey"></polo-btn>
      </div>
      <div class="learn-2">
        <p class="become-blue">Complete Solution<span>A tool anything and everything you can think.</span></p>
        <img src="../assets/images/thumb2.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Odio, sapiente, est, suscipit maiores dolorum
        animi doloribus corporis ullam libero facere expedita
        amet temporibus hic alias ipsam aspernatur iusto
        voluptate dignissimos.</p>
        <polo-btn btnColor="grey"></polo-btn>
      </div>
      <div class="learn-3">
        <p class="become-blue">Uber culture<span>Fresh.Modern and ready for future.</span></p>
        <img src="../assets/images/thumb3.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Odio, sapiente, est, suscipit maiores dolorum
        animi doloribus corporis ullam libero facere expedita
        amet temporibus hic alias ipsam aspernatur iusto
        voluptate dignissimos.</p>
        <polo-btn btnColor="grey"></polo-btn>
      </div>
    </div>
    <div class="same-width information-part">
      <div class="information-1">
        <p class="information-header">Social Connection</p>
        <p class="information-body">At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium</p>
        <div class="social-img">
          <img src="../assets/images/social-rss.png">
          <img src="../assets/images/social-facebook.png">
          <img src="../assets/images/social-linkedin.png">
          <img src="../assets/images/social-youtube.png">
          <img src="../assets/images/social-twitter.png">
        </div>
        <p class="information-header">Newsletter</p>
        <p class="information-body">At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium</p>
        <input type="text" placeholder="your email address">
        <div class="btn">
          <polo-btn btnColor="blue"></polo-btn>
        </div>
      </div>
      <form action="#" class="information-2">
        <p class="information-header">Contact</p>
        <input type="text" placeholder="your name">
        <input type="text" placeholder="your email address">
        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
        <div class="btn">
          <polo-btn btnColor="blue"></polo-btn>
        </div>
      </form>
      <div class="information-3">
        <p class="information-header">News Updates</p>
        <div class="part-1">
          <img src="../assets/images/news-img1.jpg">
          <p class="information-body">Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor eiusmod tempor.</p>
        </div>
        <div class="border"></div>
        <div class="part-2">
          <img src="../assets/images/news-img2.jpg">
          <p class="information-body">Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor eiusmod tempor.</p>
        </div>
        <div class="border"></div>
        <div class="part-3">
          <img src="../assets/images/news-img3.jpg">
          <p class="information-body">Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor eiusmod tempor.</p>
        </div>
        <div class="border"></div>
        <polo-btn btnColor="blue"></polo-btn>
      </div>
    </div>
    <footer class="full-width footer-part">
      <div class="footer-words">
        <div>
          <p>Site Powered by Wordpress. Design and Developed by VIVROCKS.</p>
          <p><span class="padding-right">Home</span><span class="padding-right padding-left">About</span><span class="padding-right padding-left">Products</span><span class="padding-right padding-left">Services</span><span class="padding-left padding-left">Contact</span></p>
          <p><span class="padding-right">Privacy Policy</span><span class="padding-left">Terms of use</span></p>
        </div>
        <div>
          <p>Copyright 2010. Studio VIVROCKS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import PoloBtn from '../components/PoloBtn.vue'
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: { delay: 3000 },
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          dynamicBullets: false
        }
      }
    }
  },
  components: {
    Navbar,
    PoloBtn,
    Swiper,
    SwiperSlide
  }

}

</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    font-family: Helvetica, Georgia, Arial, sans-serif;
    box-sizing: border-box;
  }
  .same-width{
    margin: 0 auto;
    width: 1000px;
  }

  .nav-part{
    height: 100px;
    display: flex;
    justify-content: space-between;
    img{
      width: 240px;
      margin-top: 20px;
    }
  }

  .full-width{
    background: black;
    width: 100vw;
    height: 350px;
    margin-top: 15px;
  }

  .header-part{
    margin-top: -300px;
    h1{
      margin-top: 15px;
      text-align: center;
      font-size: 24px;
      padding-bottom: 25px;
      border-bottom: 1px solid #f4f4f4;
    }
    img {
      width: 100%;
    }
  }

  .learn-more{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 25px;
    .learn-1,.learn-2{
      margin-right: 20px;
    }
    .become-blue{
      font-size: 20px;
      color: slateblue;
      margin-top: 30px;
      margin-bottom: 20px;
      span{
        display: block;
        font-size: 13px;
        margin-top: 3px;
        color: grey;
      }
    }
    .become-blue+img{
      border: solid 1px #ddd;
      padding: 5px;
    }
    img+p{
      font-size: 13px;
      margin: 10px 0 20px 0;
      width: 300px;
    }
  }

  .information-part{
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      color: #ccc;
    }

    .information-header{
      font-size: 20px;
      border-bottom: 1px dashed #ddd;
      margin-bottom: 12px;
      padding-bottom: 12px;
    }
    .information-body{
      font-size: 13px;
    }
    .information-1,.information-2,.information-3{
      width: 300px;
      margin-right: 20px;
    }
    input{
      height: 30px;
      width: 100%;
      border:1px solid #ddd;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px;
    }
    textarea{
      border:1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      height: 140px;
      width: 100%;
    }
    .information-1{
      .information-body{
        margin-bottom: 10px;
      }
      .social-img{
        margin-bottom: 15px;
      }
    }
    .information-3{
      .border{
        border-bottom: 1px dashed #ddd;
      }
      .part-2,.part-3{
        margin-top: 10px;
      }
      .part-1,.part-2,.part-3{
        margin-bottom: 8px;
        height: 55px;
        img{
          float: left;
          width: 55px;
          border: solid 1px #ddd;
          padding: 3px;
        }
        p{
          float: right;
          margin-left: 10px;
          width: 235px;
        }
      }
      .border+div{
        margin-top: 10px;
      }
    }
  }

  .footer-part{
    height: 150px;
    margin-top: 40px;
    .footer-words{
      width: 1000px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      color: grey;
      font-size: 13px;
      div{
        margin-top: 25px;
        margin-left: -15px;
        p:nth-child(2){
          margin: 15px 0;
        }
        p{
          .padding-right{
            border-right: 2px solid grey;
            padding-right: 5px;
          }
          .padding-left{
            padding-left: 5px;
          }
        }
      }
    }
  }
</style>
