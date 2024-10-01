package com.formes.model;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@DiscriminatorValue("cercle")
@Table(name = "cercle")
public class Cercle extends Forme {
    private double rayon;
    public Cercle() {
        super(" ", 0.0, 0.0); 
        this.rayon = 0.0; 
    }
    public Cercle(double rayon, String couleur, double x, double y) {
        super(couleur, x, y);
        this.rayon = rayon;
    }

    public double getRayon() {
        return rayon;
    }

    public void setRayon(double rayon) {
        this.rayon = rayon;
    }

    @Override
    public double calculerAire() {
        return Math.PI * rayon * rayon;
    }
    
    @Override
    public double calculerPerimetre() {
        return 2 * Math.PI * rayon;
    }

    @Override
    public String toString() {
        return getType()+ " "+ getCouleur()+" : j'ai un rayon de " + getRayon()+ " cm, mon aire est de "+ calculerAire() + "cm2 et mon périmètre est de "+ calculerPerimetre()+" cm.";
    }
}
