package com.formes;

public class Carre extends Formes {
    private int cote;

    public Carre(int cote) {
        this.cote = cote;
    }

    public int getCote() {
        return cote;
    }

    public void setCote(int cote) {
        this.cote = cote;
    }

    @Override
    public String toString() {
        return "Je suis un carré : j'ai 4 côtés égaux de " + getCote() +" cm.";
    }
}