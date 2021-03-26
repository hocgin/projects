// ref: https://umijs.org/config/
export default {
  title: 'hocgin Projects',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
      ],
    },
  ],
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  outputPath: './dist',
  dva: {},
  antd: {},
  copy: ['CNAME'],
  // analytics: {
  //   baidu: 'e4f613a873cead231f4f46adcbd8d671',
  // },
};
