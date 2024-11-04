/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'
import * as path from 'path'
import { emailChannel } from '../alert-channels'
import { websiteGroup } from './website-group.check'

const alertChannels = [emailChannel]

new BrowserCheck('https-wikipedia-com', {
  name: 'https://wikipedia.com',
  alertChannels,
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-1'],
  tags: [],
  sslCheckDomain: '',
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  code: {
    entrypoint: './https-wikipedia-com.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})


