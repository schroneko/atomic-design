import React from 'react';
import { action } from '@storybook/addon-actions';
import { TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon } from './index.js';

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon />)
  .add('ChevronRightIcon', () => <ChevronRightIcon />)
  .add('SearchIcon', () => <SearchIcon />)
  .add('SettingsIcon', () => <SettingsIcon />)
  .add('クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました') } />);
