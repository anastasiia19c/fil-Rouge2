package com.formes;

public class Rectangle extends Formes{
    private double longueur;
    private double largeur;

    public Rectangle(double longueur, double largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    public String isRectangle() {
        if (longueur > largeur) {
            return "Je suis un rectangle ";
        } else if (longueur < largeur) {
            return "Je suis un rectangle ";
        } else {
            return "Je ne suis pas un rectangle ";
        }
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
        return isRectangle() + " : j'ai une longueur de " +  getLongueur() + " cm et une largeur de " + getLargeur() + " cm, mon aire est de " + calculerAire() + " cm2 et mon périmètre est de " + calculerPerimetre() + " cm.";
    }
}