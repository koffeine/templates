FROM nginx:alpine

ENV TZ=Europe/Budapest

COPY docker/21-envsubst-on-templates.sh /docker-entrypoint.d
COPY docker/nginx.conf etc/nginx/templates/default.conf.template
COPY dist /usr/share/nginx/html
