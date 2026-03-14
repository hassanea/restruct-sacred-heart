// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxthub/core",
    "@vesp/nuxt-fontawesome",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  devServer: {
    host: "0.0.0.0",
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@fortawesome/free-solid-svg-icons"],
    },
    server: {
      hmr: {
        protocol: "http",
        host: "localhost",
        clientPort: 3000,
        port: 3000,
      },
    },
  },

  // vite: {
  // server: {
  // hmr: {
  // protocol: "http",
  // host: 'localhost',
  // clientPort: 3000,
  // port: 3000,
  // },
  // },
  // },
  // });

  css: ["./app/assets/css/main.css"],
  hub: {},
  runtimeConfig: {
    public: {},
  },
  fontawesome: {
    // icons: {
    // solid: ["bomb", "do-not-enter"],
    // },
    proIcons: {
      regular: ["face-thinking"],
    },
  },
  image: {
    imagekit: {
      baseURL: "https://images.esacredheart.org",
    },
    format: ["avif", "webp"],
    quality: 80,
    densities: [1, 2, 3],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  app: {
    head: {
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
