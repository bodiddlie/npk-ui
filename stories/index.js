import React from 'react'
import { storiesOf } from '@storybook/react'

import { Basic, Simple, Themed } from './dashboard'

storiesOf('Dashboard', module)
  .add('basic', () => <Basic />)
  .add('simple routes', () => <Simple />)
  .add('themed', () => <Themed />)
