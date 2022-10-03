import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/login/guest', name: 'guest-login', component: () => import('@/views/LoginGuest.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path: '/games-hub', name: 'games-hub', component: () => import('@/views/GamesHub.vue')},
    {path: '/joingame', name: 'join-game', component: () => import('@/views/JoinGame.vue')},
    {path: '/gamequeue', name: 'game-queue', component: () => import('@/views/gameViews/GameQueue.vue')},
    // Game Views
    {path: '/game/0a60bb85-125e-4fca-b630-9cfb1f24914a', name: 'honderden-game', component: () => import('@/views/gameViews/honderden/Honderden.vue')},
    {path: '/game/40df038d-c845-44b1-babc-6b8ff0e7fcd4', name: 'boer-zoekt-vrouw-game', component: () => import('@/views/gameViews/boer-zoekt-vrouw/BoerZoektVrouw.vue')},
    {path: '/game/5f08b9e5-e18b-43ed-a9c8-580f5d171f24', name: 'bussen-game', component: () => import('@/views/gameViews/bussen/Bussen.vue')},
    {path: '/game/3fa85f64-5717-4562-b3fc-2c963f66afa6', name: 'fuck-the-dealer-game', component: () => import('@/views/gameViews/fuck-the-dealer/FuckTheDealer.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
