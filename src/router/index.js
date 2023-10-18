import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        layout: 'full',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/Blog/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        layout: 'full',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: {
        pageTitle: 'About',
        layout: 'full',
        breadcrumb: [
          {
            text: 'About',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      meta: {
        pageTitle: 'contact',
        layout: 'full',
        breadcrumb: [
          {
            text: 'contact',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/admin-edit',
      name: 'admin-edit',
      component: () => import('@/views/Admin/Edit/edit.vue'),
      meta: {
        pageTitle: 'Edit',
        breadcrumb: [
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Admin/Profile/account-setting/AccountSetting.vue'),
      meta: {
        pageTitle: 'Profile',
        breadcrumb: [
          {
            text: 'Profile',
            active: true,
          },
        ],
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Login/Register.vue'),
      meta: {
        layout: 'full'
      },
    },
  
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

