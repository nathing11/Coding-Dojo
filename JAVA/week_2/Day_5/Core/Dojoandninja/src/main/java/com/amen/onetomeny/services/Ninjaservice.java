package com.amen.onetomeny.services;

import java.util.List;
import java.util.Optional;

import com.amen.onetomeny.models.Ninjamodel;
import com.amen.onetomeny.repositories.Ninjarepositorie;

public class Ninjaservice {

    private final Ninjarepositorie ninjarepositorie;

    public Ninjaservice(Ninjarepositorie ninjarepositorie) {
        this.ninjarepositorie = ninjarepositorie;
    }

    public List<Ninjamodel> allNinjas() {
        return ninjarepositorie.findAll();
    }

    public Ninjamodel createNinja(Ninjamodel ninja) {
        return ninjarepositorie.save(ninja);
    }

    public Ninjamodel findNinja(Long id) {
        Optional<Ninjamodel> optionalNinja = ninjarepositorie.findById(id);
        return optionalNinja.orElse(null);
    }

    public Ninjamodel updateNinja(Ninjamodel ninja) {
        return ninjarepositorie.save(ninja);
    }

    public void deleteNinja(Long id) {
        ninjarepositorie.deleteById(id);
    }
}
