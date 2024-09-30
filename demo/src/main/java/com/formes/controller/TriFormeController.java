package com.formes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.formes.model.Forme;
import com.formes.model.TriForme;
import com.formes.service.TriFormeService;

@RestController
@RequestMapping("/api/triForme")
public class TriFormeController {


    @Autowired
    private TriFormeService triFormeService;

    // Afficher toutes les compositions
    @GetMapping("/all")
    public List<TriForme> getAllTriFormes() {
        return triFormeService.getAllTriFormes();
    }

    // Créer une nouvelle composition
    @PostMapping("/add")
    public ResponseEntity<TriForme> createTriForme(@RequestBody TriForme triForme) {
        TriForme createdTriForme = triFormeService.createTriForme(triForme);
        return ResponseEntity.ok(createdTriForme);
    }

    // Ajouter une forme à une composition
    @PostMapping("/{triFormeId}/addForme")
    public ResponseEntity<String> ajouterForme(@PathVariable Long triFormeId, @RequestBody Forme forme) {
        TriForme updatedTriForme = triFormeService.ajouterForme(triFormeId, forme);
        if (updatedTriForme != null) {
            return ResponseEntity.ok("Forme ajoutée avec succès.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Récupérer une composition spécifique avec ses formes
    @GetMapping("/{triFormeId}")
    public ResponseEntity<TriForme> getTriFormeById(@PathVariable Long triFormeId) {
        TriForme triForme = triFormeService.getTriFormeById(triFormeId);
        if (triForme != null) {
            return ResponseEntity.ok(triForme);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
