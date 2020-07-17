module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            scss: {
                src: ['assets/scss/*.scss'],
                dest: 'assets/scss/style.scss',
                }
            },
            sass: {              
            build: {
                files: {
                    'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
            },
            cssmin: {
                scss: {
                    src : ["assets/css/style.css"],
                    dest : "assets/css/style.min.css"
                }
            },
            watch: {
                sass: {
                    files: ['assets/scss/*.scss'],
                    tasks: ['concat:scss', 'sass', 'cssmin:scss']
                },
            },
        });

        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');
        
        grunt.registerTask("all", [
            "cssmin:scss",
            "concat:scss",
            "sass"
        ])

        grunt.registerTask('default', ['all', 'watch']);
    };