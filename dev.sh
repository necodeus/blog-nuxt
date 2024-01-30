#!/bin/bash

echo "Starting development server..."

for i in "$@"
do
case $i in
    --bun)
    BUN=true
    shift
    ;;
    --node)
    NODE=true
    shift
    ;;
    --prod)
    PROD=true
    shift
    ;;
    --local)
    LOCAL=true
    shift
    ;;
    *)
    ;;
esac
done

if [ "$PROD" = true ]; then
    export NUXT_PUBLIC_COMMON_API_URL=https://common-api.necodeo.com/api/v1
    export NUXT_PUBLIC_PAPER_API_URL=https://paper-api.necodeo.com/api/v1
    export NUXT_PUBLIC_FORUM_API_URL=https://forum-api.necodeo.com/api/v1
    export NUXT_PUBLIC_ADMIN_API_URL=https://admin-api.necodeo.com/api/v1
    export NUXT_PUBLIC_SHOP_API_URL=https://shop-api.necodeo.com/api/v1
    export NUXT_PUBLIC_IMAGES_URL=https://images.necodeo.com
    export NUXT_PUBLIC_WEBSOCKET_SESSION_HOST=necodeo.com
    export NUXT_PUBLIC_WEBSOCKET_ADDRESS=wss://www.necodeo.com:8090
    echo "MODE: production"
elif [ "$LOCAL" = true ]; then
    export NUXT_PUBLIC_COMMON_API_URL=http://common-api.localhost/api/v1
    export NUXT_PUBLIC_PAPER_API_URL=http://paper-api.localhost/api/v1
    export NUXT_PUBLIC_FORUM_API_URL=http://forum-api.localhost/api/v1
    export NUXT_PUBLIC_ADMIN_API_URL=http://admin-api.localhost/api/v1
    export NUXT_PUBLIC_SHOP_API_URL=http://shop-api.localhost/api/v1
    export NUXT_PUBLIC_IMAGES_URL=http://images.localhost/api/v1
    export NUXT_PUBLIC_WEBSOCKET_SESSION_HOST=localhost
    export NUXT_PUBLIC_WEBSOCKET_ADDRESS=ws://localhost:8090
    echo "MODE: local"
else
    echo "Please specify either --prod or --local"
    exit 1
fi

if [ "$BUN" = true ]; then
    echo "RUNTIME: Bun v$(bun -v)"
    bun --bun run dev
elif [ "$NODE" = true ]; then
    echo "RUNTIME: Node $(node -v)"
    yarn dev
else
    echo "Please specify either --bun or --node"
fi
