package com.amen.spring.conttrollers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	@GetMapping("")
	    public String index(){
	      return "Welocom";
	    }
	    @GetMapping("/today")
	    public String today(){
	      return "Today you will find lucky in all your endeavors!";
	    }
	    @GetMapping("/tomorrow")
	    public String tomorrow(){
	      return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	    }
	}

