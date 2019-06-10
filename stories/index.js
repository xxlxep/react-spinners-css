import React from 'react';
import { storiesOf } from '@storybook/react';
import { Elipse, Ripple, Spinner } from '../src';

storiesOf('Spinners', module)
  .add('Elipse', () => <Elipse />)
  .add('Ripple', () => <Ripple />)
  .add('Spinner', () => <Spinner />);
