# Reproducible security patches

The patched upstream webpack-dev-middleware requires Webpack 5, while this application/Storybook uses Webpack 3. The retained patch decodes request paths before resolution, requires a complete publicPath segment, and verifies containment within the compiler output directory. It rejects encoded traversal, malformed encodings, null bytes and backslashes. The original package remains 1.12.2, so GitHub version-based alerts for GHSA-wr3j-pwj9-hqq6 and GHSA-g84c-rxfj-3j2c will remain until an upstream-compatible upgrade is possible; this is a code mitigation, not a claimed registry-version fix.

Normal dependency installation applies the committed patches through `postinstall`. Installations using `--ignore-scripts` must run `npm run postinstall` before build/start. Patch failures stop installation. The patch hook skips absent target packages (for example when omitted development dependencies do not install the middleware).

Run `npm run test:security` to check the regression and ordinary behavior. Keep package versions and patch files synchronized when upgrading. These changes do not dismiss alerts or change workflow/security permissions.
