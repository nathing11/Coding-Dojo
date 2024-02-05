package com.amen.onetomeny.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.amen.onetomeny.models.Dojolmodel;
import com.amen.onetomeny.services.Dojolservice;


import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {
	@Autowired
	private Dojolservice dojolserv;

    @GetMapping("")
    public String home(@ModelAttribute("dojo") Dojolmodel dojo, Model model) {
    	List<Dojolmodel> allDojos = dojolserv.allDojo();
		model.addAttribute("allDojos",allDojos);
        return "Dojos.jsp";
    }
    @PostMapping("/processForm")
    public String createDojo(@Valid @ModelAttribute("dojo") Dojolmodel dojo, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "Dojos.jsp";
        } else {
            dojolserv.createDojo(dojo);
            return "redirect:/dojos";
        }
    }
}
