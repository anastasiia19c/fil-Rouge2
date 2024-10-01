package com.formes;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.formes.model.Carre;
import com.formes.model.Cercle;
import com.formes.model.Forme;
import com.formes.model.TriForme;

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

        double aireAttendue = carre.calculerAire() + cercle.calculerAire();
        assertEquals(aireAttendue, collection.aireTotale());
    }

    @Test
    public void testPerimetreTotal() {
        Forme carre = new Carre(10, "rouge", 2, 2);  
        Forme cercle = new Cercle(7, "bleu", 3, 7);

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);

        double perimetreAttendu = carre.calculerPerimetre() + cercle.calculerPerimetre();
        assertEquals(perimetreAttendu, collection.perimetreTotal());
    }
}