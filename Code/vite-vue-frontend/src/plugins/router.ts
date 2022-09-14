import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/login/guest', name: 'guest-login', component: () => import('@/views/LoginGuest.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path: '/games-hub', name: 'games-hub', component: () => import('@/views/GamesHub.vue')},
    {path: '/joingame', name: 'join-game', component: () => import('@/views/JoinGame.vue')},
    {path: '/gamequeue', name: 'game-queue', component: () => import('@/views/GameQueue.vue')},
    // Game Views
    {path: '/honderden', name: 'honderden-game', component: () => import('@/views/gameViews/honderden/Honderden.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
