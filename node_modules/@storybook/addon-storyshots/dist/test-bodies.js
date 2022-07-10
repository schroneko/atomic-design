'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snapshot = exports.multiSnapshotWithOptions = exports.snapshotWithOptions = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.shallowSnapshot = shallowSnapshot;
exports.renderOnly = renderOnly;

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

require('jest-specific-snapshot');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRenderedTree(story, context, _ref) {
  var renderer = _ref.renderer,
      serializer = _ref.serializer,
      rendererOptions = (0, _objectWithoutProperties3.default)(_ref, ['renderer', 'serializer']);

  var currentRenderer = renderer || _reactTestRenderer2.default.create;
  var storyElement = story.render(context);
  var tree = currentRenderer(storyElement, rendererOptions);
  return serializer ? serializer(tree) : tree;
}

var snapshotWithOptions = exports.snapshotWithOptions = function snapshotWithOptions(options) {
  return function (_ref2) {
    var story = _ref2.story,
        context = _ref2.context,
        snapshotFileName = _ref2.snapshotFileName;

    var tree = getRenderedTree(story, context, options);

    if (snapshotFileName) {
      expect(tree).toMatchSpecificSnapshot(snapshotFileName);
    } else {
      expect(tree).toMatchSnapshot();
    }

    if (typeof tree.unmount === 'function') {
      tree.unmount();
    }
  };
};

var multiSnapshotWithOptions = exports.multiSnapshotWithOptions = function multiSnapshotWithOptions(options) {
  return function (_ref3) {
    var story = _ref3.story,
        context = _ref3.context;

    snapshotWithOptions(options)({ story: story, context: context, snapshotFileName: (0, _utils.getSnapshotFileName)(context) });
  };
};

var snapshot = exports.snapshot = snapshotWithOptions({});

function shallowSnapshot(_ref4) {
  var story = _ref4.story,
      context = _ref4.context,
      _ref4$options = _ref4.options,
      renderer = _ref4$options.renderer,
      serializer = _ref4$options.serializer;

  var shallowRenderer = renderer || _shallow2.default.createRenderer();
  var tree = shallowRenderer.render(story.render(context));
  var serializedTree = serializer ? serializer(tree) : tree;
  expect(serializedTree).toMatchSnapshot();
}

function renderOnly(_ref5) {
  var story = _ref5.story,
      context = _ref5.context;

  var storyElement = story.render(context);
  _reactTestRenderer2.default.create(storyElement);
}