'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNotes = undefined;

var _utilDeprecate = require('util-deprecate');

var _utilDeprecate2 = _interopRequireDefault(_utilDeprecate);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _react = require('./react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withNotes = exports.withNotes = function withNotes(textOrOptions) {
  var channel = _addons2.default.getChannel();
  var options = typeof textOrOptions === 'string' ? { text: textOrOptions } : textOrOptions;

  return function (getStory) {
    return function (context) {
      // send the notes to the channel before the story is rendered
      channel.emit('storybook/notes/add_notes', options.text);
      return getStory(context);
    };
  };
};

Object.defineProperty(exports, 'WithNotes', {
  configurable: true,
  enumerable: true,
  get: (0, _utilDeprecate2.default)(function () {
    return _react.WithNotes;
  }, '@storybook/addon-notes WithNotes Component is deprecated, use withNotes() instead. See https://github.com/storybooks/storybook/tree/master/addons/notes')
});