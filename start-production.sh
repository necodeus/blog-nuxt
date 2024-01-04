yarn build

export NUXT_PUBLIC_COMMON_API_URL=https://common-api.necodeo.com/api/v1
export NUXT_PUBLIC_PAPER_API_URL=https://paper-api.necodeo.com/api/v1
export NUXT_PUBLIC_FORUM_API_URL=https://forum-api.necodeo.com/api/v1
export NUXT_PUBLIC_ADMIN_API_URL=https://admin-api.necodeo.com/api/v1
export NUXT_PUBLIC_SHOP_API_URL=https://shop-api.necodeo.com/api/v1
export NUXT_PUBLIC_IMAGES_URL=https://images.necodeo.com
export NUXT_PUBLIC_WEBSOCKET_SESSION_HOST=necodeo.com
export NUXT_PUBLIC_WEBSOCKET_ADDRESS=wss://www.necodeo.com:8090

node .output/server/index.mjs
