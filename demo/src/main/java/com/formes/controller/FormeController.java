package com.formes.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.formes.model.Forme;
import com.formes.service.FormeService;

@RestController
@RequestMapping("/api/forme")
public class FormeController {
    @Autowired
    private FormeService formeService; 

    @GetMapping("/allFormes")
    public List<Forme> getFormes() {
        return formeService.getAllFormes(); 
    }

    @PostMapping("/addForme")
    public ResponseEntity<String> ajouterForme(@RequestBody Forme forme) {
        formeService.addForme(forme); 
        return ResponseEntity.ok("Forme ajoutée avec succès.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Forme> getFormeById(@PathVariable Long id) {
        Forme forme = formeService.getFormeById(id);
        if (forme != null) {
            return ResponseEntity.ok(forme);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> supprimerForme(@PathVariable Long id) {
        boolean isRemoved = formeService.deleteForme(id);
        if (isRemoved) {
            return ResponseEntity.ok("Forme supprimée avec succès.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}