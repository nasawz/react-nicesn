var jsx2example = require('gulp-jsx2example')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')
var watch = require('gulp-watch')
var connect = require('gulp-connect')

var gulp = require('gulp')
var sftp = require('gulp-sftp');


gulp.task('default', function() {
  gulp.start(['site', 'webpack', 'connect', 'watch'])
})

gulp.task('watch', function() {
  gulp.watch(['./src/**', './examples/**'], ['webpack'], function(event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });
});

//使用connect启动一个Web服务器
gulp.task('connect', function() {
  connect.server({
    root: 'site',
    livereload: true
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
      resolveLoader: {
        alias: {
          'copy': 'file-loader?name=res/[name].[ext]'
        }
      },
      module: {
        loaders: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel'
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
          {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer'
          },
          {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=fonts/[name].[ext]'
          }
        ]
      },
      plugins: [
        new webpack.webpack.optimize.CommonsChunkPlugin("common.js")
      ]
    }))
    .pipe(gulp.dest('site/examples/')).pipe(connect.reload());
})

gulp.task('deploy:react', function() {
  return gulp.src('site/**')
    .pipe(sftp({
      host: '123.57.237.163',
      auth: 'keyMain',
      remotePath: '/home/node/react'
    }));
});
