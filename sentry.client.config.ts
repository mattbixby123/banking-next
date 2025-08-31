// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://365038f22298def2b08cec02856dde8a@o4507742874501120.ingest.us.sentry.io/4507742876205056",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Only include minimal integrations to avoid DOM conflicts
  integrations: [
    Sentry.breadcrumbsIntegration(),
    Sentry.globalHandlersIntegration(),
    // Explicitly exclude browser integrations that instrument the DOM
  ],

  // Disable automatic session tracking
  autoSessionTracking: false,

  // Disable automatic error capturing that might conflict
  beforeSend(event) {
    // Filter out errors that might be from Plaid's Sentry instance
    if (event.exception?.values?.[0]?.value?.includes('simulateEvent') || 
        event.exception?.values?.[0]?.value?.includes('Object Not Found Matching Id')) {
      return null; // Don't send these conflicting errors
    }
    return event;
  },
});