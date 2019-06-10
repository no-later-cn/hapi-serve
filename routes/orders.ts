namespace Orders {
  const GROUP_NAME = 'orders';
  const Joi = require('joi')
module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request: any, reply: any) => {
        return ''
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request: any, reply: any) => {
        return '这是啥'
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        // 适用于动态路由的 params 验证
        params: {
          orderId: Joi.number().required(),
        },
        // 适用于 POST 接口的 payload（request body）验证
        payload: {
          goodsList: Joi.array().items(
            Joi.object().keys({
              goods_id: Joi.number().integer(),
              count: Joi.number().integer(),
            })
          )
        }
      }
    },
  },
];
}