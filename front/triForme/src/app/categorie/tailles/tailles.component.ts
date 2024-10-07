import { Component } from '@angular/core';

@Component({
  selector: 'app-tailles',
  templateUrl: './tailles.component.html',
  styleUrls: ['./tailles.component.css']
})
export class TaillesComponent {
  boites = [
    { image: 'assets/images/boiteGrande.png', name: 'Boîte Grande' },
    { image: 'assets/images/boiteMoyenne.png', name: 'Boîte Moyenne' },
    { image: 'assets/images/boitePetite.png', name: 'Boîte Petite' },
  ];

  onBoiteClick(boite: any) {
    console.log('Vous avez cliqué sur :', boite.name);
  }
}
