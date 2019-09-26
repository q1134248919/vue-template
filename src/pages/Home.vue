<!--  -->
<template>
  <div class='warpper'>
      111
  </div>
</template>

<script>
export default {
  name:'home',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted:function(){
    //  this.showLoading();
     this.showMsg();
  },

  methods: {
      showLoading(){
     this.$store.dispatch('changeLoadingStatus');
      },
      showMsg(){
        this.$store.dispatch('changeMsgStatus','显示一条信息');
      }
  }
}

</script>
<style lang='css' scoped>
</style>