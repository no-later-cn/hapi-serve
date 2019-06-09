module.exports = [
    {
      method: 'GET',
      path: '/',
      handler: (request: any, reply: any) => {
        return 'hellow hapi'
      },
      config: {
        tags: ['api', 'tests'],
        description: '第一个测试阿',
      }
    }
  ]