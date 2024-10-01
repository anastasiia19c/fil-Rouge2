package com.formes.model;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@DiscriminatorValue("hexagone")
@Table(name = "hexagone")
public class Hexagone extends Forme {

    private double cote;

    public Hexagone() {
        super("", 0.0, 0.0); 
        this.cote = 0.0; 
    }

    public Hexagone(double cote, String couleur, double x, double y) {
        super(couleur, x, y);
        this.cote = cote;
    }

    public double getCote() {
        return cote;
    }

    public void setCote(double cote) {
        this.cote = cote;
    }

    @Override
    public double calculerAire() {
        return (3.0 * Math.sqrt(3) / 2.0) * cote * cote;
    }

    @Override
    public double calculerPerimetre() {
        return 6 * cote;
    }

    @Override
    public String toString() {
        return getType() + " convexe "+ getCouleur()+" : j'ai 6 côté de " +  getCote() + " cm et mon aire est de " + calculerAire() + " cm2 et mon périmètre est de " + calculerPerimetre() + " cm.";
    }
}
