package com.formes.model;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class TriForme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tri_forme_id")
    private List<Forme> formes = new ArrayList<>();

    public TriForme() {}

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Forme> getFormes() {
        return formes;
    }

    public void setFormes(List<Forme> formes) {
        this.formes = formes;
    }

    public void ajouterForme(Forme forme) {
        this.formes.add(forme);
    }

    public double aireTotale() {
        double aireTotale = 0;
        for (Forme forme : formes) {
            aireTotale += forme.getAire();
        }
        return aireTotale;
    }

    public double perimetreTotal() {
        double perimetreTotal = 0;
        for (Forme forme : formes) {
            perimetreTotal += forme.getPerimetre();
        }
        return perimetreTotal;
    }

    @Override
    public String toString() {
        String result = "La collection contient " + formes.size() + " formes:\n";
        for (Forme forme : formes) {
            result += forme.toString() + "\n";
        }
        result += "Aire totale: " + aireTotale() + " cm²\n";
        result += "Périmètre total: " + perimetreTotal() + " cm\n";
        return result;
    }

}
