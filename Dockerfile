FROM fusioncomau/alpine-node-git:6.9
MAINTAINER Jeremy MOREAU

RUN mkdir /home/api \
&& git clone https://github.com/mimir02/nodeDevOpsAPI.git \
&& cd nodeDevOpsAPI \
&& git checkout docker-prod

RUN npm install
RUN export NODE_ENV=production
RUN npm start


WORKDIR /home/api