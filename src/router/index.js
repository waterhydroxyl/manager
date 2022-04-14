import VueRouter from 'vue-router';
import Vue from 'vue';

// import localCache from '@/utils/cache';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: () => import('@/views/login/Login.vue') },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue'),
    children: [
      {
        path: '/main/resourseMg/eqMg',
        name: 'eqMg',
        component: () => import('@/views/main/resourseMg/eqMg/eqMg.vue'),
      },
      {
        path: '/main/resourseMg/employeMg',
        name: 'employeMg',
        component: () => import('@/views/main/resourseMg/employeMg/employeMg.vue'),
      },
      {
        path: '/main/resourseMg/customerMg',
        name: 'customerMg',
        component: () => import('@/views/main/resourseMg/customerMg/customerMg.vue'),
      },



      {
        path: '/main/taskesMg/taskMg',
        name: 'taskMg',
        component: () => import('@/views/main/taskesMg/taskMg/taskMg.vue'),
      },



      {
        path: '/main/announceCT/announceMg',
        name: 'announceMg',
        component: () => import('@/views/main/announceCT/announceMg/announceMg.vue'),
      },
      {
        path: '/main/announceCT/announceList',
        name: 'announceList',
        component: () => import('@/views/main/announceCT/announceList/announceList.vue'),
      },

      {
        path: '/main/employeCT/workCheckIn',
        name: 'workCheckIn',
        component: () => import('@/views/main/employeCT/workCheckIn/workCheckIn.vue'),
      },
      {
        path: '/main/employeCT/workHours',
        name: 'workHours',
        component: () => import('@/views/main/employeCT/workHours/workHours.vue'),
      },
      {
        path: '/main/employeCT/personInfo',
        name: 'personInfo',
        component: () => import('@/views/main/employeCT/personInfo/personInfo.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   // 跳转到其他页面，校验token
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token');
//     if (!token) {
//       next({ name: 'login' });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router;
