#!/bin/sh
envsubst '$PORTAINER_HOSTNAME' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx -g 'daemon off;'