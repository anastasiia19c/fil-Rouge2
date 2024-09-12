package com.formes;

public abstract class Formes {

    private String couleur;  

    public Formes(String couleur) {
        this.couleur = couleur;
    }

    public String getCouleur() {
        return couleur;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    @Override
    public abstract String toString();
    

    public abstract double getAire();

    public abstract double getPerimetre();
}
