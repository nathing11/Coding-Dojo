package com.amen.onetomeny.controller;

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


import com.amen.onetomeny.models.Ninjamodel;
import com.amen.onetomeny.services.Ninjaservice;

import jakarta.validation.Valid;

@Controller
public class NinjaController {
	@Autowired
	private Ninjaservice Ninjalserv;
	@GetMapping("/new/ninja")
	public String home(@ModelAttribute("ninja") Ninjamodel ninja , Model model) {
		List<Ninjamodel> allNinja = Ninjalserv.allNinjas();
		model.addAttribute("allNinja",allNinja);
		return "Ninjas.jsp";
	}
	@PostMapping("/ninja/processForm")
	public String createTravel(@Valid @ModelAttribute("ninja") Ninjamodel ninja, BindingResult result , Model model) {
		if (result.hasErrors()) {
			List<Ninjamodel> allNinja = Ninjalserv.allNinjas();
			model.addAttribute("allNinja",allNinja);
			return "Ninjas.jsp";
		}
		else {
			Ninjalserv.createNinja(ninja);
			return "redirect:/new/ninja";
		}
		
	}
	@DeleteMapping("/new/ninja/{id}")
	public String deleteTravel(@PathVariable("id") Long id) {
		Ninjalserv.deleteNinja(id);
		return "redirect:/new/ninja";
	}
}
