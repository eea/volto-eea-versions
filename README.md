# volto-eea-versions

[![Releases](https://img.shields.io/github/v/release/eea/volto-eea-versions)](https://github.com/eea/volto-eea-versions/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-versions%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-versions/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-versions%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-versions/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-versions-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-versions-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-eea-versions with Docker

      git clone https://github.com/eea/volto-eea-versions.git
      cd volto-eea-versions
      make
      make start

Go to http://localhost:3000

### Add volto-eea-versions to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-eea-versions"
   ],

   "dependencies": {
       "@eeacms/volto-eea-versions": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-eea-versions
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-eea-versions/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-eea-versions/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-eea-versions/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
Funding

[European Environment Agency (EU)](http://eea.europa.eu)
