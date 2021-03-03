import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
  beaconUrl: 'http://localhost:9411/api/v2/spans',
  debug: true,
  allowInsecureBeacon: true,
  app: 'splunk-otel-web-example-npm',

  // uncomment to start sending to Splunk RUM backend
  // beaconUrl: 'https://rum-ingest.signalfx.com/api/v2/spans',
  // rumAuth: 'ABC123...789',
});
