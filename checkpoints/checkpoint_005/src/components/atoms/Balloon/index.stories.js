/*
訂正：紙面掲載のコードにて、
import { withStyle } from '../../utils/decorators.js';
という記述がありますが、この 1 行は必要ありません。
代わりに、
import { withNotes } from '@storybook/addon-notes';
と記述して、withNotes のインポートが必要です。
お手数ですが置き替えて進めてください。
*/

import React from 'react';
import Balloon, { BalloonTip } from './index.js';
import { TrashCanIcon } from '../Icon/index.js';
import { withStyle } from '../../utils/decorators.js';

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>左上から 200px に配置</Balloon>)
  .add('アイコンラベル', () => <Balloon><TrashCanIcon /></Balloon>)
  .add('絵文字', () => <Balloon>❌</Balloon>)
  .add('バルーンチップ', () => withStyle({ marginTop: '50px' })(
    <p>ここに<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>を表示</p>
  ));
