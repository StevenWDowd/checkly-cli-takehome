import { URL } from 'node:url'
import {
  SmsAlertChannel,
  EmailAlertChannel,
  SlackAlertChannel,
  WebhookAlertChannel
} from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

// export const smsChannel = new SmsAlertChannel('sms-channel-1', {
//   phoneNumber: '',
//   ...sendDefaults
// })

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: '',
  ...sendDefaults
})

// export const slackChannel = new SlackAlertChannel('slack-channel-1', {
//   url: new URL(''),
//   channel: '',
//   ...sendDefaults
// })

// export const webhookChannel = new WebhookAlertChannel('webhook-channel-1', {
//   name: 'Pushover webhook',
//   method: 'POST',
//   url: new URL('https://webhook.site/ddead495-8b15-4b0d-a25d-f6cda4144dc7'),
//   template: `{
//     "token":"FILL_IN_YOUR_SECRET_TOKEN_FROM_PUSHOVER",
//     "user":"FILL_IN_YOUR_USER_FROM_PUSHOVER",
//     "title":"{{ALERT_TITLE}}",
//     "html":1,
//     "priority":2,
//     "retry":30,
//     "expire":10800,
//     "message":"{{ALERT_TYPE}} {{STARTED_AT}} ({{RESPONSE_TIME}}ms) {{RESULT_LINK}}"
//   }`,
//   ...sendDefaults
// })
