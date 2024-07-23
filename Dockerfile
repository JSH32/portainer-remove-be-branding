FROM nginx:stable-alpine

COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY start-nginx.sh /start-nginx.sh
COPY remove_be.js /var/www/remove_be.js

EXPOSE 80

ENTRYPOINT ["/start-nginx.sh"]

LABEL org.opencontainers.image.source="https://github.com/JSH32/portainer-remove-be-branding"
LABEL org.opencontainers.image.description="Portainer reverse proxy to remove BE branding"
LABEL org.opencontainers.image.licenses="MIT"
