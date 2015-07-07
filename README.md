# Run as a standalone web app

```
npm start
```

This starts an express server on port 3000, with a proxy to the webpack-dev-server running on 3333. Provides hot-reload.

# Run as a production web app

```
NODE_ENV=production webpack -p --config webpack.production.config.js
NODE_ENV=production npm start
```

Server runs on port 5000 and is serving everything from public/
Port 5000 was used because 8080 doesn't work on Mavericks with Cisco installed

# Run as an electron app
webpack -p --config webpack.electron.config.js
electron .
