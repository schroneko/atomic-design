'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extendableBuiltin3(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var TimeoutError = function (_extendableBuiltin2) {
  (0, _inherits3.default)(TimeoutError, _extendableBuiltin2);

  function TimeoutError(message) {
    (0, _classCallCheck3.default)(this, TimeoutError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimeoutError.__proto__ || Object.getPrototypeOf(TimeoutError)).call(this, message));

    _this.name = 'TimeoutError';
    return _this;
  }

  return TimeoutError;
}(_extendableBuiltin(Error));

var GotoTimeoutError = function (_TimeoutError) {
  (0, _inherits3.default)(GotoTimeoutError, _TimeoutError);

  function GotoTimeoutError(message) {
    (0, _classCallCheck3.default)(this, GotoTimeoutError);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (GotoTimeoutError.__proto__ || Object.getPrototypeOf(GotoTimeoutError)).call(this, message));

    _this2.name = 'GotoTimeoutError';
    return _this2;
  }

  return GotoTimeoutError;
}(TimeoutError);

var WaitTimeoutError = function (_TimeoutError2) {
  (0, _inherits3.default)(WaitTimeoutError, _TimeoutError2);

  function WaitTimeoutError(message) {
    (0, _classCallCheck3.default)(this, WaitTimeoutError);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (WaitTimeoutError.__proto__ || Object.getPrototypeOf(WaitTimeoutError)).call(this, message));

    _this3.name = 'WaitTimeoutError';
    return _this3;
  }

  return WaitTimeoutError;
}(TimeoutError);

var EvaluateTimeoutError = function (_TimeoutError3) {
  (0, _inherits3.default)(EvaluateTimeoutError, _TimeoutError3);

  function EvaluateTimeoutError(message) {
    (0, _classCallCheck3.default)(this, EvaluateTimeoutError);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (EvaluateTimeoutError.__proto__ || Object.getPrototypeOf(EvaluateTimeoutError)).call(this, message));

    _this4.name = 'WaitTimeoutError';
    return _this4;
  }

  return EvaluateTimeoutError;
}(TimeoutError);

var EvaluateError = function (_extendableBuiltin4) {
  (0, _inherits3.default)(EvaluateError, _extendableBuiltin4);

  function EvaluateError(message, object) {
    (0, _classCallCheck3.default)(this, EvaluateError);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (EvaluateError.__proto__ || Object.getPrototypeOf(EvaluateError)).call(this, message));

    _this5.object = object;
    return _this5;
  }

  return EvaluateError;
}(_extendableBuiltin3(Error));

exports.TimeoutError = TimeoutError;
exports.GotoTimeoutError = GotoTimeoutError;
exports.WaitTimeoutError = WaitTimeoutError;
exports.EvaluateTimeoutError = EvaluateTimeoutError;
exports.EvaluateError = EvaluateError;
//# sourceMappingURL=error.js.map