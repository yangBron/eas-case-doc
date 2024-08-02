#!/bin/bash

set -e

git pull origin develop
git push wag develop

cd  W:/git_server/eas-case-doc
git reset --hard

echo "Manual sync successfully!"
