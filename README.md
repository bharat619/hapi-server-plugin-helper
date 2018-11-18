
![npm (scoped)](https://img.shields.io/npm/v/hapi-server-plugin-helper.svg)

![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/hapi-server-plugin-helper.svg)


![Packagist](https://img.shields.io/packagist/l/doctrine/hapi-server-plugin-helper.svg)

Description#
A package to register all the Hapi plugin at a single point.

Install#
```
npm install hapi-server-plugin-helper
```
<br/>

Usage#
Suppose if you have two or more plugins. Define the plugins and its options, and pass the plugins and options as array.

```
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