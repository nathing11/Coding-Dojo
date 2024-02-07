package com.amen.log.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amen.log.model.User;
import java.util.Optional;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
	//find logging user
	Optional<User> findByEmail(String email);
}
