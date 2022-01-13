import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/views/MainPage";
import WatchPage from "@/views/WatchPage";
import FavoritesPage from "@/views/FavoritesPage";

Vue.use(VueRouter)

const router=new VueRouter({
    mode: "history",
    routes:[
        {path:"/",component:MainPage},
        {path:"/favorites/:userid",component:FavoritesPage},
        {path: "/watch/:videoId",component: WatchPage}
    ]
});

export default router;


