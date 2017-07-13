const _path = require('path');
const _root = _path.resolve(__dirname, '..');

const PATHS = {
  src: resolve('src'),
  dist: resolve('dist'),
  node_modules: resolve('node_modules'),
  root: resolve()
};

function resolve(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return _path.join.apply(_path, [_root].concat(args));
}

exports.Path = {
  resolve: resolve,
  SRC: PATHS.src,
  DIST: PATHS.dist,
  NODE_MODULES: PATHS.node_modules,
  ROOT: PATHS.root
};