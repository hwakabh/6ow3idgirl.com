# 6ow3idgirl
Official Homepage of 6ow3idgirl

***

## Environments
TBD

***

## Build integrations
TBD

***

## Running and debug locally

- Install `nodebrew`
  - Install specific version of Node.js
    - `nodebrew install v13.12.0`
    - `nodebrew use v13.12.0`
  - Note after installation of nodebrew, we can use `node` & `npm` commands
    - Please make sure of verifying your Node.js version with the command `node --version`
  - As you're using another Node.js version controlling systems, like `nvm` or `nodist`, please official references of them
- Setting up required packages with `npm
  - `npm install`
  - `npm list`

- Run with local web server
  - `node bin/www`
    - The default ports for Node.js use is `TCP/3000`
  - If you've already use the port, you can modify them in `bin/www`

```javascript
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

```

***

## License

- This application is licensed by MIT License since basically using Node.js.
