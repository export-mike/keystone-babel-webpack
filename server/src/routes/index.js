var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
import proxy from 'express-http-proxy';

var routes = {
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {
	app.get('/test', routes.views.index)
	if (process.env.NODE_ENV === 'development') {
		app.use('*', proxy('http://localhost:3000', {
	    proxyReqPathResolver: function (req, res) {
	        return require('url').parse(req.baseUrl).path;
	    }
	}));
	}
};
