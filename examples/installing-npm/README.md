# Installing via NPM

## Checking out this example
Run `npm run temp-backend` to start in-memory instance of Zipkin server to receive telemetry data (requires Docker).

Run `npm start` to start the example app (requires another shell tab/instance).

Open <http://localhost:9511/> to open the app and start producing telemetry data.

Open <http://localhost:9411/> to explore telemetry data.

## Sending the data to Splunk Real User Monitoring <a name="backend-config"></a>
Add `rumAuthToken` and change `beaconUrl` in the instrumentation initialisation object:
```js
SplunkOtelWeb.init({
  ...
  beaconUrl: 'https://rum-ingest.signalfx.com/api/v2/spans',
  rumAuthToken: 'xxx', // TODO: describe how to get the token
  ...
});
```

Navigate to <https://app.signalfx.com/o11y/> to see your data.

## Installing via NPM in your own app

```bash
npm install @splunk/splunk-otel-web
```
Note: in modern versions of NPM, installed packages are added to `package.json` by default.

Add a file, which will initialise instrumentation (in our case `./src/instrumentation.js`):
```js
import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
  // we will provision a temporary local backend for testing in a few steps
  beaconUrl: 'http://localhost:9411/api/v2/spans',
  allowInsecureBeacon: true,
  app: 'splunk-otel-web-example-npm',
});
```

Import the newly created file in your root `.js` file (in our case it's `./src/index.js`) **above other imports**:
```js
import './instrumentation.js';
/* other imports */
```

Start your application and it will begin sending telemetry data. For sanity testing of produced telemetry data, you can
use `zipkin-slim`, a customised, small instance of Zipkin server with in-memory storage.
```bash
npm run temp-backend
```
Note: this command requires Docker and will create an unnamed container, remember to purge containers after you're done
using them.

Open <http://localhost:9411/> to verify that Zipkin server is running, you should see its empty UI.

Open your app in the browser and perform some actions in it to produce telemetry data.

Go back to <http://localhost:9411/> to verify that the data is being received.

To start sending telemetry data to our backend, follow the instructions in the
[backend configuration section](#backend-config).
