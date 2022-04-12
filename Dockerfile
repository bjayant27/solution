FROM python:3.8-slim-buster

WORKDIR /usr/src/app

ADD src .

RUN useradd -ms /bin/bash appuser

USER appuser

CMD [ "python", "./webserver.py" ]