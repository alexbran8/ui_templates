#!/bin/bash

# cd /root/srv/app

#build docker container
docker build -t nptjenkins .


# stop existing container
docker stop nptjenkins && docker rm nptjenkins

# delete existing container

# delete existing image

# run new image
docker run  -d -p 5002:8080  --name nptjenkins nptenkins
