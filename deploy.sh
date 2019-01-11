#!/usr/bin/env sh

# abort on errors
set -e

git checkout gh-pages

# build
grunt fastBuild

# navigate into the build output directory
git add -A
git add -f index.html
git add -f build/*
git commit -m 'deploy'

git push origin gh-pages

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages