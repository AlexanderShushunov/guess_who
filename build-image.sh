#!/bin/sh
npm i --prune
npm run build
docker build -t ashushunov/guess_how .
docker push ashushunov/guess_how

