#!/bin/sh
envsubst '$PORTAINER_HOSTNAME' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
