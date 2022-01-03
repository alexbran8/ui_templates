# Dockerfile

FROM node:16.4

# copy source and install dependencies
RUN mkdir -p /opt/app
RUN cd ..

# cody in installation folder
COPY . /opt/app/

# build frontend
WORKDIR /opt/app/client
RUN pwd

RUN rm -rf node_modules
RUN npm install -g npm@latest
RUN npm install --save-dev cross-env
RUN npm run dev

# backend
WORKDIR /opt/app/server
RUN cd .. 
RUN ls -a
RUN npm install
RUN npm install --save-dev cross-env
RUN npm install pm2 -g

# start server
EXPOSE 4000
STOPSIGNAL SIGTERM
CMD pm2-runtime start /opt/app/server/index.js -i max