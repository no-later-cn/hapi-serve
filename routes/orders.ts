namespace Orders {
  const GROUP_NAME = 'orders';

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
        return ''
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
    },
  },
];
}