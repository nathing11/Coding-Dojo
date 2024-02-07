package com.amen.log.servece;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.amen.log.model.Book;
import com.amen.log.repos.BookRepos;


@Service
public class BookService {
	 // adding  repository as a dependency
    private final BookRepos bookrepos;
    
    public BookService(BookRepos bookrepos) {
        this.bookrepos = bookrepos;
    }

    // returns all
    public List<Book> allObject() {
        return bookrepos.findAll();
    }

    // creates 
    public Book createObject(Book book) {
        return bookrepos.save(book);
    }
    // READ ONE 
    // retrieves
    public Book findObject(Long id) {
        Optional<Book> optionalobj = bookrepos.findById(id);
        if(optionalobj.isPresent()) {
            return optionalobj.get();
        } else {
            return null;
        }
    }
    //update
    public Book updateObject(Book book) {
    	return bookrepos.save(book);
    }
    //DELETE
    public void deletObject(Long id) {
    	bookrepos.deleteById(id);
    }
}
