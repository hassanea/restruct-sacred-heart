import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://2c55121e1f48ec7bc4be09354ee092bc@o4508521183772672.ingest.us.sentry.io/4511069002596352",
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending of user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nuxt/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
