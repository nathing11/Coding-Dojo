package com.amen.travel.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amen.travel.models.Travelmodel;

@Repository
public interface TravelRepositories extends CrudRepository<Travelmodel, Long>{
	 // this method retrieves all the books from the database
    List<Travelmodel> findAll();
}
