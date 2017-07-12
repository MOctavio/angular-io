const _path = require('path');
const _root = _path.resolve(__dirname, '..');

const PATHS = {
  app: getPathFor('src'),
  dist: getPathFor('dist')
};

function getPathFor(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return _path.join.apply(_path, [_root].concat(args));
}

exports.Path = {
  getPathFor,
  app: PATHS.app,
  dist: PATHS.dist
};