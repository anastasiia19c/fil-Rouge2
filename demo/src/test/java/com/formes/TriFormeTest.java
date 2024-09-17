package com.formes;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TriFormeTest {
    private TriForme collection;
    
    @BeforeEach
    public void initCalculator() {
        collection = new TriForme();
    }

    @Test
    public void testAireTotale() {
        Forme carre = new Carre(10, "rouge", 2, 2);  
        Forme cercle = new Cercle(7, "bleu", 3, 7);

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);

        double aireAttendue = carre.getAire() + cercle.getAire();
        assertEquals(aireAttendue, collection.aireTotale());
    }

    @Test
    public void testPerimetreTotal() {
        Forme carre = new Carre(10, "rouge", 2, 2);  
        Forme cercle = new Cercle(7, "bleu", 3, 7);

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);

        double perimetreAttendu = carre.getPerimetre() + cercle.getPerimetre();
        assertEquals(perimetreAttendu, collection.perimetreTotal());
    }
}