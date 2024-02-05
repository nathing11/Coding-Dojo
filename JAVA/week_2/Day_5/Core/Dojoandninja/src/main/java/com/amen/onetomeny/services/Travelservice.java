package com.amen.onetomeny.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.amen.onetomeny.models.Travelmodel;
import com.amen.onetomeny.repositories.TravelRepositories;

@Service
public class Travelservice {
    // adding the travel repository as a dependency
    private final TravelRepositories travelRepositories;
    
    public Travelservice(TravelRepositories travelRepositories) {
        this.travelRepositories = travelRepositories;
    }

    // returns all the travels
    public List<Travelmodel> allTravel() {
        return travelRepositories.findAll();
    }

    // creates a travel
    public Travelmodel createTravel(Travelmodel travel) {
        return travelRepositories.save(travel);
    }
    // READ ONE 
    // retrieves a travel
    public Travelmodel findTravel(Long id) {
        Optional<Travelmodel> optionalTravel = travelRepositories.findById(id);
        if(optionalTravel.isPresent()) {
            return optionalTravel.get();
        } else {
            return null;
        }
    }
    //update
    public Travelmodel updateTravel(Travelmodel travel) {
    	return travelRepositories.save(travel);
    }
    //DELETE
    public void deletTravel(Long id) {
    	travelRepositories.deleteById(id);
    }
}
