package com.amen.counter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class countercontroller {
	
	@GetMapping("/")
	public String counter(HttpSession session) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
			}
		else {
			session.setAttribute("count", (int) session.getAttribute("count")+1);
		}
		
		return "counter.jsp";
	}
	
	
	
	
	@GetMapping("/counter")
	public String home(Model model) {
		return "index.jsp";
	}
}
