package com.amen.onetomeny.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.amen.onetomeny.models.Ninjamodel;

@Repository
public interface Ninjarepositorie extends CrudRepository<Ninjamodel,Long> {
	List<Ninjamodel> findAll();
}
