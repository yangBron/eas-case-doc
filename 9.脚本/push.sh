#!/bin/bash

set -e
node ./.obsidian/docsify/sidebar.js

DATE=$(date +'%Y%m%d-%H%M%S')
git add .
git commit -m "Manual sync at ${DATE}"
git push origin develop

echo "Manual push successfully!"

