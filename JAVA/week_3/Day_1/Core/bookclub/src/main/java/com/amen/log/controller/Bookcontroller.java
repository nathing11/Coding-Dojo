package com.amen.log.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.amen.log.model.Book;
import com.amen.log.model.User;
import com.amen.log.servece.BookService;
import com.amen.log.servece.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
@Controller
public class Bookcontroller {
	@Autowired
	private BookService bookservice;
	  @Autowired
	    private UserService userServ;
	
	
	@GetMapping("/book")
	public String home(@ModelAttribute("book") Book book , Model model, HttpSession session ) {
		// ROUTE GUARD
		Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}
		User loggedUser = userServ.findUserById(userId);
		List<Book> allObject = bookservice.allObject();
		model.addAttribute("loggedUser",loggedUser);
		model.addAttribute("allObject",allObject);
		return "showall.jsp";
	}
	@GetMapping("/book/new")
	public String createe(Model model) {
		model.addAttribute("book",new Book());
		return "create.jsp";
	}
	@PostMapping("/book/processForm")
	public String createbook(@Valid @ModelAttribute("book") Book book, BindingResult result , Model model ,HttpSession s) {
		if (result.hasErrors()) {
			List<Book> allBook = bookservice.allObject();
			model.addAttribute("allBook",allBook);
			return "create.jsp";
		}
		else {
			Long userId = (Long) s.getAttribute("user_id");
			User user = userServ.findUserById(userId);
			book.setUser(user);
			bookservice.createObject(book);
			return "redirect:/book";
		}
	}
	@GetMapping("/book/{id}")
	public String findOneBookById(@PathVariable("id") Long id, Model model) {
		Book selectedBook = bookservice.findObject(id);
		model.addAttribute("book",selectedBook);
		return "showone.jsp";
	}
	@DeleteMapping("/book/{id}")
	public String delete(@PathVariable("id") Long id) {
		bookservice.deletObject(id);
		return "redirect:/";
	}
	@GetMapping("/book/edit/{id}")
	public String edit(Model model , @PathVariable("id") Long id) {
		Book selectedBook = bookservice.findObject(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	@PostMapping("/book/edit/{id}")
	public String editt(@Valid @ModelAttribute("book") Book book, BindingResult result , Model model) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			bookservice.createObject(book);
			return "redirect:/book";
		}
	}
}
