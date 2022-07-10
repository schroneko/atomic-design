import React from 'react';
import { action } from '@storybook/addon-actions'
import Notification from './index.js';
import { notifications } from '../../../mock/data.js';

const notification = notifications[0];

export default stories => stories
  .add('デフォルト', () => (
    <Notification program={ notification } onClickDelete={ action('削除ボタンがクリックされました') } />
  ));
