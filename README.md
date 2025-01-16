# 6ow3idgirl
Official Homepage of 6ow3idgirl \
Developing as static webpage with generic MVC features of Nest.

## Local setups

### Setup Node.js environment
Install specific version of Node.js, where runtime definitions are in `package.json`. \
As this repository based on creating virtual environment with [`nodebrew` version manager](https://github.com/hokaccha/nodebrew), \
please follow the instructions to install `nodebrew` command on your local environment in the link.

Note that after installation of nodebrew, we can use `node` & `npm` commands, and please make sure of verifying your Node.js version with the command `node --version`.
In case you're using another Node.js version controlling systems, like `nvm` or `nodist`, please official references of them

### Setup required packages with npm-scripts and build TypeScript

Since this project is built with Nest, one of the frameworks with TypeScript, we need to transpile source into JavaScript basis.

```shell
# install dependencies
$ npm install
$ npm list

# build Nest application
$ npm run build
```

### Setup MySQL databases
Since this application generally expects MySQL database as Nest model backend, we need to prepare MySQL on your environment for development setup. \
For keeping clean on your local environment, we would expect use containers for preparing MySQL database. \
If you have already been enabled to run `docker` commands as a frontend of its engines, such as Docker Desktop or OrbStack:

```shell
# start MySQL containers with creating database
% docker run -d -e MYSQL_ROOT_PASSWORD="***" -e MYSQL_DATABASE="6ow3idgirl" -p 3306:3306 bitnami/mysql:latest

# Run migrations, this will create tables required by apps
# note that migration process will not create database, so need to create before applying migrations
% npm run typeorm migration:run

# load fixture data
% npm run fixtures
```

### run application
Confirmed that the artifacts are placed in `./dist` directories, then just run:

```shell
# run transpiled applications
# by default, localhost:8080 would be listened as application entrypoint
$ node dist/main.js
```

If you need to run application for development purpose, just run as dev mode:

```shell
$ npm run start

# also you can confirm application bootup with /healthz endpoint
$ curl localhost:8080/healthz ;
{"status":"ok"}
```

## CI & Deployments

### Builds
As this application would be delivered as OCI container format, we have CI workflows to build & ship automatically to GHCR (GitHub Container Registry). \
The source code here will be build automatically by [Cloud Native Buildpacks](https://buildpacks.io) in GitHub Actions, \
and you can see container images as [GitHub Packages in this repository](https://github.com/hwakabh/6ow3idGirl/pkgs/container/6ow3idgirl).

While the workflow definitions are stored in the [`.github/workflows/`](.github/workflows/) directories as GitHub Actions requirements, \
for the phase of Build and Push container image, the [`.github/workflows/publish.yaml`](.github/workflows/publish.yaml) has its responsibilities.

Since we are using Heroku as platform of this application, we use [Heroku Cloud Native Buildpacks](https://github.com/heroku/buildpacks) in GitHub Actions to build & push OCI image, \
and you can pull the contianer images from [GHCR packages](https://github.com/hwakabh/6ow3idgirl.com/pkgs/container/6ow3idgirl).

But please note that the image built by Heroku Cloud Native Buildpacks, `heroku/builder:24`, is not compatible to be used in [Heroku Container Registy](https://devcenter.heroku.com/articles/container-registry-and-runtime), because of [its limitations](https://devcenter.heroku.com/articles/container-registry-and-runtime#known-issues-and-limitations):

> The Heroku Container Registry only supports Docker Image Manifest V2, Schema 2 (application/vnd.docker.distribution.manifest.v2+json).
> It doesn’t support other manifest types, such as OCI Image Manifest (application/vnd.oci.image.manifest.v1+json).

So the image in GHCR is actually different from the ones of running in Heroku platform, and they are stored for other use usecases, such as running on Kubernetes or kind-cluster.

### Deployments
Since Heroku has a great feature, [Automatic Deploy](https://devcenter.heroku.com/articles/github-integration), we will use this for applictaion deployment onto Heroku. \
As described in previous sections, currently we have not used Heroku Container Registry for hosting application, but using general forms of Heroku via GitHub sources.

Regarding databases, we are using [JawsDB](https://www.jawsdb.com) as an equivalent of MySQL for application, which is provided as Heroku addons, so we need to add its credentials via Heroku environmental variables. \
Please check [`app.json`](./app.json) as application definitions for details.

### Releases
Also this application has been controlled under the concepts of release automations with [`release-please`](https://github.com/googleapis/release-please-action). \
The release PR would be automatically synced by the updates of code basis, and you can see its [release in GitHub](https://github.com/hwakabh/6ow3idGirl/releases).


## Configurations (Environment Variables)
For hosting application onto Heroku platform and also for running apps in local environment, there are several configuration options with this applications:

| variables | descriptions | default |
| --- | --- | --- |
| `URL` | The URL of the application itself. This is required for using MVC with Nest | `http://localhost:8080` |
| `MYSQL_HOSTNAME` | Endpoint for accessing MySQL, or its equivalent, instances | n/a |
| `MYSQL_PORT` | Port number for MySQL Database | n/a |
| `MYSQL_DATABASE` | Name of MySQL database for this application | n/a |
| `MYSQL_USERNAME` | Username for MySQL Database | n/a |
| `MYSQL_PASSWORD` | Password for MySQL Database | n/a |

Also this is specific for Nest application, since Heroku buildpacks will set the `NODE_ENV` to production and `NPM_CONFIG_PRODUCTION` flag to `true` by default and installs production dependencies only, this will cause 503 error when accessing application. \
For resolving this, we need to install devDependencies, and set config vars `NPM_CONFIG_PRODUCTION` to `false`.
