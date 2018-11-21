
![npm (scoped)](https://img.shields.io/npm/v/hapi-server-plugin-helper.svg)

<h1>Description</h1>
A simple package, which registers all the plugins at a single point. The package is mainly developed to avoid repetation of code and follow DRY principle.

Please feel free to raise issues for any queries

<h1>Install</h1>

```npm install hapi-server-plugin-helper```

<br/>

<h1>Usage</h1>
Suppose if you have two or more plugins. Define the plugins and its options, and pass the plugins and options as array.

```javascript
import good from 'good';
import disinfect from 'disinfect';

const monitorServerOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            log: '*',
            response: '*'
          }
        ]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ],
    httpReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            error: '*'
          }
        ]
      },
      {
        module: 'good-http',
        args: [
          /** production-url,
            { wreck: {
              headers: {}
            } }* */
        ]
      }
    ]
  }
};


const disinfectOptions = {
  disinfectQuery: true,
  disinfectParams: true,
  disinfectPayload: true
};

export { disinfectOptions, disinfect };


// In your server.js file, invoke registerPlugins method
// First argument takes server instance
// Second argument takes an array of plugins
// Third argument takes an array of options
server = await registerPlugins(
    server,
    [HapiJwtAuth, good, disinfect, currentUser],
    [{}, monitorServerOptions, disinfectOptions, currentUserOptions]
  );
```
