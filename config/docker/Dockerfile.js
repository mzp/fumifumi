FROM kkarczmarczyk/node-yarn:7.2-slim

RUN apt update

RUN apt-get install -y libelf1 --no-install-recommends

WORKDIR /fumifumi
