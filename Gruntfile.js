module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        browserify: {
            'dist/index.js': ['src/static/js/index.js']
        },
        watch: {
            files: ['<%= jshint.files %>', 'src/index.html', 'src/**/*.css'],
            tasks: ['jshint', 'browserify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['jshint', 'browserify']);

};
