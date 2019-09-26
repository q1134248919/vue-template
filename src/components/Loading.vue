<!--  -->
<template>
  <div class="loading_warpper">
        <div class="loading">
      <span class="squre1 squre"></span><span class="squre2 squre"></span>
       <span class="squre3 squre"></span><span class="squre4 squre"></span>
        <span class="squre5 squre"></span>
        <div class="font">拼命加载中...</div>
  </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: function() {},

  methods: {}
};
</script>
<style lang='css' scoped>
.loading_warpper {
  position: fixed;
   top: 0;
   left: 0;
   right:0;
   bottom: 0;
  background: #080915;
  box-shadow: 0px 0px 30px 1px #103136 inset;
}
.loading{
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 50%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    display: inline-block;
   

}
.squre{
    width: 25px;
    height: 7px;
    background: white;
    box-shadow: 2px 2px 3px 0px black;
    top: 50%;
    
    position: absolute;
}
.squre1{
  animation: move 1.35s ease infinite ;
  left:105px;
}
.squre2{
  animation: move 1.35s  .25s ease infinite ;
  left:95px;
}
.squre3{
  animation: move 1.35s  .5s ease infinite ;
 left: 85px;
}
.squre4{
  animation: move 1.35s .75s ease infinite;
  left: 75px;
}
.squre5{
  animation: move 1.35s 1s ease infinite;
  left:65px;
}
.font{
 color:#fff;
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translate(-50%);
}
@keyframes move{
 0% {
    opacity: 0.7;
}
50% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
80% {
    opacity: 1;
}
}
</style>