# fumi\*fumi
[![Build status](https://g.codefresh.io/api/badges/build?branch=master&repoName=fumifumi&repoOwner=mzp&pipelineName=spec&accountName=mzp)](https://g.codefresh.io/repositories/mzp/fumifumi/builds?filter=trigger:build)

fumi\*fumi is web app to manage ebooks, especially comic magazine. It imports magazines, splits these, and merges with same author.

![](https://raw.githubusercontent.com/mzp/fumifumi/master/docs/screenshot.png)

## Build

### Development

```sh
docker-compose build

# prepare dependencies
docker-compose run js yarn install
docker-compose run app bundle
docker-compose run app ./bin/rails db:setup

# launch app/job/js container
dockre-compose up app job js
```

### Deployment
See [#10](https://github.com/mzp/fumifumi/pull/10).

## Usage
TBD

## LICENSE
MIT LICENSE

## Acknowledge
### `spec/fixtures/files/saint_oniisan.epub`
[聖☆おにいさん 第1話「ブッダの休日」](http://morningmanga.com/st023cc/) by 中村光 is licensed under a [Creative Commons 表示 - 改変禁止 2.1 日本 License](https://creativecommons.org/licenses/by-nd/2.1/jp/).
