var jsx2example = require('gulp-jsx2example')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')
var watch = require('gulp-watch')

var gulp = require('gulp')


gulp.task('default', function() {
  gulp.start(['site', 'webpack', 'watch'])
})

gulp.task('watch', function() {
  gulp.watch('./app/**/**', ['webpack'], function(event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });
});



gulp.task('site', function() {
  return gulp
    .src(['./examples/*.*'])
    .pipe(jsx2example())
    .pipe(gulp.dest('site/examples/'))
})

gulp.task('webpack', function() {
  return gulp
    .src(['./examples/*.*'])
    .pipe(named())
    .pipe(webpack({
      devtool: "#source-map",
      module: {
        loaders: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel'
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }]
      },
      plugins: [
        new webpack.webpack.optimize.CommonsChunkPlugin("common.js")
      ]
    }))
    .pipe(gulp.dest('site/examples/'))
})
