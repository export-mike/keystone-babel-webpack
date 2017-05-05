if (process.env.NODE_ENV === 'development') {
	require('babel-register');
	require('./src/keystone');
} else {
	require('./lib/keystone');
}
