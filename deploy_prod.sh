#!/bin/bash

# cd /root/srv/app

#build docker container
docker build -t nptbetajenkins .


# stop existing container
docker stop nptbetajenkins && docker rm nptbetajenkins

# delete existing container

# delete existing image

# run new image
docker run  -d -p 5002:8080  --name nptbetajenkins nptbetajenkins
