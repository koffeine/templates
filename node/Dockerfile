FROM node:24-alpine

RUN apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Budapest /etc/localtime && \
	apk del tzdata

WORKDIR /application

COPY . .

RUN npm ci --omit dev

USER node:node

CMD [ "node", "src" ]
