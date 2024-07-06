FROM nginx:latest

COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY start-nginx.sh /start-nginx.sh

LABEL org.opencontainers.image.source=https://github.com/JSH32/portainer-remove-be-branding
LABEL org.opencontainers.image.description="Portainer reverse proxy to remove BE branding"
LABEL org.opencontainers.image.licenses=MIT

EXPOSE 80

ENTRYPOINT ["/start-nginx.sh"]