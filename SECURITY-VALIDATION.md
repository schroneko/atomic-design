# Security patch validation

Storybook and @storybook/react-vite are updated together to 10.6.2. The reported
Storybook issues concern its development server; a static build is a separate
execution path. Both built stories were rendered in an offline headless browser.

The dependency audit additionally identified Backstop tool dependencies:
body-parser before 1.20.9 and Zod before 4.6.6. Their resolutions are patched.
The Zod change crosses a major version and emits a Yarn compatibility warning;
real Puppeteer CDP and WebDriver BiDi sessions were tested for page creation,
DOM evaluation, clicking and screenshots. This is compatibility coverage for
the actual tool stack, not a claim that every BiDi command was tested.

```sh
yarn install --frozen-lockfile
yarn test
STORYBOOK_DISABLE_TELEMETRY=1 yarn build
yarn audit
yarn test:browser-engines
```

Browser tests use Puppeteer's installed browser by default. To use an existing
compatible headless Chrome, set PUPPETEER_EXECUTABLE_PATH to its executable.
They load synthetic inline content only. No baseline approval or existing
visual snapshots are changed. Hosted CI and default-branch alert closure remain
separate pending verification; a pushed draft PR alone does not resolve alerts.
