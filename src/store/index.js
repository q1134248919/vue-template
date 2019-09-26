import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

export default new Vuex.Store({
     state:{
        isShow:false,
        msg:''
     },
     getters,
     actions,
     mutations
})
