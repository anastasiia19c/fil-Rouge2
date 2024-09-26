package com.formes.model;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("carre")
@Table(name = "carre")
public class Carre extends Forme {
    private double cote;

    public Carre() {
        super(" ", 0.0, 0.0); 
        this.cote = 0.0; 
    }
    public Carre(double cote, String couleur, double x, double y) {
        super (couleur, x,y);
        this.cote = cote;
    }

    public double getCote() {
        return cote;
    }

    public void setCote(double cote) {
        this.cote = cote;
    }

    @Override
    public double getAire() {
        return cote * cote;
    }

    @Override
    public double getPerimetre() {
        return 4 * cote;
    }

    @Override
    public String toString() {
        return getType()+" "+ getCouleur()+": j'ai 4 côtés égaux de " + getCote() +" cm, mon aire est de " + getAire() + " cm² et mon périmètre est de " + getPerimetre() + " cm.";
    }
}