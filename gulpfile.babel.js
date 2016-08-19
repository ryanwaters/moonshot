/* eslint no-console: 0 */
// import babelCore from 'babel-core/register'
import path from 'path'
import gulp from 'gulp'
import flatten from 'gulp-flatten'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import babel from 'gulp-babel'
import changed from 'gulp-changed'
import mocha from 'gulp-mocha'
import exit from 'gulp-exit'
import watch from 'gulp-watch'
import batch from 'gulp-batch'
import plumber from 'gulp-plumber'
import rimraf from 'rimraf'
// import debug from 'gulp-debug'
import istanbul from 'gulp-istanbul'
import sass from 'gulp-sass'
import {Instrumenter} from 'isparta'
import eslint from 'gulp-eslint'
import map from 'lodash/fp/map'
import mkdirp from 'mkdirp'
import yargs from 'yargs'
import serverMaker from './dev-server'
import webpack from 'webpack-stream'
import webpackProductionConfig from './webpack.config.prod.js'
import david from 'gulp-david'
import nsp from 'gulp-nsp'

const relative = (loc) => path.resolve(`${__dirname}${loc}`)

const packagePath = path.resolve(`${__dirname}/package.json`)
const appSrc = relative('/src/js/moonshot.js')
const src = relative('/src/**/*.js')

const sassPath = relative('/src/sass/app.scss')
const dest = relative('/build/')
const dist = relative('/dist/')
const functionalTests = relative('/tests/functional/*.js')


let argSrc, argTest
// expects something like `gulp test --path /components/spec-editor.js`
if (yargs.argv.path) {
  argSrc = relative('/src/js' + yargs.argv.path.replace(/spec\-/, ''))
  argTest = relative('/tests' + yargs.argv.path)
}

gulp.task('checkDependencies', () => {
  return gulp.src('package.json')
    .pipe(david({
      error404: true,
      errorDepType: true,
      errorDepCount: 5
    }))
    // .pipe(david.reporter)
})


gulp.task('makeBuild', (done) => mkdirp(dest, done))

gulp.task('foundation', () => {
  gulp.src('node_modules/foundation-sites/dist/foundation.min.css')
      .pipe(gulp.dest(dest))
})

gulp.task('static', () => {
  gulp.src('src/static/**/*')
      .pipe(gulp.dest(dest))
})
gulp.task('style', ['makeBuild', 'static', 'foundation'], () => gulp.src('src/sass/app.scss')
                                            .pipe(autoprefixer())
                                            .pipe(sass())
                                            .pipe(gulp.dest(dest))
                                            .pipe(gulp.dest(dist)))

gulp.task('copy:favicon', () => gulp.src('favicons/*').pipe(gulp.dest('dist/')))
gulp.task('copy:svg', () => gulp.src('src/svg/*').pipe(gulp.dest(dest + '/svg'))
                                             .pipe(gulp.dest(dist + '/svg')))


gulp.task('copy:index', () => gulp.src('index.html')
                                  //  .pipe(debug())
                                  .pipe(gulp.dest(dest))
                                  .pipe(gulp.dest(dist)))

gulp.task('clear:dist', (done) => rimraf('./dist/*', done))

gulp.task('build', ['clear:dist', 'copy:index', 'copy:svg', 'copy:favicon'], () => gulp.src(srcSrc)
                                             .pipe(webpack(webpackProductionConfig))
                                             .pipe(gulp.dest(dist)))

gulp.task('lint', () => gulp.src([src, testSrc, './gulpfile.babel.js'])
                            .pipe(eslint())
                            .pipe(eslint.format())
                            .pipe(eslint.failAfterError()))

gulp.task('transpile', ['makeBuild'], () => {
  return gulp.src(src)
             .pipe(changed(dest))
             .pipe(sourcemaps.init())
             .pipe(babel())
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest(dest))
})

gulp.task('nsp', () => nsp({package: packagePath}, (e) => process.stdout.write(e.toString())))


const remapTasks = map((task) => {
  const {dep} = task
  return dep
})

gulp.task('tasks', () => {
  console.log(JSON.stringify(remapTasks(gulp.tasks), null, 2))
})

gulp.task(
  'serve',
  ['style', 'copy:index', 'copy:favicon'],
  serverMaker
)
gulp.task('default', ['serve'])
