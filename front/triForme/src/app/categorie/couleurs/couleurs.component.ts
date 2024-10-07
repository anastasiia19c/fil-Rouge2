import { Component } from '@angular/core';

@Component({
  selector: 'app-couleurs',
  templateUrl: './couleurs.component.html',
  styleUrls: ['./couleurs.component.css']
})
export class CouleursComponent {

  boites = [
    { image: 'assets/images/boiteJaune.png', name: 'Boîte Jaune' },
    { image: 'assets/images/boiteRouge.png', name: 'Boîte Rouge' },
    { image: 'assets/images/boiteVerte.png', name: 'Boîte Verte' },
    { image: 'assets/images/boiteBleu.png', name: 'Boîte Bleu' },
  ];

  onBoiteClick(boite: any) {
    console.log('Vous avez cliqué sur :', boite.name);
  }
}