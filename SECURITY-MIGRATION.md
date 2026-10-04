# Storybook security migration

Storybook 10 with its Vite builder replaces Storybook 3/Webpack 3 and removes webpack-dev-middleware, including both notified traversal advisories. React 18 renders the same two Balloon stories. CSS modules and the preview reset are retained. Node 22.22.3 or newer is required. Run yarn build-storybook and yarn test:security. The repository contains no original application entrypoint or application unit tests; build now creates the component explorer rather than invoking the absent src/client.js. Backstop scripts remain available.
