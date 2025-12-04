#!/bin/sh

ME=$(basename $0)

DEFINED_ENVS=$(printf '${%s} ' $(env | grep ^VITE_ | cut -d= -f1))
APP_DIR=/usr/share/nginx/html

cd $APP_DIR

for i in $(find . -type f -name *.js); do
	echo "$ME: Running envsubst on $APP_DIR/${i:2}"
	envsubst "$DEFINED_ENVS" < $i > $i.envd
	mv $i.envd $i
done
