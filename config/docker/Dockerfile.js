FROM kkarczmarczyk/node-yarn:7.4-slim

RUN apt update

RUN apt-get install -y libelf1 git --no-install-recommends

RUN yarn global add flow-typed

RUN flow-typed update-cache

WORKDIR /fumifumi
