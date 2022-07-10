'use strict';

function escapeRegExp(str) {
  // eslint-disable-next-line
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function functionToSource(f) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var s = f.toString();
  for (var key in replaces) {
    var v = replaces[key];
    var reg = new RegExp(escapeRegExp(key), 'g');
    s = s.replace(reg, v);
  }
  return s;
}

function toFunctionForm(f) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof f === 'function') {
    return functionToSource(f, replaces);
  } else {
    return 'function () {' + functionToSource(f, replaces) + '}';
  }
}

function wrapFunctionForEvaluation(f) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var s = '(' + toFunctionForm(f, replaces) + ')()';
  // If the result is an instanceof of Promise, It's resolved in context of nodejs later.
  return ('\n    {\n      let result = ' + s + ';\n      if (result instanceof Promise) {\n        result\n      } else {\n        let json = JSON.stringify(result);\n        JSON.stringify({type: (typeof result), result: json});\n      }\n    }\n  ').trim();
}

function wrapFunctionForCallFunction(f) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var s = '(' + toFunctionForm(f, replaces) + ')()';
  // If the result is an instanceof of Promise, It's resolved in context of nodejs later.
  return ('\n    function () {\n      let result = ' + s + ';\n      if (result instanceof Promise) {\n        return result\n      } else {\n        let json = JSON.stringify(result);\n        return JSON.stringify({type: (typeof result), result: json});\n      }\n    }\n  ').trim();
}

exports.functionToSource = functionToSource;
exports.wrapFunctionForEvaluation = wrapFunctionForEvaluation;
exports.wrapFunctionForCallFunction = wrapFunctionForCallFunction;
//# sourceMappingURL=functionToSource.js.map