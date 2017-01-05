FROM ruby:2.4.0

RUN apt-get update

RUN apt-get install -y mysql-client --no-install-recommends

RUN bundle config --global frozen 1

RUN mkdir -p /usr/src/app

COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app

WORKDIR /usr/src/app

RUN bundle --without development test
COPY . /usr/src/app

EXPOSE 3000
CMD [ 'bin/launch' ]
