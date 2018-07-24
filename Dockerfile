FROM fusioncomau/alpine-node-git:6.9
MAINTAINER Jeremy MOREAU

RUN mkdir /home/api \
&& git clone https://github.com/mimir02/nodeDevOpsAPI.git \
&& cd nodeDevOpsAPI \
&& git checkout docker-prod
&& npm install
&& export NODE_ENV=production
&& npm start


WORKDIR /home/api/nodeDevOpsAPI