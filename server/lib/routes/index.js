'use strict';

var _expressHttpProxy = require('express-http-proxy');

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);


var routes = {
	views: importRoutes('./views')
};

exports = module.exports = function (app) {
	app.get('/test', routes.views.index);
	if (process.env.NODE_ENV === 'development') {
		app.use('*', (0, _expressHttpProxy2.default)('http://localhost:3000', {
			proxyReqPathResolver: function proxyReqPathResolver(req, res) {
				return require('url').parse(req.baseUrl).path;
			}
		}));
	}
};