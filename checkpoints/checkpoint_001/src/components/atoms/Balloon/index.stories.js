/*
訂正：紙面掲載のコードにて、
import HoverTipInteraction, { Tip } from '../HoverTipInteraction/index.js';
という記述がありますが、この 1 行は必要ありません。
代わりに BalloonTip コンポーネントのインポートが必要です。
お手数ですが置き替えて進めてください。
*/

import React from 'react';
import Balloon from './index.js';

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>左上から 200px に配置</Balloon>);
