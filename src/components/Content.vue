<template>
  <div class="content">
    <!--header start parallax-->
    <header class="head">
      <div class="d-flex align-items-center flex-column justify-content-center h-100">
        <h1 class="text-white display-3">Dang-hao</h1>
        <p class="h1 text-white display-3">Website</p>
        <hr class="hr-line bg-dark">
        <p class="text-white h4">Welcome To My Website</p>
      </div>
    </header>
    <!--header end-->
    <article class="main">
      <!--about start-->
      <section  class="about py-5">
        <div id="about-animate" class="container custom-animate py-3" :class="cusAboutAnimate">
          <div class="row flex-column align-items-center text-center ">
            <h2 class="h1">About Me</h2>
            <hr class="hr-line bg-info my-4">
            <p>歡迎來到我的個人網站</p>
            <p>我在3D動畫製作經歷了5年多的經驗，參與了許多專案。</p>
            <p>目前踏入網頁前端製作，期許自己能越來越進步。</p>
          </div>
        </div>
      </section>
      <!--about end-->
      <!--skills start-->
      <section class="skills py-5">
        <div class="container custom-animate py-3" :class="cusSkillsAnimate">
          <div class="row flex-column align-items-center">
            <h2 class="h1 mb-3">Skills</h2>
            <hr class="hr-line my-4">
            <div class="container-fluid ">
              <div class="row justify-content-center align-items-center" >
                <div class="mb-3 mr-4 tool d-flex justify-content-center align-items-center">
                  <i class="fas fa-wrench fa-5x ml-2"></i>
                </div>
                <ul class="h5 text-secondary">
                  <li v-for="item in skillsItems">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--skills end-->
      <!--works start-->
      <section class="works py-5">
        <div class="container custom-animate" :class="cusWorksAnimate">
          <h2 class="h1 text-white text-center my-3">Works</h2>
          <hr class="hr-line my-4">
          <ul class="row">
            <li v-for="item,num in works" class="col-md-4 col-sm-6 col-12 my-3">
              <div class="work-tooltip text-white p-3">
                <h6 v-for="item1 in works[num].tec">{{item1}}</h6>
              </div>
              <div class="works-box">
                <a :href="item.link">
                  <img class="img-fluid" :src="item.img" alt="works">
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!--works end-->
      <!--contact start-->
      <section class="contact d-flex flex-column justify-content-center align-items-center">
        <div class="container d-flex flex-column justify-content-center align-items-center text-center p-5 custom-contact-animate" :class="cusContactAnimate">
          <h2 class="h1 mb-3 py-3">Contact</h2>
          <hr class="hr-line my-4">
          <div class="contact-img ">
            <img class="img-fluid my-4" src="../../static/images/myself.jpg" alt="">
          </div>
          <div>
            <p class="h5 my-3"><i class="fas fa-user-circle mr-2"></i><b>陳耀豪</b></p>
            <p class="h5 my-3"><i class="fas fa-envelope-square mr-2"></i>ghost7021.hao@gmail.com</p>
            <p class="h5 my-3"><i class="fas fa-phone-volume mr-2"></i>0935-760-191</p>
          </div>
        </div>
      </section>
      <!--contact end-->
      <!--footer start-->
      <footer class="text-center text-white py-5">
        <p class="h6 mb-0">Copyright © A mon All rights reserved</p>
      </footer>
      <!--footer end-->
    </article>
  </div>  
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      skillsItems: [
        "photoshop 基本操作",
        "HTML + CSS 製作 RWD 頁面架構",
        "Bootstrap4 製作頁面 & RWD 頁面",
        "JavaScript 基本操作",
        "jQuery 製作網頁動態效果",
        "SCSS 管理 CSS",
        "Vue.js 基本語法",
        "Vue-cli & Vue-router 製作網頁",
        "Git & GitHub 做版本控管"
      ],
      works: [
        {
          img: "../../static/images/bootstrap4_001.jpg",
          link:'https://ggdang.github.io/Bootstrap4_test1/',
          tec: [
            ' 1. Bootstarp4','2. jQuery','3. Vue.js'
          ]
        },
        {
          img: "../../static/images/bootstrap4_002.jpg",
          link:'https://ggdang.github.io/Bootstrap4_test2/',
          tec: [
            ' 1. Bootstarp4'
          ]
        },
        {
          img: "../../static/images/bootstrap4_003.jpg",
          link:'https://ggdang.github.io/Bootstrap4_test3/',
          tec: [
            ' 1. Bootstarp4'
          ]
        },
        {
          img: "../../static/images/bootstrap4_004.jpg",
          link:'https://ggdang.github.io/Bootstrap4_test4/',
          tec: [
            ' 1. Bootstarp4','2. jQuery','3. Chart.js'
          ]
        },
        {
          img: "../../static/images/html_css_001.jpg",
          link:'https://ggdang.github.io/html_css/',
          tec: [
            ' 1. HTML','2. CSS'
          ]
        },
        {
          img: "../../static/images/google_map_api.jpg",
          link:'https://ggdang.github.io/apiTest/',
          tec: [
            ' 1. javascript','2. jQuery','3. ajax','4. Vue.js'
          ]
        },
      ],
      topValue:{
        about:0,
        skills:0,
        works:0,
        contact:0,
        scrollTop:0,
      }
    };
  },
  methods:{
    pushVal(){
      console.log('scroll');
      this.$emit('pushVal',this.topValue);
    }
  },
  computed:{
    cusAboutAnimate(){
      const self = this;
        return {
          'custom-fadein':  (self.topValue.about-self.topValue.scrollTop)<250 ,
        };
      
    },
    cusSkillsAnimate(){
      const self = this;
        return {
          'custom-fadein':(self.topValue.skills-self.topValue.scrollTop)<250,
        }
    },
    cusWorksAnimate(){
      const self = this;
        return {
          'custom-fadein':(self.topValue.works-self.topValue.scrollTop)<250,
        }
    },
    cusContactAnimate(){
      const self = this;
        return {
          'custom-fadein':(self.topValue.contact-self.topValue.scrollTop)<350,
        }
    },
  },
  created(){
  },
  mounted(){
    const self = this;
      /* self.topValue.about = document.querySelector('.about').offsetTop; */
      self.topValue.about = $('.about').offset().top;
      self.topValue.skills = $('.skills').offset().top;
      self.topValue.works = $('.works').offset().top;
      self.topValue.contact = $('.contact').offset().top;
    window.addEventListener('resize',function(){ 
      self.topValue.about = $('.about').offset().top;
      self.topValue.skills = $('.skills').offset().top;
      self.topValue.works = $('.works').offset().top;
      self.topValue.contact = $('.contact').offset().top;
    })
    window.addEventListener('scroll',function(){
      self.topValue.scrollTop = $(window).scrollTop();
      self.$emit('pushVal',self.topValue);
      })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$orgin-color: rgb(247, 89, 27);
$toolcolor: rgba(0, 0, 0, 0.87);
.custom-animate{
  transition: all 1s;
  position: relative;
  top: 200px;
  opacity: 0;
}
.custom-contact-animate{
  transition: all 1s;
  position: relative;
  top: -200px;
  opacity: 0;
}
.custom-fadein{
  opacity: 1;
  top: 0px;
}
@mixin breakpoint($point){
  @if $point == pad {
    @media screen and (max-width:768px){
      @content
    }
  } @else if $point == phone {
    @media screen and (max-width:576px){
      @content
    }
  }
}
.hr-line {
  height: 3px;
  width: 200px;
}
.content {
  margin-top: 56px;
  .head {
    height: 80vh;
    background-image: url("../../static/images/head_bg.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    div > p,
    h1 {
      font-weight: 500 !important;
    }
    .hr-line {
      background-color: rgb(255, 102, 0);
    }
  }
  .main {
    .about {
      background-color: rgb(238, 221, 185);
      position: relative;
    }
    .skills {
      hr {
        background-color: $orgin-color;
      }
      .tool {
        position: relative;
        z-index: 1;
        color: white;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: $orgin-color;
        transition: all 0.6s;
      &:hover {
        transform: scale(1.4, 1.4) rotate(90deg);
        color: $orgin-color;
        background-color: white;
        }
      }

      ul {
        position: relative;
        z-index: 2;
        li {
          margin-bottom: 1rem;
        }
        li:hover {
          color: red;
        }
      }
    }
    .works {
      background-image: url("../../static/images/works_bg.jpg");
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      hr {
        background-color: $orgin-color;
      }
      ul {
        list-style: none;
        li {
        &:hover {
            .work-tooltip {
              visibility: visible;
            }
          }
          position: relative;
          .work-tooltip {
            visibility: hidden;
            width: 300px;
            z-index: 2;
            bottom: 110%;
            position: absolute;
            left: 50%;
            background-color: $toolcolor;
            margin-left: -150px;
          &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -20px;
            border-width: 20px;
            border-style: solid;
            border-color: $toolcolor transparent transparent transparent;
            }
          }
          .works-box {
            transition: all 1s;
          &:hover {
            transform: scale(1.3);
            }
          }
        }
      }
    }
    .contact {
      height: 100vh;
      hr {
        background-color: $orgin-color;
      }
      p{
        font-size: 2rem;
      }
      .contact-img {
        img {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px rgb(105, 105, 105) solid;
        }
      }
      @include breakpoint(pad){
        p{
          font-size: 1.8rem;
        }
      }
      @include breakpoint(phone){
        p{
          font-size: 1.6rem;
        }
      }
    }
    footer {
      height: 100px;
      background-attachment: fixed;
      background-size: cover;
      background-position: center top;
      background-image: url("../../static/images/footer_bg.jpg");
    }
  }
}
</style>
