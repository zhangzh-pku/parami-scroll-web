// router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AccountSettings from "@/components/AccountSettings.vue";
import LoginPage from "@/components/LoginPage.vue"
import UserView from "@/components/UserView.vue"
import AdvertiserView from "@/components/AdvertiserView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/account-settings",
      name: "AccountSettings",
      component: AccountSettings,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/view',
      name: 'view',
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'user',
          name: 'user',
          component: UserView
        },
        {
          path: 'advertiser',
          name: 'advertiser',
          component: AdvertiserView
        }
      ]
    }
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('username');
  console.log(loggedIn)
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
