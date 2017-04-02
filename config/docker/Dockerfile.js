FROM mzpi/bucklescript

WORKDIR /home/opam

RUN git clone https://github.com/ocaml/opam-repository.git && \
      opam update && \
      opam install -y merlin ocp-indent utop ppx_variants_conv && \
      rm -rf /home/opam/opam-repository

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
      echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
      apt-get update && \
      apt-get install -y yarn --no-install-recommends && \
      apt-get clean && \
      rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*

WORKDIR /fumifumi
