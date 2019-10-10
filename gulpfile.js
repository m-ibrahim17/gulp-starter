const gulp = require('gulp')    // Require Gulp.js; Docs -> https://github.com/gulpjs/gulp
const browserSync = require('browser-sync').create()    // Require Browser Sync (Auto Reload the Defualt Browser); Docs -> https://browsersync.io/docs/gulp
const sass = require('gulp-sass')   // Require Gulp Sass (Compile SASS/SCSS to CSS); Docs -> https://github.com/dlmanning/gulp-sass
const browserify = require('browserify')    // Require Browserify.js (Compile ES6 to ES5 using Babel.js); Docs -> https://github.com/browserify/browserify
const autoprefixer = require('gulp-autoprefixer')   // Require Autoprefixer for Gulp (Add prefixer for CSS styling); Docs -> https://github.com/sindresorhus/gulp-autoprefixer
const minifyCSS = require('gulp-csso')    // Require gulp-csso (Minify *.css); Docs -> https://github.com/ben-eb/gulp-csso
const uglify = require('gulp-uglify')   // Require Uglify.js for gulp (Minify *.js); Docs -> https://github.com/terinjokes/gulp-uglify
const imagemin = require('gulp-imagemin')   // Require gulp-imagemin (Minify Images); Docs -> https://github.com/sindresorhus/gulp-imagemin
const source = require('vinyl-source-stream')   // Require vinyl-source-stream (Conventional text streams at the start of your gulp); Docs -> https://github.com/hughsk/vinyl-source-stream
const babelify = require('babelify')    // Require Babelify.js (Compile ES6 to ES5 using Babel.js); Docs -> https://github.com/babel/babelify
const concat = require('gulp-concat')   // Require Concat for gulp (Concatinate files together); Docs -> https://github.com/gulp-community/gulp-concat
const htmlmin = require('gulp-htmlmin') // Require gulp-htmlmin (Minify HTML pages); Docs -> https://github.com/jonschlinkert/gulp-htmlmin

// Compile Sass
gulp.task('sass', () => {
  return gulp.src(['src/assets/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream())
})

// Compile ECMAscript
gulp.task('ecmascript', () => {
  return browserify('src/assets/js/app.js')
    .transform(babelify.configure({
      presets: ['es2015']
    }))
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('src/assets/js'))
})

// Concat Vendors to a single file
gulp.task('concatVendors', () => {
  gulp.src(['src/assets/js/vendors/jquery.min.js',
            'src/assets/js/vendors/bootstrap.bundle.min.js',
            'src/assets/js/vendors/mdb.min.js',
            'src/assets/js/vendors/swiper.min.js',
            'src/assets/js/vendors/mixitup.min.js'
            // 'src/assets/js/vendors/vue.min.js'
          ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('src/assets/js'))
})

// Watch and serve
gulp.task('serve', ['sass', 'ecmascript'], () => {
  browserSync.init({
    host: 'localhost',  // Change it to your local network to access it with other devises (mobile, tablet, etc..) connected to the same network
    server: './src'
  })

  gulp.watch(['src/assets/scss/*.scss'], ['sass'])
  gulp.watch(['src/assets/js/app.js'], ['ecmascript'])
  gulp.watch(['src/*.html', 'src/assets/scss/*.scss', 'src/assets/js/*.js']).on('change', browserSync.reload)
})

// Copy and Minify HTML files
gulp.task('copyhtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})

// Minify CSS
gulp.task('minifycss', () => {
  return gulp.src('src/assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/assets/css'))
})

// Minify JS
gulp.task('minifyjs', () => {
  return gulp.src(['src/assets/js/vendors.js', 'src/assets/js/index.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
})

// Minify Images
gulp.task('minifyimages', () => {
  return gulp.src('src/assets/image/**/*')
		.pipe(imagemin({
      optimizationLevel: 3
    }))
		.pipe(gulp.dest('dist/assets/image'))
})

// Copy Favicons Images amd Fonts
gulp.task('copyDir', () => {
  return gulp.src(['src/assets/favicons/**/*', 'src/assets/font/**/*'], {
    base: 'src/assets'
  })
    .pipe(gulp.dest('dist/assets'))
})

// Default
gulp.task('default', ['concatVendors', 'serve'])

// Production
gulp.task('production', ['copyhtml', 'minifycss', 'ecmascript', 'minifyjs', 'minifyimages', 'copyDir'])
