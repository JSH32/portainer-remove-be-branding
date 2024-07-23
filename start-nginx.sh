#!/bin/sh
export PORTAINER_HOSTNAME="${PORTAINER_HOSTNAME:-portainer}"
export PORTAINER_PORT="${PORTAINER_PORT:-9000}"
envsubst '$PORTAINER_HOSTNAME,$PORTAINER_PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
