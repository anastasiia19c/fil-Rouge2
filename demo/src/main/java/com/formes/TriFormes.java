package com.formes;

import java.util.ArrayList;
import java.util.List;

public class TriFormes {
    private List<Formes> formes; 

    public TriFormes() {
        this.formes = new ArrayList<>(); 
    }

    public void ajouterForme(Formes forme) {
        this.formes.add(forme);
    }

    public double aireTotale() {
        double aireTotale = 0;
        for (Formes forme : formes) {
            aireTotale += forme.getAire();
        }
        return aireTotale;
    }

    public double perimetreTotal() {
        double perimetreTotal = 0;
        for (Formes forme : formes) {
            perimetreTotal += forme.getPerimetre();
        }
        return perimetreTotal;
    }

    @Override
    public String toString() {
        return "La collection contient " + formes.size() + " formes avec une aire totale de " + aireTotale() + " cm² et un périmètre total de " + perimetreTotal() + " cm.";
    }
}
