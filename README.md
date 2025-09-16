# Nuxt Minimal Starter

**Autor:** Jose Angel Fosado Animas

Este proyecto es un **frontend de un comercio electronico** utilizando **Nuxt.js**, **Tailwind CSS** y **Pinia** para la gestión de estado. El diseño original se encuentra disponible en [Figma](https://www.figma.com/design/Zg5PMdriPXzOCBVqIVrUdy/PropuestaWeb?node-id=4215-7255&p=f&t=cjyPy0iBc2lt1S7w-0).

El objetivo de este proyecto es proporcionar una base limpia y lista para iniciar aplicaciones web con Nuxt, optimizada para desarrollo rápido y escalable.

---

## Tecnologías utilizadas
<div align="center">
  <img src=" https://img.shields.io/badge/nuxt%20js-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white" alt="Typescript">
  <img src="  https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Typescript">
 

</div>
---

## Setup

Instala las dependencias del proyecto usando tu gestor favorito:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

---

## Configuración de variables de entorno

Para consumir correctamente el API, crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
NUXT_PUBLIC_API_BASE=https://api.escuelajs.co/api/v1
```

> **Explicación:**  
> Usamos una variable de entorno pública (`NUXT_PUBLIC_API_BASE`) para definir la URL base del API. Esto permite cambiar fácilmente la URL en distintos entornos (desarrollo, staging, producción) sin modificar el código, y Nuxt automáticamente la expone en el frontend cuando se inicia la aplicación.

---

## Servidor de desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

---

## Producción

Construye la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Vista previa de la build de producción:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

---

## Documentación adicional

- [Documentación oficial de Nuxt](https://nuxt.com/docs/getting-started/introduction)  
- [Guía de despliegue de Nuxt](https://nuxt.com/docs/getting-started/deployment)

