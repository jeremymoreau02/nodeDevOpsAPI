FROM fusioncomau/alpine-node-git:6.9
MAINTAINER Jeremy MOREAU

RUN mkdir /home/api \
&& cd /home/api \
&& git clone https://github.com/mimir02/nodeDevOpsAPI.git \
&& cd nodeDevOpsAPI \
&& git checkout docker-prod \
&& npm install \
&& export NODE_ENV=production

WORKDIR /home/api/nodeDevOpsAPI
CMD [ "npm", "start","--prefix","/home/api/nodeDevOpsAPI" ]