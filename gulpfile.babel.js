require('babel-register');

import path from 'path'
import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import changed from 'gulp-changed'
import mocha from 'gulp-mocha'
// import exit from 'gulp-exit'
// import plumber from 'gulp-plumber'
import debug from 'gulp-debug'
// import istanbul from 'gulp-istanbul'
import sass from 'gulp-sass'
import {Instrumenter} from 'isparta'
import eslint from 'gulp-eslint'
import R from 'ramda'
import mkdirp from 'mkdirp'
import webpack from 'webpack-stream'

// import serverMaker from './server-maker'
import webpackConfig from './webpack.config.development'

const relative = (loc) => path.resolve(`${__dirname}${loc}`)

const appSrc = relative(`/src/js/index.js`)
const src = relative(`/src/**/*.js`)
const testSrc = relative(`/tests/**/*.js`)
const artifactPath = process.env.CIRCLE_ARTIFACTS || relative(`/test-output/`)
const sassPath = relative(`/src/**/*.scss`)
const dest = relative(`/build/`)
const dist = relative(`/dist/`)
const functionalTests = relative(`/tests/functional/*.js`)

let argSrc = null, argTest = null

// const ignoreCoverage = []

gulp.task(`makeBuild`, (done) =>
  mkdirp(dest, (error) => {
    if (!error) {
      done()
      return
    }
    console.log(`Error making ${dest}`, error)
    if (error && error.stack) {
      console.log(error.stack)
    }
  })
)
gulp.task(`transpile`, [`makeBuild`, `copy-index`], () => {
  return gulp.src(src)
             .pipe(changed(dest))
             .pipe(sourcemaps.init())
             .pipe(babel())
             .pipe(sourcemaps.write(`.`))
             .pipe(gulp.dest(dest))
})

gulp.task(`build`, [`copy-index`, `transpile`], () =>
  gulp.src(appSrc)
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest(dist))
)

gulp.task(`copy-index`, () => {
  return gulp.src(`index.html`)
             .pipe(debug())
             .pipe(gulp.dest(dest))
             .pipe(gulp.dest(dist))
})
