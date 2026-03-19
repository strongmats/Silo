#!/bin/sh
# Kill any existing server on port 3000
fuser -k 3000/tcp 2>/dev/null
sleep 0.5
cd "$(dirname "$0")"
[ ! -d node_modules ] && npm install
node server.js
