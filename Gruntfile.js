var sass = require('node-sass');

module.exports = function(grunt) {    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                'css/style.css': 'sass/style.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
              }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/scripts.min.js': ['js/scripts.js']
                }
            }
        },

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            uglify: {
                files: 'js/scripts.js',
                tasks: ['uglify']
            }
        }
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s). 
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
};