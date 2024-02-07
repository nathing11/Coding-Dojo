package com.amen.log.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amen.log.model.Book;


@Repository
public interface BookRepos extends CrudRepository<Book, Long>{
	 List<Book> findAll();
}
