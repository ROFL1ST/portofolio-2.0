#!/bin/bash 
FROM --platform=linux/amd64 node:18 as staging
ENV NODE_ENV=development
WORKDIR /portofolio_danen
COPY . /portofolio_danen/

RUN npm install -g pnpm
RUN npx update-browserslist-db@latest
RUN npm run build


# Stage Nginx Build
FROM nginx:latest
WORKDIR /portofolio_danen
COPY --from=staging /portofolio_danen/ /portofolio_danen
COPY --from=staging /portofolio_danen/nginx/default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 80