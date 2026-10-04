const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const filename = require('webpack-dev-middleware/lib/GetFilenameFromUrl');
const root = path.resolve('test-output');
const compiler = {outputPath: root};
test('normal bundles, query strings and publicPath boundaries resolve', () => {
 assert.equal(filename('/assets/',compiler,'/assets/bundle.js?x=1'),path.join(root,'bundle.js'));
 assert.equal(filename('/assets',compiler,'/assets/bundle.js'),path.join(root,'bundle.js'));
 assert.equal(filename('/assets',compiler,'/assets'),root);
 assert.equal(filename('/assets/',compiler,'/assets/hello%20world.js'),path.join(root,'hello world.js'));
});
test('encoded traversal and non-slash publicPath bypass cannot escape output root', () => {
 for(const prefix of ['/assets/','/assets'])for(const url of ['/assets/../secret','/assets/..%2fsecret','/assets/%2e%2e/secret','/assets/%2e%2e%2fsecret','/assets../secret','/assets/..%5csecret','/assets/%00secret','/assets/%E0%A4%A'])assert.equal(filename(prefix,compiler,url),false,url);
 assert.equal(filename('/assets/',compiler,'/different/bundle.js'),false);
});
test('multiple compilers and absolute publicPath hosts remain supported', () => {
 const multi={compilers:[{options:{output:{publicPath:'/a/'}},outputPath:root},{options:{output:{publicPath:'/b/'}},outputPath:path.join(root,'b')}]};
 assert.equal(filename('/',multi,'/b/main.js'),path.join(root,'b/main.js'));
 assert.equal(filename('http://example.test/assets/',compiler,'http://other.test/assets/main.js'),false);
 assert.equal(filename('http://example.test/assets/',compiler,'http://example.test/assets/main.js'),path.join(root,'main.js'));
});
