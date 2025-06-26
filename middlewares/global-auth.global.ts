export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`Naviguation de ${from.fullPath} de ${to.fullPath}`);
    
})