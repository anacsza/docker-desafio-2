FROM node:15

WORKDIR /usr/src/app

RUN apt-get clean

RUN apt-get install -y apt-transport-https 

RUN apt-get install -y wget

COPY package.json /usr/src/app

COPY index.js /usr/src/app

RUN npm install

RUN chown -R node:node /usr/src/app

#aguarda a aplicacao subir
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz