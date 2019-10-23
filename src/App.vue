<template>
  <div id="app">
 
    <router-view/>
    <loading   v-if="isShow"></loading>
    <tip v-if="msg"></tip>
  </div>
</template>

<script>
import Loading from './components/Loading'
import  Tip  from  './components/Tips'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data(){
    return {
       
    }
  },
  components:{
     Loading,
     Tip
  },
   computed: {
     ...mapGetters({
       isShow:'isShow',
       msg:'msg'
     })
   },
   mounted(){
     console.log(2);
   }
}
</script>

<style>
@import './assets/style/reset.css';

</style>
