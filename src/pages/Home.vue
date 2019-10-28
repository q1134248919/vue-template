<!--  -->
<template>
  <div class='warpper'>
      
  </div>
</template>

<script>

// import  {getAccount} from '../server/api'

export default {
  name:'home',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  created:function(){
     this.showLoading();
     this.showMsg();
     console.log(4);
     console.log(5);
  },
  mounted:function(){
  //  getAccount().then(res=>{
  //    console.log(res);
  //  });
  console.log(2);
  },

  methods: {
      showLoading(){
     this.$store.dispatch('changeLoadingStatus');
      },
      showMsg(){
        this.$store.dispatch('changeMsgStatus','显示一条信息');
      },
      
  }
}

</script>
<style lang='css' scoped>
</style>