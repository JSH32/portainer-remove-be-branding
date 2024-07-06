#!/bin/sh
envsubst '$JELLYFIN_HOSTNAME' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx -g 'daemon off;'