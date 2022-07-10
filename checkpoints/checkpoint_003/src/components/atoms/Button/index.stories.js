import React from 'react';
import Button, { PrimaryButton } from './index.js';

export default stories => stories
  .add('デフォルト', () => <Button>デフォルト</Button>)
  .add('プライマリ', () => <PrimaryButton>プライマリ</PrimaryButton>);
