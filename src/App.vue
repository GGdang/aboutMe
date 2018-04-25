<template>
  <div id="app">
    <!--navbar start-->
    <nav class="custom-navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a @click="homeMove" class="navbar-brand" href="#"><i class="fas fa-chess-queen mr-2"></i>DANG</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" >
              <a  class="nav-link" :class="homeActive"  @click="homeMove"  href="#">Home</a>
            </li>
            <li class="nav-item" >
              <a  class="nav-link" :class="aboutActive" @click="aboutMove" href="#">About</a>
            </li>
            <li class="nav-item" >
              <a  class="nav-link" :class="skillsActive" @click="skillsMove" href="#">Skills</a>
            </li>
            <li class="nav-item" >
              <a  class="nav-link" :class="worksActive" @click="worksMove"  href="#" >Works</a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" :class="contactActive" @click="contactMove" href="#" >Contact</a>
            </li>
          </ul>
        </div>
    </nav>
    <!--navbar end-->
    <router-view @pushVal="getVal"/>
  </div>
</template>
<script>

export default {
  name: "App",
  data: function() {
    return {
      topValueApp:{
        about:0,
        skills:0,
        works:0,
        contact:0,
        scrollTop:0,
      },
    }
  },
  computed:{
    homeActive(){
      const self = this;
      let ans1 = self.topValueApp.scrollTop<self.topValueApp.about || self.topValueApp.scrollTop == 0;
      return {
        active: ans1
      }
    },
    aboutActive(){
      const self = this;
      let ans1 = self.topValueApp.scrollTop>=self.topValueApp.about;
      let ans2 = self.topValueApp.scrollTop<self.topValueApp.skills;
      return {
        active: ans1 && ans2 
      }
    },
    skillsActive(){
      const self = this;
      let ans1 = self.topValueApp.scrollTop>=self.topValueApp.skills;
      let ans2 = self.topValueApp.scrollTop<self.topValueApp.works;
      return {
        active:ans1 && ans2 
      }
    },
    worksActive(){
      const self = this;
      let ans1 = self.topValueApp.scrollTop>=self.topValueApp.works;
      let ans2 = self.topValueApp.scrollTop<self.topValueApp.contact;
      return {
        active:ans1 && ans2 
      }
    },
    contactActive(){
      const self = this;
      let ans1 = self.topValueApp.scrollTop>self.topValueApp.contact;
      return {
        active: ans1
      }
    },
  },
  created () {
    
  },
  methods: {
    getVal(newVal){
      let self=this;
      self.topValueApp = newVal;
    },
    homeMove(e){
      e.preventDefault();
      
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    },
    aboutMove(e){
      e.preventDefault();
      let self=this;
      window.scroll({
        top: self.topValueApp.about+5, 
        left: 0, 
        behavior: 'smooth' 
      });
    },
    skillsMove(e){
      e.preventDefault();
      let self=this;
      window.scroll({
        top: self.topValueApp.skills+5, 
        left: 0, 
        behavior: 'smooth' 
      });
    },
    worksMove(e){
      e.preventDefault();
      let self=this;
      window.scroll({
        top: self.topValueApp.works+5, 
        left: 0, 
        behavior: 'smooth' 
      });
    },
    contactMove(e){
      e.preventDefault();
      let self=this;
      window.scroll({
        top: self.topValueApp.contact+5, 
        left: 0, 
        behavior: 'smooth' 
      });
    },
  },
}
</script>

<style lang="scss">
@import url("../static/reset.css");
@import "~bootstrap/scss/bootstrap";
.custom-navbar{
  box-shadow: black 0 3px 3px;
}

</style>
