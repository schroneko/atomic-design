import React from 'react';
import Img from './index.js';

export default stories => stories
  .add('デフォルト', () => <Img src="/mock/images/img01.jpg" width="128"
height="72" />);
