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
    "floating-vue/nuxt",
    "@nuxt/hints",
    "@nuxt/scripts",
    "@nuxt/a11y",
  ],
  devServer: {
    host: "0.0.0.0",
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/pro-regular-svg-icons",
        "@fortawesome/pro-solid-svg-icons",
      ],
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
  css: ["./app/assets/css/main.css"],
  hub: {},
  runtimeConfig: {
    public: {},
  },
  fontawesome: {
    proIcons: {
      solid: ["DoNotEnter"],
      regular: ["FaceThinking"],
    },
    icons: {
      solid: ["Bomb"],
    },
  },
  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-S1KMV7ZRS7",
      },
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
      title:
        "Sacred Heart Catholic Church - Auburn Hills, MI | Archdiocesan Restructuring",
      meta: [
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        { name: "author", content: "Evan H." },
        { name: "theme-color", content: "#405A68" },
        { name: "format-detection", content: "telephone=no" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#405A68" },
        { name: "msapplication-Config", content: "browserconfig.xml" },
        { name: "msapplication-TileColor", content: "#405A68" },
        {
          name: "msapplication-TileImage",
          content: "https://images.esacredheart.org/icons/ms-icon-144x144.png",
        },
      ],
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap",
          rel: "preload",
          as: "style",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "preload",
          as: "style",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet",
        },
        { href: "https://s3.amazonaws.com", rel: "dns-prefetch" },
        { href: "https://www.googletagmanager.com", rel: "dns-prefetch" },
        { href: "https://cdn.esacredheart.org", rel: "preconnect" },
        { href: "https://images.esacredheart.org", rel: "preconnect" },
        { href: "https://restructuring.esacredheart.org", rel: "canonical" },
        {
          href: "https://cdn.esacredheart.org/sacred-heart.ico",
          rel: "shortcut icon",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-iphone-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-ipad-76x76.png",
          sizes: "60x60",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-iphone-retina-120x120.png",
          sizes: "114x114",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-ipad-retina-152x152.png",
          sizes: "144x144",
        },
        {
          rel: "icon",
          href: "https://images.esacredheart.org/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },
});

// <meta name="description" content="Sacred Heart Church's Site" />
// <meta name="keywords" content="Sacred Heart Catholic Church, Auburn Hills, Michigan" />
// <meta property="og:title" content="Sacred Heart Catholic Church - Auburn Hills, MI | Welcome" />
// <meta property="og:site_name" content="Sacred Heart Catholic Church's website" />
// <meta property="og:type" content="website" />
// <meta property="og:description" content="Sacred Heart Church's Site" />
// <meta property="og:url" content="https://www.esacredheart.org" />
// <meta property="og:image" content="https://images.esacredheart.org/sacred-heart-logo.jpg" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />
// <meta property="og:locale" content="en_US" />
// <meta property="og:phone_number" content="+1-248-852-4170" />
// <meta property="og:email" content="sacredheartauburnhills@gmail.com" />
// <meta property="og:street-address" content="3400 S Adams Road" />
// <meta property="og:locality" content="Auburn Hills" />
// <meta property="og:region" content="MI" />
// <meta property="og:postal-code" content="48326" />
// <meta property="og:country-name" content="USA" />
// <meta property="fb:app_id" content="818889048795596" />
// <meta property="fb:page_id" content="114688866599926" />
// <meta name="twitter:card" content="summary" />
// <meta name="twitter:site" content="@sacredHeart7009" />
// <meta name="twitter:url" content="https://www.esacredheart.org" />
// <meta name="twitter:title" content="Sacred Heart Catholic Church" />
// <meta name="twitter:description" content="Sacred Heart Catholic Church's Site" />
// <meta name="twitter:image" content="https://images.esacredheart.org/twitter-card-logo.jpg" />

// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link rel="dns-prefetch" href="https://fonts.gstatic.com" crossorigin />

// <link rel="dns-prefetch" href="https://www.clarity.ms/" />

// <script>
//     var n,
//         r,
//         c,
//         e = window,
//         t = document,
//         a = "script";
//     (e[(n = "clarity")] =
//         e[n] ||
//         function () {
//             (e[n].q = e[n].q || []).push(arguments);
//         }),
//         ((r = t.createElement(a)).async = 1),
//         (r.src = "https://www.clarity.ms/tag/9bz6xz4nzw"),
//         (c = t.getElementsByTagName(a)[0]).parentNode.insertBefore(r, c);
// </script>
