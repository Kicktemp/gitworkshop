#!/usr/bin/env sh

# abort on errors
set -e

git checkout gh-pages

# build
grunt fastBuild

# Add Build Files
git add -A
git add -f index.html
git add -f build/*
git commit -m 'deploy'

git push origin gh-pages

git checkout master