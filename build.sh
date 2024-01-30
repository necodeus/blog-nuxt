#!/bin/bash

echo "Building the project..."

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
    *)
    ;;
esac
done

if [ "$BUN" = true ]; then
    echo "RUNTIME: Bun v$(bun -v)"
    bun --bun run build
elif [ "$NODE" = true ]; then
    echo "RUNTIME: Node $(node -v)"
    yarn build
else
    echo "Please specify either --bun or --node"
fi
