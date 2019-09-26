export   const  changeLoadingStatus=({commit})=>{
            commit('changeLoadingStatus');
}
export   const  changeMsgStatus=({commit},msg)=>{
    commit('changeMsgStatus',msg);
}