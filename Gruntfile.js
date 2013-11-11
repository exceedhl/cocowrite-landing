module.exports = function(grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	compass: {
	    dist: {
		options: {
		    config: 'config.rb'
		}
	    }
	}
    });
    
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask('server', 'http serving build dir with pushstate support', function() {
	var server = require('./node_utils/pushstate-server');
	server.setPort(8000);
	server.setDirectory('.');
	server.start();
	
	var done = this.async();
	process.on('SIGINT', function () {
	    console.log('http-server stopped');
	    done();
	    process.exit();
	});
    });
};
