package com.formes.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;


@JsonTypeInfo(  
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Carre.class, name = "Carre"),
        @JsonSubTypes.Type(value = Cercle.class, name = "Cercle"),
        @JsonSubTypes.Type(value = Rectangle.class, name = "Rectangle"),
        @JsonSubTypes.Type(value = Triangle.class, name = "Triangle"),
        @JsonSubTypes.Type(value = Hexagone.class, name = "Hexagone"),
        @JsonSubTypes.Type(value = Pentagone.class, name = "Pentagone")
})

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "forme")
public abstract class Forme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String couleur; 
    private double x; 
    private double y; 

    public Forme(String couleur, double x, double y) {
        this.couleur = couleur;
        this.x = x;
        this.y = y;
    }
    @JsonIgnore
    public String getType() {
        return getClass().getSimpleName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        return calculerAire();
    }; 

    public abstract double calculerAire();

    public abstract double calculerPerimetre();
}
