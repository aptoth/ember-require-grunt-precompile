#ember-require-grunt-precompile

Simple project based on the starter kit from the [Ember.js](http://emberjs.com). 
>The project shows:

1. How to use [RequireJS](http://requirejs.org) with [Ember.js](http://emberjs.com).
2. How to set up [Grunt](http://gruntjs.com) to make your dev automated.
3. How to include precompiled templates. The precompilation process is done using [grunt-ember-templates](https://github.com/dgeb/grunt-ember-templates) and by adding a custom task to Grunt in order to create automatically a model for require to be included.

>Usage

The project requires npm to be installed.

Then npm install in the project's directory.

>check with jshint for syntax errors
```shell
grunt 
```

>create new modules with precompiled templates
```shell
grunt precompile 
```
