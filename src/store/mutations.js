export default{
    changeLoadingStatus (state) {
        state.isShow = !state.isShow;
      },
      changeMsgStatus (state, msg) {
       
        state.msg = msg
        // 1秒后隐藏
        setTimeout(() => {
          state.msg = ''
        }, 1000)
      },
}