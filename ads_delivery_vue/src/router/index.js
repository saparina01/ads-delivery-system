import { createRouter, createWebHistory } from 'vue-router';
import AdvertiserDashboard from '@/views/AdvertiserDashboard.vue';
import UserDashboard from '@/views/UserDashboard.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
// import LoginRegister from "@/views/LoginRegister.vue";
// 只使用动态导入
const LoginRegister = () => import('@/views/LoginRegister.vue');

const routes = [
    {
        path: '/',
        name: 'home', // 根路径对应的路由
        component: LoginRegister, // 可以指向登录页面或者首页
    },
    {
        path: '/admin',
        name: 'adminDashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true, role: 'ADMIN' }
    },
    {
        path: '/advertiser',
        name: 'advertiserDashboard',
        component: AdvertiserDashboard,
        meta: { requiresAuth: true, role: 'ADVERTISER' }
    },
    {
        path: '/user',
        name: 'userDashboard',
        component: UserDashboard,
        meta: { requiresAuth: true, role: 'USER' }
    },
    // 登录路由使用动态导入
    {
        path: '/login',
        name: 'login',
        meta: { requiresAuth: false },
        component: () => import('@/views/LoginRegister.vue')  // 动态导入
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userRole = localStorage.getItem('userRole');  // 从 localStorage 获取角色
    console.log("当前角色:", userRole);
    console.log(to.meta.role);

    if (to.meta.requiresAuth) {  // 如果目标路由需要认证
        if (to.meta.role) {  // 如果目标路由设置了角色要求
            if (userRole && userRole === to.meta.role) {
                console.log("角色匹配，允许访问");
                next();
            } else {
                console.log("角色不匹配，跳转到登录");
                next({ name: 'login' });  // 角色不匹配，跳转到登录页面
            }
        } else {
            console.log("目标路由没有设置角色，继续访问");
            next();
        }
    } else {
        console.log("不需要验证的路由，继续访问");
        next();  // 不需要验证的路由，继续访问
    }
});



export default router;
