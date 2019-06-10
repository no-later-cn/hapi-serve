namespace Shops {
const GROUP_NAME = 'shops';
const Joi = require('joi')
module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request: any, reply: any) => {
        return ''
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        // 适用于 GET 接口的 query（URL 路径参数）
        query: {
          limit: Joi.number().integer().min(1).default(10)
            .description('每页的条目数'),
          page: Joi.number().integer().min(1).default(1)
            .description('页码数'),
        }
      }
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request: any, reply: any) => {
        return ''
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
    },
  },
];
}
