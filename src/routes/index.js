import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Contact = () => import("@/views/Contact.vue");
const Search = () => import("@/views/Search.vue");
const NotFound = () => import("@/views/NotFound.vue");
const Logon = () => import("@/views/Logon.vue");
const User = () => import("@/views/User.vue");
const Setting = () => import("@/views/Setting.vue");
const Product = () => import("@/views/Product.vue");
const Admin = () => import("@/views/Admin.vue");
const Dasboard = () => import("@/views/Dasboard.vue")
const ListPost = () => import("@/views/ListPost.vue")
const PostDetail = () => import("@/views/PostDetail.vue")
const listProduct = ()=>import("@/views/ListProduct.vue")
const productDetail = ()=>import("@/views/ProductDetail.vue")
const Settings = () => import("@/views/Settings.vue")
const routes = [
  {
    path: "/",
    alias: ["/home"],
    component: Home,
  },
  {
    path: "/contact",
    alias: ["/contact-page"],
    component: Contact,
  },
  {
    path: "/about",
    alias: ["/about-page"],
    component: About,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/posts",
    name: "ListPost",
    component: ListPost,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "/listProduct",
    name: "listProduct",
    component: listProduct,
  },
  {
    path: "/listProduct/:id",
    name: "ProductDetail",
    component: productDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "user", 
        component: User,
      },
      {
        path: "product", 
        component: Product,
      },
      {
        path: "dashboard", 
        component: Dasboard,
      },
      {
        path: "setting",
        component: Setting,
      },
    ],
  },
  {
    path:"/settings",
    component:Settings,
  },
  {
    path: "/login",
    beforeEnter: (to, from, next) => {
      const isLogin = false;
      if (!isLogin) {
        alert("Bạn không có quyền truy cập trang này");
        next(false); 
      } else {
        next("/dashboard");
      }
    },
    component: Logon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.name === 'PostDetail') {
      return { x: 0, y: window.innerHeight / 2 };
    }
    if (to.name === 'NotFound') {
      return { x: 0, y: 0 };
    }
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
