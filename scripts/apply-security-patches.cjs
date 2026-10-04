const { spawnSync } = require("node:child_process");
try { require.resolve("webpack-dev-middleware"); } catch (error) { if (error.code === "MODULE_NOT_FOUND") process.exit(0); throw error; }
const result = spawnSync(process.execPath, [require.resolve("patch-package/dist/index.js"), "--error-on-fail"], { stdio: "inherit" });
process.exit(result.status ?? 1);
