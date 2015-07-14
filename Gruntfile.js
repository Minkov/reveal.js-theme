/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;
    var base = 'http://localhost';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),       
        connect: {
            server: {
                options: {
                    port: port,
                    hostname: '*',
                    livereload: true,
                    open: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['*/**/*.html']
            }
        }
    });

    // Dependencies;
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-stylus');

    // Serve presentation locally
    grunt.registerTask('serve', ['connect', 'watch']);
};
