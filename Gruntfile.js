module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            js: {
                files: {
                    src: ['js/controllers/*.js',
                        'js/routes/*.js',
                        'js/views/*.js',
                        'js/app.js',
                        'js/main.js']
                },
                options: {
                    camelcase: true,
                    bitwise: true,
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true,
                        document: true
                    }
                }
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    templateName: function(sourceFile) {
                        sourceFile = sourceFile.replace('.hbs', '');
                        aux = sourceFile.split('/');
                        sourceFile = aux[aux.length - 1].replace('.', '/');

                        return sourceFile;
                    }
                },
                files: {
                    "js/templates/precompiled/templates.js": ['js/templates/*/*.hbs', 'js/templates/*.hbs']
                }
            }
        },
        concat: {
            options: {
                banner: '/*Precompiled on:<%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n' +
                        "define(['ember','handlebars'],function(){\n",
                footer: "\n});"
            },
            dist: {
                src: ["js/templates/precompiled/templates.js"],
                dest: "js/templates/precompiled/templatesModule.js"
            }
        },
        watch: {
            precompile: {
                options: {
                    livereload: true
                },
                files: ['js/templates/**/*.hbs'],
                tasks: ['precompile']
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('compile', ['emberTemplates:compile']);

    grunt.registerTask('makeModule', 'My "precompile" task.', function() {
        grunt.task.requires('compile'); // make sure bar was run and did not fail
        grunt.task.run('concat');
    });

    grunt.registerTask('precompile', 'My "precompile" sequence.', ['compile', 'makeModule']);

    grunt.registerTask('default', ['jshint:js']);

};