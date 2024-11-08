package com.formes.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@DiscriminatorValue("rectangle")
@Table(name = "rectangle")
public class Rectangle extends Forme{
    private double longueur;
    private double largeur;

    public Rectangle() {
        super("", 0.0, 0.0); 
        this.longueur = 0.0; 
        this.largeur = 0.0;
    }

    public Rectangle(double longueur, double largeur, String couleur,double x, double y) {
        super(couleur,x, y);
        this.longueur = longueur;
        this.largeur = largeur;
    }

    public double getLongueur() {
        return longueur;
    }

    public void setLongueur(double longueur) {
        this.longueur = longueur;
    }

    public double getLargeur() {
        return largeur;
    }

    public void setLargeur(double largeur) {
        this.largeur = largeur;
    }

    @Override
    public double calculerAire() {
        return largeur * longueur;
    }
    
    @Override
    public double calculerPerimetre() {
        return (largeur + longueur) * 2;
    }

    @Override
    public String toString() {
        return getType() + " "+ getCouleur()+" : j'ai une longueur de " +  getLongueur() + " cm et une largeur de " + getLargeur() + " cm, mon aire est de " + calculerAire() + " cm2 et mon périmètre est de " + calculerPerimetre() + " cm.";
    }
}