package com.amen.onetomeny.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.amen.onetomeny.models.Dojolmodel;
import com.amen.onetomeny.repositories.DojoRepositories;

@Service
public class Dojolservice {
    // adding the travel repository as a dependency
    private final DojoRepositories dojoRepositories;
    
    public Dojolservice(DojoRepositories dojoRepositories) {
        this.dojoRepositories = dojoRepositories;
    }

    // returns all the travels
    public List<Dojolmodel> allDojo() {
        return dojoRepositories.findAll();
    }

    // creates a travel
    public Dojolmodel createDojo(Dojolmodel dojo) {
        return dojoRepositories.save(dojo);
    }
    // READ ONE 
    // retrieves a travel
    public Dojolmodel findTravel(Long id) {
        Optional<Dojolmodel> optionalTravel = dojoRepositories.findById(id);
        if(optionalTravel.isPresent()) {
            return optionalTravel.get();
        } else {
            return null;
        }
    }
}
