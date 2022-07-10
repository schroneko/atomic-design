// @flow

import { storiesOf } from '@storybook/react';
import type { Story } from '@storybook/react';
import type { Context } from 'storybook-directory-chapters';

interface Data {
  dirs: string[];
  stories?: Story;
}

interface Cursors {
  increase: number;
  decrease: number;
}

const initData: Data = { dirs: [] };

export default function loadDirectories(context: Context) {
  context.keys().reduce((acc, c) => {
    const dirs = getDirs(c);

    if (!dirs.length) return acc;
  
    let stories;
    let lastDirs = acc.dirs.concat();

    if (acc.stories) {
      stories = Object.assign({}, acc.stories);
    } else {
      stories = createStories(dirs[0]);
      lastDirs = [dirs[0]];
    }

    // check the diff between the current path and the previous path
    let cursorsToMove = cursorsToPath(lastDirs, dirs);

    // check how many chapters to end
    stories = endChapters(stories, cursorsToMove.decrease);

    // if top level directories change, create new stories and reset the cursors
    if (shouldCreateStories(lastDirs, dirs)) {
      stories = createStories(dirs[0]);
      lastDirs = [dirs[0]];
      cursorsToMove = cursorsToPath(lastDirs, dirs);
    }

    // check how many chapters to add
    stories = addChapters(stories, cursorsToMove.increase,
      dirs.slice(lastDirs.length - cursorsToMove.decrease));
  
    stories = context(c)(stories);
    return { dirs, stories };
  }, initData);
}

function getDirs(path: string): string[] {
  return path.replace(/..?\//, '').split('/').reverse().slice(1).reverse();
}

function shouldCreateStories(a: string[], b: string[]): boolean {
  return a[0] !== b[0];
}

function createStories(name: string): Story {
  return storiesOf(name, module);
}

function addChapters(stories: Story, i: number, dirs: string[]): Story {
  let name;
  switch (i) {
    case 0:
      return stories;
    default:
      name = dirs.concat().reverse()[i - 1];
      return addChapters(stories.chapter(name), i - 1, dirs);
  }
}

function endChapters(stories: Story, i: number): Story {
  switch (i) {
    case 0:
      return stories;
    default:
      return endChapters(stories.endOfChapter(), i - 1);
  }
}

function cursorsToPath(a: string[], b: string[]): Cursors {

  const dt = a.length - b.length;
  const min = Math.min(a.length, b.length);
  const max = Math.max(a.length, b.length);

  const cursors: Cursors = { increase: 0, decrease: 0 };

  for (let i = 0; i < min; i++) {
    if (a[i] === b[i]) continue;

    if (dt <= 0) {
      // got larger or the same
      // it increases from the diff point even when the lengths are the same
      cursors.increase = max - i;
    }
    // either got larger or the same or got smaller
    cursors.decrease = min - i;
    return cursors;
  }
  
  if (dt < 0) {
    // got larger
    cursors.increase = max - min;
  } else if (dt > 0) {
    // got smaller
    cursors.decrease = max - min; // (min - max) * -1
  }
  return cursors;
}
