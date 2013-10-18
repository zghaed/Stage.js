/**
 * This is the Client Dev Project Spawn Config.
 *
 * ================
 * Config/Structure
 * ================
 * {} - create folder
 * 'string' - copy file or folder
 * true/false - read from task memory, minify or non-minify. 
 *
 * 
 * @author Tim.Liu
 * @created 2013.09.25
 */

module.exports = {
	distFolder: 'dist',
	clientBase: '../../',
	index: 'app/index.html',
	structure : {
		libs: {
			'bower.json': 'app/libs/bower.json',
			'buildify.js': 'app/libs/buildify.js',
			'EMPTY.js': 'app/libs/EMPTY.js',
			'map-fix.json': 'app/libs/map-fix.json',
			'map.json': 'app/libs/map.json',
			'README.md': 'app/libs/README.md',
			'package.json': 'app/libs/package.json'
		},
		scripts: {
			_try: {}, //autoload scripts - usually patches after dist built
			modules: { //layouts/page wrapper
				context: {
					_dev: 'app/scripts/modules/context/_dev', //UI modules for developer tools
					login: 'app/scripts/modules/context/login', //UI modules for the login (pre-login) context
					admin: 'app/scripts/modules/context/admin',	//UI modules for context after the login goes through
					shared: 'app/scripts/modules/context/shared' 				
				},
				special: { //Non-UI worker modules.
				}
			},
			vendor: {}, //3rd party libs
			widgets: {
				editor: {}, //form editors
				plugin: {}, //jquery plugins (as widgets)
				standard: {} //backbone view
			},
			'base.js': true, //cached srcs see - loadIndexHTML() in spawn.js;
			'infrastructure.js': false,
			'core-modules.js': false,
			'preset-widgets.js': false,
			'config.js': 'app/scripts/config.js' //-non minified or copied
		},
		static: {
			menu: {
				'menu.json': 'app/static/menu/menu.json'
			},
			resources: 'app/static/resources'
		},
		themes: {
			_default: 'app/themes/_default'
		},
		tools: {
			build: { //excluding the dist folder.
				config: 'tools/build/config',
				'build.js': 'tools/build/build.js',
			},
			shared: 'tools/shared',
			'package.json': 'tools/package.json'
		},
		'404.html': 'app/404.html',
		'index.html': false
	}
};