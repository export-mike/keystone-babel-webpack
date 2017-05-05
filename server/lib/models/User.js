'use strict';

var keystone = require('keystone');

var User = new keystone.List('User');

User.add({
	email: { type: keystone.Field.Types.Email },
	password: { type: keystone.Field.Types.Password }
});

User.schema.virtual('canAccessKeystone').get(function () {
	return true;
});

User.defaultColumns = 'displayName, email';
User.register();