module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

            babel: {
                options: {
                    sourceMap: true,
                    minified: true,
                    presets  : ['latest']
                },
                dist   : {
                    files: {
                        "dist/script.js": "src/script.js"
                    }
                }
            },

            less: {
                dist: {
                    options:{
                        compress: true
                    },
                    files: {
                        'dist/styles.css': 'src/styles.less'
                    }
                }
            }
            ,

            jshint: {
                options: {
                    reporter : require('jshint-stylish'),
                    esversion: 6
                }
                ,
                all    : ['src/*.js']
            }
            ,

            // uglify   : {
            //     dist: {
            //         files: {
            //             "dist/script.js": "dist/script.js"
            //         }
            //     }
            // }

            htmlbuild: {
                dev: {
                    src    : 'src/*.html',
                    dest   : 'dist/',
                    options: {
                        basePath: 'src/'
                    }
                }
            }
            ,

            watch: {
                scripts: {
                    files: ['src/**/*.js'],
                    tasks: ['jshint',
                            'babel']

                }
                ,
                css    : {
                    files: ['src/**/*.less'],
                    tasks: ['less']
                }
                ,
                html   : {
                    files: ['src/*.html'],
                    tasks: ['htmlbuild']
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html-build');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['babel',
                                   'less',
                                   'htmlbuild',
                                   'jshint',
                                   /*'uglify'*/]);

}
;