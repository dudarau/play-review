const PlayGround = require('graphql-playground-html');

const { playgroundVersion } = require('./package.json');

const koa = options => {
  const middlewareOptions = {
    ...options,
    version: playgroundVersion,
  };

  return async function voyager(ctx, next) {
    try {
      ctx.body = await PlayGround.renderPlaygroundPage(middlewareOptions)
      await next()
    } catch (err) {
      ctx.body = { message: err.message };
      ctx.status = err.status || 500
    }
  }
};

module.exports = koa;