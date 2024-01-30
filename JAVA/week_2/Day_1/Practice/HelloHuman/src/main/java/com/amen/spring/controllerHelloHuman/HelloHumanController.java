package com.amen.spring.controllerHelloHuman;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloHumanController {
	 
	@RequestMapping("/")
	    public String index() {
	        return "Hello Human";}
    @RequestMapping("/name")
    public String name(@RequestParam(value="q",required=false) String searchQuery) {
    	return "You searched for: " + searchQuery;
}
}