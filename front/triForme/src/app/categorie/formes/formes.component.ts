import { Component } from '@angular/core';

@Component({
  selector: 'app-formes',
  templateUrl: './formes.component.html',
  styleUrls: ['./formes.component.css']
})
export class FormesComponent {

  boites = [
    { image: 'assets/images/boite4cotes.png', name: 'Boîte 4Cotes' },
    { image: 'assets/images/boiteCercle.png', name: 'Boîte Cercle' },
    { image: 'assets/images/boiteTriangle.png', name: 'Boîte Triangle' },
    { image: 'assets/images/boiteGone.png', name: 'Boîte Gone' },
  ];

  onBoiteClick(boite: any) {
    console.log('Vous avez cliqué sur :', boite.name);
  }
}
