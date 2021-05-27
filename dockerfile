# Dockerfile
FROM node:14.16
# copy source and install dependencies
RUN mkdir -p /opt/app
RUN cd ..
# COPY start-server.sh /opt/app/
# COPY build.sh /opt/app/
COPY . /opt/app/
# build frontendk
WORKDIR /opt/app/
# RUN rm package-lock.json
RUN rm -rf node_modules
RUN npm install -g npm@latest
RUN npm ci
RUN npm run deploy
# RUN cd client
# RUN npm build
RUN cd ..
RUN npm install pm2 -g
# RUN rm -rf /etc/localtime
# RUN ln -s /usr/share/zoneinfo/Etc/GMT-2 /etc/localtime

# start server
EXPOSE 5000 587
STOPSIGNAL SIGTERM
CMD rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Etc/GMT-3 /etc/localtime && pm2-runtime start server.js
