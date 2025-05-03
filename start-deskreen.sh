#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider
yarn build
unset NODE_OPTIONS
yarn start
