/**
 * The User collection data record schema using Joi
 *
 * Used in
 * -------
 * routers.user
 * 
 * @author Tim Liu
 * @created 2014.10.30
 */

var joi = require('joi');

module.exports = function(server){

	console.log('[schema]', 'User'.yellow);

	return joi.object().keys({

		username: joi.string().alphanum().min(3).max(36).required(),
		password: joi.string().min(6).max(36), //will be hashed by salt later
		userspace: joi.string().valid('user', 'admin').default('user'),
		email: joi.string().email() //for account activation, retrieval.
		//profile: -- [optional child schema]
		//------------------------------------------------------------
		//salt: -- auto-generated in routers.user to hash the password
		//------------------------------------------------------------
		//space: record space
		//last_login: timestamp
		//created_at: timestamp
		//updated_at: timestamp
		

	}).with('username', 'password');

};