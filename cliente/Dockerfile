FROM node:latest as node

RUN mkdir -p /web

WORKDIR /web

COPY package.json /web

RUN npm install

COPY . /web

RUN npm run build --prod

FROM nginx:1.17.1-alphine

COPY --from=build-step /web/dist/cliente /usr/share/nginx/html