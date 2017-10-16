import React from 'react'
import { storiesOf } from '@storybook/react'

import { Basic, Simple, Themed, FullScreen } from './dashboard'
import { SimpleModal } from './modal'

storiesOf('Dashboard', module)
  .add('basic', () => <Basic />)
  .add('simple routes', () => <Simple />)
  .add('themed', () => <Themed />)
  .add('fullscreen', () => <FullScreen />)

storiesOf('Modal', module).add('simple', () => <SimpleModal />)
