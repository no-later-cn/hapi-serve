// const inert = require('inert');
// const vision = require('vision');
const packagePlugins = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = {
  plugin:require('hapi-swagger'),
  options:{
    info: {
      title: '接口文档',
      version: packagePlugins.version,
    },
    // 定义接口以 tags 属性定义为分组
    grouping: 'tags',
    tags: [
      { name: 'tests', description: '测试相关' },
    ]
  }
}
// module.exports = [
//   inert,
//   vision,
//   {
//     register: hapiSwagger,
//     options: {
//       info: {
//         title: '接口文档',
//         version: packagePlugins.version,
//       },
//       // 定义接口以 tags 属性定义为分组
//       grouping: 'tags',
//       tags: [
//         { name: 'tests', description: '测试相关' },
//       ]
//     }
//   }
// ]