<h1 align="center">storybook-directory-chapters</h1>

<h5 align="center">A loader for <a href="https://storybook.js.org/">Storybook 3.0</a> using <a href="https://github.com/sm-react/storybook-chapters">@storybook/addon-chapters</a><br />to automatically generate a tree of chapters that mirrors your direcory structure.</h5>

<div align="center">
  <a href="https://circleci.com/gh/ygoto3/storybook-directory-chapters">
    <img src="https://img.shields.io/circleci/project/github/ygoto3/storybook-directory-chapters/master.svg" alt="CircleCI master" />
  </a>
  <a href="https://codecov.io/gh/ygoto3/storybook-directory-chapters">
    <img src="https://img.shields.io/codecov/c/github/ygoto3/storybook-directory-chapters/master.svg" alt="Codecov master" />
  </a>
</div>

<br />

[ [DEMO PAGE](https://ygoto3.github.io/storybook-directory-chapters/) ]

![hierarchical chapters in your Storybook](./assets/storybook-directory-chapters.png)

The loader generates hierarchical chapters in your Storybook like above from directory tree like below.

```sh
.
├── atoms
│   ├── Button
│   │   ├── _stories.js
│   │   └── index.js
│   ├── List
│   │   ├── AnotherList
│   │   │   ├── _stories.js
│   │   │   └── index.js
│   │   ├── ListItem.js
│   │   ├── _stories.js
│   │   └── index.js
│   ├── TextBlock
│   │   ├── _stories.js
│   │   └── index.js
│   └── TextBox
│       ├── _stories.js
│       └── index.js
├── molecules
│   └── SearchForm
│       ├── _stories.js
│       └── index.js
├── organisms
│   ├── Footer
│   │   ├── _stories.js
│   │   └── index.js
│   └── Header
│       ├── _stories.js
│       └── index.js
├── pages
│   └── Portal
│       ├── _stories.js
│       └── index.js
└── templates
    └── PortalTemplate
        ├── _stories.js
        └── index.js
```

(Adapting the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology or a similar kind to design your components, you want to organize your components in several categories.)

## Install

Install storybook-directory-chapters via yarn (or npm).

```sh
$ yarn add storybook-directory-chapters -D
```

`storybook-directory-chapters` requires `@storybook/addon-chapters`, so if you have not installed the addon yet, set it up, too.

## Usage

In your Storybook config, pass `loadDirectories()` a given require context of any directory you want your Storybook's navigation tree to mirror.

```javascript
// .storybook/config.js

import { configure } from '@storybook/react';
import '@storybook/addon-chapters';
import loadDirectories from 'storybook-directory-chapters';

// get a context of any directory you want your Storybook's navigation tree to mirror
const context = require.context('../example', true, /_stories.js$/);

function loadStories() {
  // in loadStories(), pass loadDirectories() the context
  loadDirectories(context);
}

configure(loadStories, module);
```

Under the directory you specified, you can add a story to the generated chapters.

```javascript
// atoms/Button/_stories.js

import React from 'react';

module.exports = stories => (
  stories
  .add('with text', () => (
    <button>Hello button</button>
  ))
  .add('with some emoji', () => (
    <button>😀 😎 👍 💯</button>
  ))
);
```

The stories above will become:

![Stories added to generated chapters](./assets/add-components.png)
