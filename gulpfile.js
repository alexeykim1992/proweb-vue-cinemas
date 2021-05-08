path: {
    const video = require('./gulp/tasks/video');

    global.$ = {
        gulp: require('gulp'),
        //  подключает плагин
        gp: require('gulp-load-plugins')(),
        bs: require('browser-sync').create(),
        // проверяет файлы и запускает плагины
        tasks: require('./gulp/config/tasks'),
        path: {
            serverDir: 'app/build',
            // папка build конечного результата , будет создаваться сама
            src: {
                // понимание откуда взять
                html: 'app/src/*.html',
                style: 'app/src/styles/*.*',
                js: 'app/src/scripts/*.*',
                img: 'app/src/images/**/*.{png,jpg,jpeg,webp,gif}',
                fonts: 'app/src/fonts/**/**/*.*',
                video: 'app/src/video/*.*'
            },
            build: {
                html: 'app/build/',
                style: 'app/build/styles/',
                js: 'app/build/scripts',
                img: 'app/build/images',
                fonts: 'app/build/fonts',
                video: 'app/build/video/'
            },
            watch: {
                html: ['app/src/*.html', 'app/src/view/'],
                style: 'app/src/styles/**/*.*',
                js: 'app/src/scripts/**/*.*',
                img: 'app/src/images/**/*.{png,jpg,jpeg,webp,gif}',
                fonts: 'app/src/fonts/**/*.*',
                video: 'app/src/video/*.*'
            }
        }
    }
}



$.tasks.forEach(tasksPath => require(tasksPath)());
$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'video', 'style', 'js', 'img', 'fonts', 'watch', 'serve')));
$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'video', 'style', 'js', 'img', 'fonts')));