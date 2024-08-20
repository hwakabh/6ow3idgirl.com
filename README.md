# 6ow3idgirl
Official Homepage of 6ow3idgirl

***

## Environments
Static webpage with Nest, on GKE (Google Kubernetes Engine)

***

## Build integrations
TBD

***

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
# by default, localhost:8080 would be listened as application entrypoint
$ npm run start

# also you can confirm application bootup with /healthz endpoint
$ curl localhost:8080/healthz ;
{"status":"ok"}
```

***

## License

MIT
