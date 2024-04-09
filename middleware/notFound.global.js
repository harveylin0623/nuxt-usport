export default defineNuxtRouteMiddleware((to) => {
  if (to.name === 'slug' || !to.name) {
    return navigateTo('/')
  }
})
