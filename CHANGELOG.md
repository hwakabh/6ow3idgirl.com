# Changelog

## [2.0.0](https://github.com/hwakabh/6ow3idgirl.com/compare/5cfb6e09954376d5cb9cc1e187fe3631fac2f3c1...v2.0.0) (2025-01-16)


### ⚠ BREAKING CHANGES

* renamed package name in lockfile.
* renamed Node.js project name.
* removed express.js related files.
* overlayed Nest with TypeScript on current Express.js app.

### Features

* added default values of database credentials. ([7dc7ab1](https://github.com/hwakabh/6ow3idgirl.com/commit/7dc7ab1ace5fbd9bcc1847e8fcc27703d143efe9))
* added entities for releases of music/movies. ([268e23f](https://github.com/hwakabh/6ow3idgirl.com/commit/268e23fd09bad86e4c6b609868ef9e201eff6f1c))
* added features for sending email with axios in mailService. ([3a44b95](https://github.com/hwakabh/6ow3idgirl.com/commit/3a44b9531f22f543d83e4cb15551b82571a0c7d3))
* added fixtures-ts-node-commonjs and Music fixtures for tests. ([7c592c1](https://github.com/hwakabh/6ow3idgirl.com/commit/7c592c1b439afca0135a6ab54404f91571a5d05a))
* added routes of health check. ([69c57f7](https://github.com/hwakabh/6ow3idgirl.com/commit/69c57f7f23a53b71021c6b899c2653a63c63109b))
* added TypeORM to application. ([9d0a3b4](https://github.com/hwakabh/6ow3idgirl.com/commit/9d0a3b454b3966438d80392c3615f5411a65c589))
* bind services to controller/modules with its entities. ([50f0a43](https://github.com/hwakabh/6ow3idgirl.com/commit/50f0a437eccd8ef485e40b4d0c62ed9b8bcc7097))
* **build:** added sealed-secrets and enabled to fetch them from applications. ([8c647d3](https://github.com/hwakabh/6ow3idgirl.com/commit/8c647d391c65877afd88b858fbe4ddf64a09438b))
* **ci:** added config of Semantic PR. ([3032036](https://github.com/hwakabh/6ow3idgirl.com/commit/30320360d92d776179c5a7bbb8efe3fb43778e76))
* **ci:** added publish CI workflows. ([52de42a](https://github.com/hwakabh/6ow3idgirl.com/commit/52de42af7f3de6fab9bed1dc05a7ea0cb4194499))
* **deploy:** added helmet with TypeScript. ([937a392](https://github.com/hwakabh/6ow3idgirl.com/commit/937a3923361f9b469f47fd60a24b9a1c34d19bac))
* enabled to call controller endpoint for sending mail from view. ([21cb3e9](https://github.com/hwakabh/6ow3idgirl.com/commit/21cb3e9011403ffbd384373eab4ad10cf5225b1e))
* enabled to fetch user data in controllers. ([3319ace](https://github.com/hwakabh/6ow3idgirl.com/commit/3319ace3c55d053297a1306b3e795b0eea7e005e))
* finalized fixture data. ([bfad57f](https://github.com/hwakabh/6ow3idgirl.com/commit/bfad57f18d52e9f5ad596e487abf87fc1c880953))
* **model:** added configs and migrations for TypeORM v0.3 or later. ([ba0f101](https://github.com/hwakabh/6ow3idgirl.com/commit/ba0f10173048a66545bc8cd878d6e3ad4d7221f3))
* overlayed Nest with TypeScript on current Express.js app. ([cab0036](https://github.com/hwakabh/6ow3idgirl.com/commit/cab0036f510d633292d0a7776a30e8f3f7e21477))
* removed express.js related files. ([70bb66c](https://github.com/hwakabh/6ow3idgirl.com/commit/70bb66c97154bb5d5d9f5c6a70109b63445d08a7))
* renamed Node.js project name. ([a968592](https://github.com/hwakabh/6ow3idgirl.com/commit/a968592b2e28e1f7ec55b5cb42d716a635c7e6e8))
* renamed package name in lockfile. ([9858acd](https://github.com/hwakabh/6ow3idgirl.com/commit/9858acd01ff3219d2a9313f1b277706b957dc07b))
* **secutiry:** fetched database credentials from envars. ([624f197](https://github.com/hwakabh/6ow3idgirl.com/commit/624f197eb3a4816227590090575b242e9d9cab1f))
* **services:** added Read/List for movie entity. ([93ff75c](https://github.com/hwakabh/6ow3idgirl.com/commit/93ff75c47185082194310ec3a7aa16a2823c9874))
* **services:** added service skeleton for sending email. ([c576437](https://github.com/hwakabh/6ow3idgirl.com/commit/c5764371c9b3609329230b13cea43b5eae4be05e))
* **types:** added models for responses with application root. ([46d72a3](https://github.com/hwakabh/6ow3idgirl.com/commit/46d72a38df2b7081dee6a2f2565f8dcc726c7abe))
* **views:** added pug-loops for render responses from services. ([3441529](https://github.com/hwakabh/6ow3idgirl.com/commit/344152906be71a043aac51f90ea5872aba3b1494))


### Bug Fixes

* **app:** replaced template engine with pug. ([803f9c2](https://github.com/hwakabh/6ow3idgirl.com/commit/803f9c2e44c2200e589cd60b81b8b03adffb567f))
* **ci:** detection errors with adding environmental variables. ([e7fc428](https://github.com/hwakabh/6ow3idgirl.com/commit/e7fc4285c4c5ee96d7a9ab01ce0fa749504af428))
* **ci:** removed upper case from tag name. ([3908837](https://github.com/hwakabh/6ow3idgirl.com/commit/3908837b9cb13bd676492f0bf6f643a70125e323))
* **ci:** updated release-please configs for resolving versioning. ([cb4b55c](https://github.com/hwakabh/6ow3idgirl.com/commit/cb4b55c8810afbb49901d6ba1666293f512568ba))
* **deploy:** enabled to fetch application port via PORT envars. ([bacc4c3](https://github.com/hwakabh/6ow3idgirl.com/commit/bacc4c3bc28d0935651a2d6ae4125eed5c69c2bc))
* **deploy:** npm-scripts and optimized nestjs app on heroku. ([fd22fbc](https://github.com/hwakabh/6ow3idgirl.com/commit/fd22fbca624d5d96f6c3137760c22c9abcc4f0b2))
* **deploy:** updated postdeploy commands and required envars. ([84ae645](https://github.com/hwakabh/6ow3idgirl.com/commit/84ae6458c7f8318b0a9faa48f3a1449f7bf2cbf6))
* **deps:** made @nestjs/cli as dependencies instead of devDependencies. ([773ba1c](https://github.com/hwakabh/6ow3idgirl.com/commit/773ba1cd7f736067c982d601cdc99343459eb812))
* **models:** application start with migration operations. ([953b862](https://github.com/hwakabh/6ow3idgirl.com/commit/953b8621bb085e2b73dc2d0961aec1bc991ae30e))

## 1.3.0 (2024-08-20)


### Features

* added entities for releases of music/movies. ([268e23f](https://github.com/hwakabh/6ow3idGirl/commit/268e23fd09bad86e4c6b609868ef9e201eff6f1c))
* added fixtures-ts-node-commonjs and Music fixtures for tests. ([7c592c1](https://github.com/hwakabh/6ow3idGirl/commit/7c592c1b439afca0135a6ab54404f91571a5d05a))
* added TypeORM to application. ([9d0a3b4](https://github.com/hwakabh/6ow3idGirl/commit/9d0a3b454b3966438d80392c3615f5411a65c589))
* bind services to controller/modules with its entities. ([50f0a43](https://github.com/hwakabh/6ow3idGirl/commit/50f0a437eccd8ef485e40b4d0c62ed9b8bcc7097))
* finalized fixture data. ([bfad57f](https://github.com/hwakabh/6ow3idGirl/commit/bfad57f18d52e9f5ad596e487abf87fc1c880953))
* **model:** added configs and migrations for TypeORM v0.3 or later. ([ba0f101](https://github.com/hwakabh/6ow3idGirl/commit/ba0f10173048a66545bc8cd878d6e3ad4d7221f3))
* **services:** added Read/List for movie entity. ([93ff75c](https://github.com/hwakabh/6ow3idGirl/commit/93ff75c47185082194310ec3a7aa16a2823c9874))
* **views:** added pug-loops for render responses from services. ([3441529](https://github.com/hwakabh/6ow3idGirl/commit/344152906be71a043aac51f90ea5872aba3b1494))


### Bug Fixes

* **models:** application start with migration operations. ([953b862](https://github.com/hwakabh/6ow3idGirl/commit/953b8621bb085e2b73dc2d0961aec1bc991ae30e))

## 1.2.0 (2024-03-20)


### Features

* **build:** added sealed-secrets and enabled to fetch them from applications. ([8c647d3](https://github.com/hwakabh/6ow3idGirl/commit/8c647d391c65877afd88b858fbe4ddf64a09438b))
* enabled to call controller endpoint for sending mail from view. ([21cb3e9](https://github.com/hwakabh/6ow3idGirl/commit/21cb3e9011403ffbd384373eab4ad10cf5225b1e))
* enabled to fetch user data in controllers. ([3319ace](https://github.com/hwakabh/6ow3idGirl/commit/3319ace3c55d053297a1306b3e795b0eea7e005e))


### Bug Fixes

* **deps:** made @nestjs/cli as dependencies instead of devDependencies. ([773ba1c](https://github.com/hwakabh/6ow3idGirl/commit/773ba1cd7f736067c982d601cdc99343459eb812))

## 1.1.0 (2024-03-20)


### Features

* added features for sending email with axios in mailService. ([3a44b95](https://github.com/hwakabh/6ow3idGirl/commit/3a44b9531f22f543d83e4cb15551b82571a0c7d3))
* **deploy:** added helmet with TypeScript. ([937a392](https://github.com/hwakabh/6ow3idGirl/commit/937a3923361f9b469f47fd60a24b9a1c34d19bac))
* **services:** added service skeleton for sending email. ([c576437](https://github.com/hwakabh/6ow3idGirl/commit/c5764371c9b3609329230b13cea43b5eae4be05e))
* **types:** added models for responses with application root. ([46d72a3](https://github.com/hwakabh/6ow3idGirl/commit/46d72a38df2b7081dee6a2f2565f8dcc726c7abe))

## 1.0.0 (2024-03-08)


### ⚠ BREAKING CHANGES

* renamed package name in lockfile.
* renamed Node.js project name.
* removed express.js related files.
* overlayed Nest with TypeScript on current Express.js app.

### Features

* added routes of health check. ([69c57f7](https://github.com/hwakabh/6ow3idGirl/commit/69c57f7f23a53b71021c6b899c2653a63c63109b))
* **ci:** added config of Semantic PR. ([3032036](https://github.com/hwakabh/6ow3idGirl/commit/30320360d92d776179c5a7bbb8efe3fb43778e76))
* **ci:** added publish CI workflows. ([52de42a](https://github.com/hwakabh/6ow3idGirl/commit/52de42af7f3de6fab9bed1dc05a7ea0cb4194499))
* overlayed Nest with TypeScript on current Express.js app. ([cab0036](https://github.com/hwakabh/6ow3idGirl/commit/cab0036f510d633292d0a7776a30e8f3f7e21477))
* removed express.js related files. ([70bb66c](https://github.com/hwakabh/6ow3idGirl/commit/70bb66c97154bb5d5d9f5c6a70109b63445d08a7))
* renamed Node.js project name. ([a968592](https://github.com/hwakabh/6ow3idGirl/commit/a968592b2e28e1f7ec55b5cb42d716a635c7e6e8))
* renamed package name in lockfile. ([9858acd](https://github.com/hwakabh/6ow3idGirl/commit/9858acd01ff3219d2a9313f1b277706b957dc07b))


### Bug Fixes

* **app:** replaced template engine with pug. ([803f9c2](https://github.com/hwakabh/6ow3idGirl/commit/803f9c2e44c2200e589cd60b81b8b03adffb567f))
* **ci:** detection errors with adding environmental variables. ([e7fc428](https://github.com/hwakabh/6ow3idGirl/commit/e7fc4285c4c5ee96d7a9ab01ce0fa749504af428))
* **ci:** removed upper case from tag name. ([3908837](https://github.com/hwakabh/6ow3idGirl/commit/3908837b9cb13bd676492f0bf6f643a70125e323))

## 0.1.0 (2024-03-08)


### Features

* added routes of health check. ([69c57f7](https://github.com/hwakabh/6ow3idGirl/commit/69c57f7f23a53b71021c6b899c2653a63c63109b))
* **ci:** added config of Semantic PR. ([3032036](https://github.com/hwakabh/6ow3idGirl/commit/30320360d92d776179c5a7bbb8efe3fb43778e76))
* **ci:** added publish CI workflows. ([52de42a](https://github.com/hwakabh/6ow3idGirl/commit/52de42af7f3de6fab9bed1dc05a7ea0cb4194499))


### Bug Fixes

* **app:** replaced template engine with pug. ([803f9c2](https://github.com/hwakabh/6ow3idGirl/commit/803f9c2e44c2200e589cd60b81b8b03adffb567f))
* **ci:** detection errors with adding environmental variables. ([e7fc428](https://github.com/hwakabh/6ow3idGirl/commit/e7fc4285c4c5ee96d7a9ab01ce0fa749504af428))
* **ci:** removed upper case from tag name. ([3908837](https://github.com/hwakabh/6ow3idGirl/commit/3908837b9cb13bd676492f0bf6f643a70125e323))
