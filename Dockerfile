FROM node:latest

WORKDIR /usr/src/app

ADD src .

RUN useradd -ms /bin/bash appuser

RUN chown -R appuser:appuser /usr/src/app

USER appuser

ENV MYSQL_PASSWORD "${MYSQL_ROOT_PASSWORD}"

EXPOSE 3000

CMD [ "node", "index.js" ]