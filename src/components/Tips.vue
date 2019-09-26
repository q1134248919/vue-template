<template>
  <transition name="scale">
    <div class="hint">
      <button class="hint_wrap">
        <span v-text="msg"></span>
      </button>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
   ...mapGetters({
    msg: 'msg'
  })
},
mounted(){
}
}

</script>

<style   scoped lang="css">
  .hint{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000000;
    position: fixed;
  }
  .hint_wrap{
    top: 50%;
    left: 50%;
    max-width: 175px;
    position: absolute;
    border-radius: 7px;
    padding: 7px 15px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
  }
    .opa{
      background-color: rgba(0, 0, 0, .6);
    }
    span{
      color: #fff;
      line-height: 1.3;
      font-size: 15px;
    }
  
  .scale-enter-active, .scale-leave-active {
  transition: all .3s linear;
  }
  .scale-enter{
    transform: scale(.8);
    opacity: 0;
  }
  .scale-leave-active{
    transform: scale(.75);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
  transition: all .3s linear;
  opacity: 1;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
