package com.formes.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.formes.model.Forme;
import com.formes.repository.FormeRepository;



@Service
public class FormeService {
    @Autowired
    private FormeRepository formeRepository;

    public List<Forme> getAllFormes() {
        return formeRepository.findAll(); 
    }

    public Forme addForme(Forme forme) {
        return formeRepository.save(forme); 
    }

    public Forme getFormeById(Long id) {
        return formeRepository.findById(id).orElse(null);
    }
    public boolean deleteForme(Long id) {
        if (formeRepository.existsById(id)) {
            formeRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}