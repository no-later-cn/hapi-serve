// app.js
const Hapi = require('hapi');
const hostConfig = require('./config');
const routesRoot = require('./routes');
require('env2')('./.env')
const { env } = process;
// 配置服务器启动 host 与端口
const server = new Hapi.Server(hostConfig);
const init = async () => {
  //http://127.0.0.1:3000/documentation  接口文档地址
  await server.register(require('inert'));
  await server.register(require('vision'));
  await server.register(require('./plugins/hapi-swagger'));
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesRoot
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  console.log(`Swagger Document running at: ${server.info.uri}/documentation`);
};

init();