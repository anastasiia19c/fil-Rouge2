package com.formes.model;


public abstract class Forme {
    private String couleur; 
    private double x; 
    private double y; 

    public Forme(String couleur, double x, double y) {
        this.couleur = couleur;
        this.x = x;
        this.y = y;
    }

    public String getCouleur() {
        return couleur;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    @Override
    public abstract String toString();

    public double getTaille(){
        return getAire();
    }; 

    public abstract double getAire();

    public abstract double getPerimetre();
}
