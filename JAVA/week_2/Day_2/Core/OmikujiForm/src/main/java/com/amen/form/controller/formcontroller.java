package com.amen.form.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class formcontroller {
	@GetMapping("/omikuji")
	public String Form() {
		return "Form.jsp";
	}
	@PostMapping("/processForm")
	public String process(@RequestParam("number") int number,
			@RequestParam("city") String city,
			@RequestParam("name") String name,
			@RequestParam("hobby") String hobby,
			@RequestParam("thing") String thing,
			@RequestParam("someNice") String someNice,
			HttpSession session)
			{	
				session.setAttribute("keynumber", number);
				session.setAttribute("keycity", city);
				session.setAttribute("keyname", name);
				session.setAttribute("keyhobby", hobby);
				session.setAttribute("keything", thing);
				session.setAttribute("keysomeNice", someNice);
				return "redirect:/show";
			}
	@GetMapping("/show")
	public String Show() {
		return "Show.jsp";
	}
}
