import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      // component: RenderRouterView,
      // component: { render: h => h("router-view") },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/user-layout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/register.vue")
        }
      ]
    },
    {
      //dashboard
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/basic-layout"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/analysis")
            }
          ]
        }
      ]
    },

    {
      //form
      path: "/form",
      name: "form",
      component: { render: h => h("router-view") },
      children: [
        {
          path: "/form/basic-form",
          name: "basicform",
          component: () =>
            import(/* webpackChunkName: "form" */ "./views/Forms/basic-form")
        },
        {
          path: "/form/step-form",
          name: "stepform",
          component: () =>
            import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
          children: [
            {
              path: "/form/step-form",
              redirect: "/form/step-form/info"
            },
            {
              path: "/form/step-form/info",
              name: "info",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/step1")
            },
            {
              path: "/form/step-form/confirm",
              name: "confirm",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/step2")
            },
            {
              path: "/form/step-form/result",
              name: "result",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/step3")
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;