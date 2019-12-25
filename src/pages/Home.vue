<template>
  <div class="home">
    <div class="chatroom-con">
      <h3>线上交友平台</h3>
      <div id="responseText" class="mes-con">
        <p v-for="item in mesAll" :key="item.index">
          {{item}}
        </p>
      </div>
      <div class="bottom-con">
        <input class="input-li" type="text" v-model="mes">
        <div class="btn btn-send" @click="send()">发送消息</div>
        <div class="btn btn-clear" @click='clearMes()'>清空聊天记录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      socket: null,
      mes: "", // 消息输入框
      mesAll: [], // 所有的消息记录
      ranDomNick: [
        "半藏森林",
        "刘阳",
        "小璐嫂子",
        "PG_One",
        "吴秀波",
        "陶喆",
        "文章",
        "安宰贤",
        "陈翔",
        "成龙大哥",
        "蒋劲夫"
      ] // 随机昵称
    };
  },
  components: {},
  methods: {
    send() {
      if (!window.WebSocket) {
        return;
      }
      // 以下是WebSocket 构造函数的原型中存在的一些常量，可通过 WebSocket.readyState 对照上述常量判断 WebSocket 连接 当前所处的状态
      // WebSocket.OPEN: 1,WebSocket.CONNECTING: 0,WebSocket.CLOSING: 2,WebSocket.CLOSED: 3
      if (this.socket.readyState == WebSocket.OPEN) {
        this.socket.send(this.mes);
      } else {
        alert("连接没有开启.");
      }
    },
    reConnect() {
      let ranDomIndex = Math.floor(Math.random() * this.ranDomNick.length);
      const nick = this.ranDomNick[ranDomIndex];
      if (!window.WebSocket) {
        window.WebSocket = window.MozWebSocket; // 火狐浏览器最新的WebSocket对象是MozWebSocket
      }
      if (window.WebSocket) {
        this.socket = new WebSocket(`ws://localhost:8088/ws?nick=${nick}`); // localhost
        // 用于指定当从服务器接受到信息时的回调函数
        this.socket.onmessage = event => {
          this.mesAll.push(event.data);
        };
        // 用于指定连接成功后的回调函数
        this.socket.onopen = event => {
          this.mesAll.push("连接重新开启!");
        };
        // 用于指定连接关闭后的回调函数
        this.socket.onclose = event => {
          console.log(event);
          this.mesAll.push("重新连接被关闭!");
        };
      } else {
        alert("你的浏览器不支持 WebSocket！");
      }
    },
    clearMes() {
      this.mesAll = [];
    }
  },
  mounted() {
    let ranDomIndex = Math.floor(Math.random() * this.ranDomNick.length);
    const nick = this.ranDomNick[ranDomIndex];
    // console.log(nick)

    if (!window.WebSocket) {
      window.WebSocket = window.MozWebSocket; // 火狐浏览器最新的WebSocket对象是MozWebSocket
    }
    if (window.WebSocket) {
      this.socket = new WebSocket(`ws://localhost:8088/ws?nick=${nick}`);

      /* 各种监听事件 */

      // 用于指定连接成功后的回调函数
      this.socket.onopen = event => {
        this.mesAll.push("连接开启!");
      };
      // 用于指定当从服务器接受到信息时的回调函数
      this.socket.onmessage = event => {
        this.mesAll.push(event.data);
      };

      // 用于指定连接关闭后的回调函数
      this.socket.onclose = event => {
        this.mesAll.push("连接被关闭!");

        setTimeout(()=>{
          this.reConnect();
        },1000)
        
      };
    } else {
      alert("你的浏览器不支持 WebSocket！");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.chatroom-con {
  width: 700px;
  margin: 0 auto;
  
}
 h3 {
    text-align: center;
  }
  .mes-con {
    width: 700px;
    height: 600px;
    border: 1px solid black;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .bottom-con {
    display: flex;
    display: -webkit-flex;
    margin-top: 40px;
    justify-content: space-around;
  }
  .input-li {
    width: 340px;
    height: 50px;
    border: 1px solid black;
  }
  input {
    border: none;
    box-sizing: border-box;
    padding-left: 20px;
  }
  input:focus {
    background: transparent;
    outline: none;
    // border: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -webkit-appearance: none;
  }
  .btn {
    width: 130px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: white;
    border: 1px solid black;
    color: black;
  }
  .btn-clear {
    width: 180px;
  }
</style>
