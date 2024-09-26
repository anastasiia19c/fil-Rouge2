package com.formes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.formes.model.Forme;
import com.formes.model.TriForme;
import com.formes.repository.TriFormeRepository;

@Service
public class TriFormeService {

    @Autowired
    private TriFormeRepository triFormeRepository;

    public List<TriForme> getAllTriFormes() {
        return triFormeRepository.findAll();
    }

    public TriForme getTriFormeById(Long id) {
        return triFormeRepository.findById(id).orElse(null);
    }

    public TriForme createTriForme(TriForme triForme) {
        return triFormeRepository.save(triForme);
    }

    public TriForme ajouterForme(Long triFormeId, Forme forme) {
        TriForme triForme = triFormeRepository.findById(triFormeId).orElse(null);
        if (triForme != null) {
            triForme.ajouterForme(forme);
            return triFormeRepository.save(triForme);
        }
        return null;
    }
}