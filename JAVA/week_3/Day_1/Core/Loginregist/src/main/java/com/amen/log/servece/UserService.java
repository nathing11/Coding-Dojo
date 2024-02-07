package com.amen.log.servece;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.amen.log.model.LoginUser;
import com.amen.log.model.User;
import com.amen.log.repos.UserRepo;
@Service
public class UserService {
	@Autowired
    private UserRepo userRepos;
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
        // Reject if email it taken
    	Optional<User> potentiaUser= userRepos.findByEmail(newUser.getEmail());
    	if(potentiaUser.isPresent()) {
    		result.rejectValue("email","registerError", "Email is taken");
    		
    	}
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("password","registerError", "password not match!");
    		
    	}
    	if (result.hasErrors()) {
			return null;
		}
    	else {
			// Hash and set password save to db
    		String hashedPw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    		newUser.setPassword(hashedPw);
    		return userRepos.save(newUser);
		}
    }
    public User login(LoginUser newLoginObject, BindingResult result) {
        // find if the user is in the db
    	Optional<User>potientialUser = userRepos.findByEmail(newLoginObject.getEmail());
    	if (!potientialUser.isPresent()) {
			result.rejectValue("email", "LoginErrors", "email is not found");
		}
    	else {
    		User user = potientialUser.get();
    		// check the password
    		if(!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
    		    result.rejectValue("password", "loginErrors", "Invalid Password!");
    		}
    		if(result.hasErrors()) {
    			return null;
    		}else {
    			return user;
    		}
    	}
        return null;
    }
}
