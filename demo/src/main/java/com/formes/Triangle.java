package com.formes;

public class Triangle {
    private int cote1;
    private int cote2;
    private int cote3;

    public Triangle(int cote1, int cote2, int cote3) {
        this.cote1 = cote1;
        this.cote2 = cote2;
        this.cote3 = cote3;
    }

    // Getters et setters pour chaque côté
    public int getCote1() {
        return cote1;
    }

    public void setCote1(int cote1) {
        this.cote1 = cote1;
    }

    public int getCote2() {
        return cote2;
    }

    public void setCote2(int cote2) {
        this.cote2 = cote2;
    }

    public int getCote3() {
        return cote3;
    }

    public void setCote3(int cote3) {
        this.cote3 = cote3;
    }

    @Override
    public String toString() {
        return String.format("Je suis un triangle : j'ai des côtés de %d cm, %d cm, et %d cm.",
                cote1, cote2, cote3);
    }
}
