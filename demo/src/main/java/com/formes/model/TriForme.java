package com.formes.model;


import java.util.ArrayList;
import java.util.List;


public class TriForme {

    private List<Forme> formes = new ArrayList<>();

    public TriForme() {}

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
