package com.formes;

public class Hexagone extends Formes {

    private double cote;


    public Hexagone(double cote) {
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
        return "Je suis un hexagone convexe : j'ai 6 côté de " +  getCote() + " cm et mon aire est de " + calculerAire() + " cm2 et mon périmètre est de " + calculerPerimetre() + " cm.";
    }
}
