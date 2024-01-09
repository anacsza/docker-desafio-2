FROM node:15

WORKDIR /usr/src/app

RUN apt-get clean

RUN apt-get install -y apt-transport-https 

RUN apt-get install -y wget

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#aguarda a aplicacao subir
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD [ "node", "index.js" ]