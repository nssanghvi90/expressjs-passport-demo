'use strict';
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport){

	passport.serializeUser(function(user, done) {
        done(null, user.id);
	});
	
	passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
	});
	
	//Login
	passport.use('local-login', new LocalStrategy(function(username, password, done){		
		  process.nextTick(function() {
            User.findOne({ 'username' :  username }, function(err, user) {               
                if (err){					
					return done(err);
				}                
                if (!user){					
					return done(null, false);
				}
                if (!user.validPassword(password)){					
					return done(null, false);
				}                    
                else{					
					return done(null, user);
				}
                    
            });
		});
	}));

}
