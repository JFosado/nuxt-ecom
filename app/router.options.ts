// app/router.options.ts
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Si vuelves atrás o adelante, conserva la posición
    if (savedPosition) {
      return savedPosition
    }
    // Si tiene un hash (#seccion), haz scroll hacia allí
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // 👇 Evita que suba al top en cada navegación
    return false
  }
}
