module.exports = ({ target = 'development', ...env } = {}) =>
  require(`./webpack/config.${target}`).default({ ...env, target });