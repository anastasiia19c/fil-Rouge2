package com.formes;

public class Carre {
    private int cote;

    public Carre(int cote) {
        this.cote = cote;
    }

    // Getter pour récupérer le côté
    public int getCote() {
        return cote;
    }

    // Setter pour modifier le côté
    public void setCote(int cote) {
        this.cote = cote;
    }

    @Override
    public String toString() {
        return "Je suis un carré : j'ai 4 côtés égaux de " + getCote() +" cm.";
    }
}
