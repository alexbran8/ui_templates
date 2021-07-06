#!/bin/bash

# cd /root/srv/app

#build docker container
docker build -t ecosystem .


# stop existing container
docker stop ecosystem  && docker rm ecosystem 

# delete existing container

# delete existing image

# run new image
docker run  -d -p 5002:4000  --name ecosystem  ecosystem 
