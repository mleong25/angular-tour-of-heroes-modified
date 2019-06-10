const path      = require('path'),
      dir       = process.cwd();

var overrides = global.expressConfig || {};

try {
  overrides = require(path.join(dir, '/express_config'));
} catch (e) {
  console.debug("No express_config.json found");
}

const controllerPattern = process.env.EXPRESS_CONTROLLER_PATTERN || overrides.controllerPattern || 'src/**/*.controller.js';

module.exports = {
  dir:               dir,
  controllerPattern: path.join(path.resolve('./'), controllerPattern),
  host:              process.env.EXPRESS_HOST       || overrides.host      || '0.0.0.0',
  port:              process.env.EXPRESS_PORT       || overrides.port      || '8080',
  staticDir:         process.env.EXPRESS_STATIC_DIR || overrides.staticDir || undefined,
  spa:               process.env.EXPRESS_STATIC_SPA || overrides.spa       || undefined,
  notFound:          process.env.EXPRESS_STATIC_404 || overrides.notFound  || undefined
};
