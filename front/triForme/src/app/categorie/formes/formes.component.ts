import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormeService } from '../../services/forme.service';

@Component({
  selector: 'app-formes',
  templateUrl: './formes.component.html',
  styleUrls: ['./formes.component.css']
})
export class FormesComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  constructor(private formeService: FormeService) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.formeService.getFormes2().subscribe((data) => {
      this.drawShapes(data.formes);
    });
  }

  boites = [
    { image: 'assets/images/boite4cotes.png', name: 'Boîte 4Cotes' },
    { image: 'assets/images/boiteCercle.png', name: 'Boîte Cercle' },
    { image: 'assets/images/boiteTriangle.png', name: 'Boîte Triangle' },
    { image: 'assets/images/boiteGone.png', name: 'Boîte Gone' },
  ];

  onBoiteClick(boite: any) {
    console.log('Vous avez cliqué sur :', boite.name);
  }

  drawShapes(formes: any[]): void {
    let offsetX = 0;
    let offsetY = 0;
    formes.forEach((forme, index) => {
      // Décaler les formes pour qu'elles ne se superposent pas
      offsetX = (index % 5) * 200; 
      offsetY = Math.floor(index / 5) * 300; 

      forme.x += offsetX;
      forme.y += offsetY;
      console.log('Forme:', forme); 

      switch (forme.type) {
        case 'Carre':
          this.drawCarre(forme);
          break;
        case 'Cercle':
          this.drawCercle(forme);
          break;
        case 'Triangle':
          this.drawTriangle(forme);
          break;
        case 'Rectangle':
          this.drawRectangle(forme);
          break;
        case 'Hexagone':
          this.drawHexagone(forme);
          break;
        case 'Pentagone':
          this.drawPentagone(forme);
          break;
        default:
          break;
      }
    });
  }


  drawCarre(carre: any): void {
    this.ctx.fillStyle = carre.couleur;
    this.ctx.fillRect(carre.x, carre.y, carre.cote, carre.cote);
  }

  drawCercle(cercle: any): void {
    this.ctx.beginPath();
    this.ctx.arc(cercle.x, cercle.y, cercle.rayon, 0, 2 * Math.PI);
    this.ctx.fillStyle = cercle.couleur;
    this.ctx.fill();
  }

  drawTriangle(triangle: any): void {
    this.ctx.fillStyle = triangle.couleur;
    this.ctx.beginPath();
    this.ctx.moveTo(triangle.x, triangle.y);
    this.ctx.lineTo(triangle.x + triangle.base, triangle.y);
    this.ctx.lineTo(triangle.x + triangle.base / 2, triangle.y - triangle.hauteur);
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawRectangle(rectangle: any): void {
    this.ctx.fillStyle = rectangle.couleur;
    this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.longueur, rectangle.largeur);
  }

  drawHexagone(hexagone: any): void {
    const angle = (Math.PI * 2) / 6;
    const radius = hexagone.cote;
    this.ctx.beginPath();
    this.ctx.moveTo(hexagone.x + radius * Math.cos(0), hexagone.y + radius * Math.sin(0));

    for (let i = 1; i <= 6; i++) {
      this.ctx.lineTo(
        hexagone.x + radius * Math.cos(i * angle),
        hexagone.y + radius * Math.sin(i * angle)
      );
    }

    this.ctx.fillStyle = hexagone.couleur;
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawPentagone(pentagone: any): void {
    const angle = (Math.PI * 2) / 5; // Chaque angle interne du pentagone
    const radius = pentagone.cote / (2 * Math.sin(Math.PI / 5)); // Rayon du cercle inscrit
  
    this.ctx.beginPath();
  
    this.ctx.moveTo(
      pentagone.x + radius * Math.cos(0),
      pentagone.y + radius * Math.sin(0)
    );
  
    for (let i = 1; i <= 5; i++) {
      this.ctx.lineTo(
        pentagone.x + radius * Math.cos(i * angle),
        pentagone.y + radius * Math.sin(i * angle)
      );
    }
  
    this.ctx.fillStyle = pentagone.couleur;
    this.ctx.closePath();
    this.ctx.fill();
  }
  
}