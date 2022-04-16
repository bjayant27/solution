FROM node:latest

WORKDIR /usr/src/app

ADD src .

RUN useradd -ms /bin/bash appuser

USER appuser

EXPOSE 8080

CMD [ "node", "./webserver.js" ]