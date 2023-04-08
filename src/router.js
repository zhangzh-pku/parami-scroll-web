// router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AccountSettings from "@/components/AccountSettings.vue";
import UserView from "@/components/UserView.vue";
import AdvertiserView from "@/components/AdvertiserView.vue";
import BidSuccess from "@/components/bidSuccess.vue";

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
      path: "/account-settings",
      name: "AccountSettings",
      component: AccountSettings,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/bid-success",
      name: "BidSuccess",
      component: BidSuccess,
    },
    {
      path: "/view",
      name: "view",
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "user",
          name: "user",
          component: UserView,
        },
        {
          path: "advertiser",
          name: "advertiser",
          component: AdvertiserView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("address");
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/home");
  } else {
    next();
  }
});

export default router;
