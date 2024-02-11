#!/bin/bash

echo "Installing dependencies..."

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
    bun --bun install
elif [ "$NODE" = true ]; then
    echo "RUNTIME: Node $(node -v)"
    yarn install
else
    echo "Please specify either --bun or --node"
fi
