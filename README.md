# Gulp Webpack example
Very simple example of using gulp and webpack together.

## Setup and usage
1. `npm install`
2. `./node_modules/.bin/gulp` to watch for changes and serve a hot dev server at [http://localhost:8090/webpack-dev-server/](http://localhost:8090/webpack-dev-server/)
3. `./node_modules/.bin/gulp watch` to watch for changes
3. `./node_modules/.bin/gulp build` to just build the js
4. `./node_modules/.bin/webpack` to build without gulp
5. `./node_modules/.bin/webpack --watch` to watch for changes without gulp
6. `./node_modules/.bin/webpack-dev-server --port=8090 --hot` to run the webpack dev server without gulp

## How to use in another project

### Webpack only (without Gulp)
1. `npm init` and hit enter a bunch
2. `npm install --save-dev webpack webpack-dev-server`
3. add a `webpack.config.js`. It will need at minimum the `entry` and `output` values.
4. if loading jsx (similar for any other loaders)
 1. `npm install --save-dev jsx-loader`
 2. in `webpack.config.js`, add the  `module.loaders` config for jsx
 3. in `webpack.config.js`, add the  `resolve.extensions` config for jsx
5. if using webpack-dev-server
 1. `npm install --save-dev webpack-dev-server`
 2. `./node_modules/.bin/webpack-dev-server --hot` to start. Uses [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) by default.
6. Use instructions above to build, watch, and run the dev server
7. If you want you can simplify these to `npm run server` and such with [npm scripts](http://substack.net/task_automation_with_npm_run)

### With Gulp
1. Add a `Gulpfile.js`
2. Check [this gulpfile](https://github.com/mikedfunk/gulp-webpack-example/blob/master/Gulpfile.js) for an example of serve, build, and watch tasks

The only reason to use Gulp in front of webpack is to be able to stream it to other processes. If you need to do this you'll probably need to rewrite the task a bit. This example skips that possibility.
