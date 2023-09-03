export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/partytown',
        '@pinia/nuxt',
    ],
    // vite: {
    //     server: {
    //         watch: {
    //             usePolling: true,
    //         },
    //         hmr: {
    //             port: 3040,
    //         },
    //     },
    // },
    devtools: {
        enabled: true,
    },
    pages: true,
    nitro: {
      // storage: {
      //   cache: {
      //     driver: 'redis',
      //   },
      // },
      // devStorage: {
      //   cache: {
      //     driver: 'memory',
      //   },
      // },
    },
    vite: {
        // @ts-ignore
        ssr: {
            noExternal: ["moment"],
        },
    },
    runtimeConfig: {
        // private: {
        //     API_KEY: process.env.API_KEY,
        // },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'pl',
            },
            viewport: 'width=device-width, initial-scale=1',
            charset: 'utf-8',
            script: [
                {
                    hid: 'adsbygoogle-script',
                    // type: 'text/partytown',
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google6',
                    async: true,
                    'data-ad-client': 'ca-google',
                },
                {
                    hid: 'gtag-script',
                    type: 'text/partytown',
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-3YWVF3BMB',
                    async: true,
                },
                {
                    hid: 'gtag-inner-script',
                    innerHTML: `
                        window.dataLayer = window.dataLayer || [];

                        function gtag() {
                            dataLayer.push(arguments);
                        }

                        gtag('js', new Date());
                        gtag('config', 'G-3YWVF3BMBM');
                    `,
                },
            ],
            link: [
                {
                    href: '/icons/apple-touch-icon.png',
                    rel: 'apple-touch-icon',
                },
                {
                    href: '/manifest.json',
                    rel: 'manifest',
                },
                {
                    href: '//fonts.googleapis.com',
                    rel: 'preconnect',
                },
                {
                    href: '//fonts.googleapis.com',
                    rel: 'dns-prefetch',
                },
            ],
        },
    },
});
