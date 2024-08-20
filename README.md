# 6ow3idgirl
Official Homepage of 6ow3idgirl


## Environments
Static webpage with Nest, on GKE (Google Kubernetes Engine)


## CI: Build integrations

### Build and Push
As this application would be delivered as OCI container format, we have CI workflows to build & ship automatically to GHCR (GitHub Container Registry).
The source code here will be build automatically by [Cloud Native Buildpacks](https://buildpacks.io) in GitHub Actions,
and you can see container images as [GitHub Packages in this repository](https://github.com/hwakabh/6ow3idGirl/pkgs/container/6ow3idgirl).

While the workflow definitions are stored in the [`.github/workflows/`](.github/workflows/) directories as GitHub Actions requirements, for the phase of Build and Push container image, the [`.github/workflows/publish.yaml`](.github/workflows/publish.yaml) has its resposibilities.

### Releases
Also this application has been controlled under the concepts of release automations with [`release-please`](https://github.com/googleapis/release-please-action).
The release PR would be automatically synced by the updates of code basis, and you can see its [release in GitHub](https://github.com/hwakabh/6ow3idGirl/releases).


## Running and debug locally

### Setup Node.js environment

Install specific version of Node.js, where runtime definitions are in `package.json`.
As this repository based on creating virtual environment with [`nodebrew` version manager](https://github.com/hokaccha/nodebrew), please follow the instructions to install `nodebrew` command on your local environment in the link.

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


## License

MIT
