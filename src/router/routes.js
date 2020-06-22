import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "/about-cloud",
        name: "AboutCloud",
        component: () => import("../components/Cloud")
      },
      {
        path: "/serverless-technology",
        name: "Serverless",
        component: () => import("../components/Serverles")
      },
      {
        path: "/security",
        name: "Security",
        component: () => import("../components/Security")
      },
      {
        path: "/disaster",
        name: "Disaster",
        component: () => import("../components/Disaster")
      },
      {
        path: "/digital-marketing",
        name: "Marketing",
        component: () => import("../components/Market")
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/Location.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../components/Products.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../components/404.vue")
  },
  // otherwise
  { path: "*", redirect: "/" }
];

export default routes;
