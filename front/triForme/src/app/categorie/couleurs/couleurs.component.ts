import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormeService } from '../../services/forme.service';

@Component({
  selector: 'app-couleurs',
  templateUrl: './couleurs.component.html',
  styleUrls: ['./couleurs.component.css']
})
export class CouleursComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  
  // Pour stocker les formes dessinées
  formes: any[] = [];

  // Pour stocker les formes triées par couleur dans les boîtes
  formesTriees: { [key: string]: any[] } = {
    yellow: [],
    red: [],
    green: [],
    blue: []
  };

  currentDraggingIndex: number | null = null;
  private offsetX!: number;
  private offsetY!: number;

  constructor(private formeService: FormeService) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.formeService.getFormes().subscribe((data) => {
      this.formes = data.formes;
      this.drawShapes(this.formes);
    });
    // Add event listeners for mouse events
    this.canvas.nativeElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.nativeElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.nativeElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  boites = [
    { image: 'assets/images/boiteJaune.png', name: 'Boîte Jaune', couleur: 'yellow' },
    { image: 'assets/images/boiteRouge.png', name: 'Boîte Rouge', couleur: 'red' },
    { image: 'assets/images/boiteVerte.png', name: 'Boîte Verte', couleur: 'green' },
    { image: 'assets/images/boiteBleu.png', name: 'Boîte Bleu', couleur: 'blue' },
  ];

  onMouseDown(event: MouseEvent) {
    const mousePos = this.getMousePos(event);
    this.formes.forEach((forme, index) => {
      if (this.isMouseInShape(mousePos, forme)) {
        this.currentDraggingIndex = index;
        this.offsetX = mousePos.x - forme.x;
        this.offsetY = mousePos.y - forme.y;
      }
    });
  }

  onMouseMove(event: MouseEvent) {
    if (this.currentDraggingIndex !== null) {
      const mousePos = this.getMousePos(event);
      const forme = this.formes[this.currentDraggingIndex];

      // Mettre à jour la position de la forme
      forme.x = mousePos.x - this.offsetX;
      forme.y = mousePos.y - this.offsetY;

      // Effacer le canvas et redessiner les formes
      this.clearCanvas();
      this.drawShapes(this.formes);
    }
  }

  onMouseUp(event: MouseEvent) {
    if (this.currentDraggingIndex !== null) {
      const forme = this.formes[this.currentDraggingIndex];
      const dropSuccessful = this.checkDropArea(event, forme);
      if (!dropSuccessful) {
        console.log("Dépose non réussie : la forme reste à sa position actuelle.");
      }
    }
    this.currentDraggingIndex = null; // Arrêter le drag
  }

  getMousePos(event: MouseEvent): { x: number; y: number } {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  isMouseInShape(mousePos: { x: number; y: number }, forme: any): boolean {
    switch (forme.type) {
      case 'Carre':
        return mousePos.x >= forme.x && mousePos.x <= forme.x + forme.cote &&
               mousePos.y >= forme.y && mousePos.y <= forme.y + forme.cote;
      case 'Cercle':
        const dx = mousePos.x - forme.x;
        const dy = mousePos.y - forme.y;
        return (dx * dx + dy * dy) <= (forme.rayon * forme.rayon);
      case 'Triangle':
        return this.isPointInTriangle(mousePos, forme);
      case 'Rectangle':
        return mousePos.x >= forme.x && mousePos.x <= forme.x + forme.longueur &&
               mousePos.y >= forme.y && mousePos.y <= forme.y + forme.largeur;
      case 'Hexagone':
        return this.isPointInPolygon(mousePos, forme, 6);
      case 'Pentagone':
        return this.isPointInPolygon(mousePos, forme, 5);
      default:
        return false;
    }
  }

  isPointInPolygon(point: { x: number, y: number }, polygon: any, sides: number): boolean {
    const radius = polygon.cote / (2 * Math.sin(Math.PI / sides));
    const angle = (Math.PI * 2) / sides;

    // Vérifiez si le point est à l'intérieur du cercle inscrit
    const dx = point.x - polygon.x;
    const dy = point.y - polygon.y;
    if (dx * dx + dy * dy > radius * radius) {
      return false; // En dehors du cercle inscrit
    }

    let inside = false;
    for (let i = 0; i < sides; i++) {
      const x1 = polygon.x + radius * Math.cos(i * angle);
      const y1 = polygon.y + radius * Math.sin(i * angle);
      const x2 = polygon.x + radius * Math.cos((i + 1) * angle);
      const y2 = polygon.y + radius * Math.sin((i + 1) * angle);

      // Vérifiez si le point est dans le côté du polygon
      if ((y1 > point.y) !== (y2 > point.y) &&
          (point.x < (x2 - x1) * (point.y - y1) / (y2 - y1) + x1)) {
          inside = !inside;
      }
    }
    return inside;
  }

  checkDropArea(event: MouseEvent, forme: any): boolean {
    const mousePos = this.getMousePos(event);
    const tolerance = 200; // Distance de tolérance pour le dépôt
    let dropSuccessful = false;

    this.boites.forEach((boite, index) => {
      const boiteWidth = 200; // Largeur de la boîte
      const boiteHeight = 200; // Hauteur de la boîte

      // Calculer la position x de la boîte
      const boxSpacing = 300; // Espacement horizontal entre les boîtes
      const boiteX = index * (boiteWidth + boxSpacing) + 
        (window.innerWidth - (this.boites.length * boiteWidth + (this.boites.length - 1) * boxSpacing)) / 2;
      const boiteY = window.innerHeight - boiteHeight - 20;

      const boiteRect = {
        x: boiteX,
        y: boiteY,
        width: boiteWidth,
        height: boiteHeight
      };

      if (this.isMouseNearBox(mousePos, boiteRect, tolerance)) {
        if (forme.couleur === boite.couleur) {
          console.log(`Forme déposée dans la boîte: ${boite.name}`);
          this.formesTriees[boite.couleur].push(forme);
          this.formes.splice(this.currentDraggingIndex!, 1); // Remove the shape
          this.clearCanvas();
          this.drawShapes(this.formes);
          this.drawSortedShapes();
          dropSuccessful = true; // Set successful drop flag
        } else {
          console.log(`La couleur de la forme ne correspond pas à la boîte: ${boite.name}`);
        }
      }
    });

    return dropSuccessful; // Return if the drop was successful
  }

  isMouseNearBox(mousePos: { x: number; y: number }, boxRect: { x: number; y: number; width: number; height: number }, tolerance: number): boolean {
    return (
      mousePos.x >= boxRect.x - tolerance &&
      mousePos.x <= boxRect.x + boxRect.width + tolerance &&
      mousePos.y >= boxRect.y - tolerance &&
      mousePos.y <= boxRect.y + boxRect.height + tolerance
    );
  }

  drawSortedShapes() {
    this.clearCanvas();
    Object.keys(this.formesTriees).forEach(couleur => {
      this.formesTriees[couleur].forEach(forme => {
        this.drawShapes([forme]);
      });
    });
    this.drawShapes(this.formes);
  }

  isPointInTriangle(pt: { x: number, y: number }, triangle: any): boolean {
    const b1 = this.sign(pt, { x: triangle.x, y: triangle.y }, 
                          { x: triangle.x + triangle.base, y: triangle.y }) < 0.0;
    const b2 = this.sign(pt, { x: triangle.x + triangle.base, y: triangle.y }, 
                          { x: triangle.x + triangle.base / 2, y: triangle.y - triangle.hauteur }) < 0.0;
    const b3 = this.sign(pt, { x: triangle.x + triangle.base / 2, y: triangle.y - triangle.hauteur }, 
                          { x: triangle.x, y: triangle.y }) < 0.0;

    return (b1 === b2) && (b2 === b3);
  }

  sign(p1: { x: number, y: number }, p2: { x: number, y: number }, p3: { x: number, y: number }): number {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }

  drawShapes(formes: any[]) {
    formes.forEach((forme) => {
      switch (forme.type) {
        case 'Carre':
          this.drawSquare(forme);
          break;
        case 'Cercle':
          this.drawCircle(forme);
          break;
        case 'Triangle':
          this.drawTriangle(forme);
          break;
        case 'Rectangle':
          this.drawRectangle(forme);
          break;
        case 'Hexagone':
          this.drawPolygon(forme, 6);
          break;
        case 'Pentagone':
          this.drawPolygon(forme, 5);
          break;
      }
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  drawSquare(forme: any) {
    this.ctx.fillStyle = forme.couleur;
    this.ctx.fillRect(forme.x, forme.y, forme.cote, forme.cote);
  }

  drawCircle(forme: any) {
    this.ctx.fillStyle = forme.couleur;
    this.ctx.beginPath();
    this.ctx.arc(forme.x, forme.y, forme.rayon, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawTriangle(forme: any) {
    this.ctx.fillStyle = forme.couleur;
    this.ctx.beginPath();
    this.ctx.moveTo(forme.x, forme.y);
    this.ctx.lineTo(forme.x + forme.base, forme.y);
    this.ctx.lineTo(forme.x + forme.base / 2, forme.y - forme.hauteur);
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawRectangle(forme: any) {
    this.ctx.fillStyle = forme.couleur;
    this.ctx.fillRect(forme.x, forme.y, forme.longueur, forme.largeur);
  }

  drawPolygon(forme: any, sides: number) {
    const angle = (Math.PI * 2) / sides;
    const radius = forme.cote / (2 * Math.sin(Math.PI / sides));

    this.ctx.fillStyle = forme.couleur;
    this.ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const x = forme.x + radius * Math.cos(i * angle);
      const y = forme.y + radius * Math.sin(i * angle);
      this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  onBoiteClick(boite: any) {
    console.log('Vous avez cliqué sur :', boite.name);
  }
}
