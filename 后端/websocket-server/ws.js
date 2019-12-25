// node原生没有支持ws,所以需要第三方的库 这里服务端用了ws这个库。相比大家熟悉的socket.io，ws 实现更轻量，更适合学习的目的。
const WebSocket = require('ws');

function getQueryByName(url,name){
  var reg=new RegExp('[?&]'+name+'=([^&#]+)');
  var query=url.match(reg);
  return query?query[1]:null;
}

const server = new WebSocket.Server({ port: 8088 });

server.on('open', function open() {
  console.log('connected');
});


server.on('close', function close() {
  console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
  // const ip = req.connection.remoteAddress;
  // const port = req.connection.remotePort;
  const clientName = decodeURIComponent(getQueryByName(req.url, 'nick'));

  console.log('%s is connected', clientName);

  // 发送欢迎信息给客户端
  ws.send("Welcome：" + clientName);

  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);

    // 广播消息给所有客户端
    server.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send( clientName + " ： " + message);
      }
    });

  });

});