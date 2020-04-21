// ref: https://umijs.org/config/
export default {
  title: 'hocgin`s Projects',
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
};
