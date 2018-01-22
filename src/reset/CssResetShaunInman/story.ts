import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import CssResetShaunInman from '.';
import ShowDocs from '../../../.storybook/ShowDocs'

storiesOf('CSS resets/CssResetShaunInman', module)
  .add('Documentation', () => h(ShowDocs, {name: 'reset/CssResetShaunInman'}))
  .add('Example', () =>
    h(CssResetShaunInman)
  );
