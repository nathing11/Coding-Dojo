package com.amen.onetomeny.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.amen.onetomeny.models.Dojolmodel;
import com.amen.onetomeny.services.Dojolservice;

import jakarta.validation.Valid;

@Controller
public class DojoController {
    @Autowired
    private Dojolservice dojolserv;

    @GetMapping("/dojo/new")
    public String home(@ModelAttribute("dojo") Dojolmodel dojo, Model model) {
        List<Dojolmodel> allDojo = dojolserv.allDojo();
        model.addAttribute("allDojo", allDojo);
        return "Dojo.jsp";
    }

    @PostMapping("/dojo/processForm")
    public String createDojo(@Valid @ModelAttribute("dojo") Dojolmodel dojo, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "Dojo.jsp";
        } else {
            dojolserv.createDojo(dojo);
            return "redirect:/dojo/new";
        }
    }
}
