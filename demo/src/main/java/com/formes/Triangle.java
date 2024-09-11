package com.formes;

public class Triangle extends Formes {
    private double cote1;
    private double cote2;
    private double cote3;
    private double base;
    private double hauteur;

    public Triangle(double cote1, double cote2, double cote3, double base, double hauteur) {
        this.cote1 = cote1;
        this.cote2 = cote2;
        this.cote3 = cote3;
        this.base = base;
        this.hauteur = hauteur;
    }

    public String isTriangle() {
        if (cote1 + cote2 > cote3 && cote1 + cote3 > cote2 && cote2 + cote3 > cote1){
            return "Je suis un triangle : ";
        } else{
            return "Je ne suis pas un triagle : ";
        }
    }

    public double getCote1() {
        return cote1;
    }

    public void setCote1(double cote1) {
        this.cote1 = cote1;
    }

    public double getCote2() {
        return cote2;
    }

    public void setCote2(double cote2) {
        this.cote2 = cote2;
    }

    public double getCote3() {
        return cote3;
    }

    public void setCote3(double cote3) {
        this.cote3 = cote3;
    }

    @Override
    public double calculerAire() {
        return (base * hauteur) / 2 ;
    }

    @Override
    public double calculerPerimetre() {
        return cote1 + cote2 + cote3;
    }

    @Override
    public String toString() {
        return isTriangle() + " j'ai des côtés de " + getCote1() + " cm, " + getCote2() +" cm, et " + getCote3() + " cm, mon aire est de " + calculerAire() + " cm2 et mon périmètre est de "+ calculerPerimetre() + " cm.";
    }
}