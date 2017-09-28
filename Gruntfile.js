module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/style.css': 'sass/style.sass'
            }
        }
    },
     watch: {
            scripts: {
                files: ['sass/style.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
    browserSync: {
        bsFiles: {
            src : 'css/style.css'
        },
             options: {
                    watchTask: true,
                    server: true
            }
        }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'sass','watch']);
};