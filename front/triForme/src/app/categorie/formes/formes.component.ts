import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormeService } from '../../services/forme.service';
import { Router } from '@angular/router'; 
import { JeuPerduComponent } from 'src/app/pop-up/jeu-perdu/jeu-perdu.component';
import { MatDialog } from '@angular/material/dialog';
import { JeuGagneComponent } from 'src/app/pop-up/jeu-gagne/jeu-gagne.component';

@Component({
  selector: 'app-formes',
  templateUrl: './formes.component.html',
  styleUrls: ['./formes.component.css']
})
export class FormesComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

    // Pour stocker les formes dessinées
    formes: any[] = [];

    // Pour stocker les formes triées par formes dans les boîtes
  formesTriees: { [key: string]: any[] } = {
    '4cotes': [],   // Correspond à 'Carre' et 'Rectangle'
    'cercle': [],   // Correspond à 'Cercle'
    'triangle': [], // Correspond à 'Triangle'
    'gone': []      // Correspond à 'Pentagone' et 'Hexagone'
  };

  
    currentDraggingIndex: number | null = null;
    showCorrect: boolean = false; 
    showIncorrect: boolean = false; 
    scoreImages: string[] = []; 
    incorrectAttempts: number = 0; // Compteur de tentatives incorrectes
    maxAttempts: number = 3;

  constructor(private formeService: FormeService,  private router: Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.formeService.getFormes2().subscribe((data) => {
      this.formes = data.formes;
      this.drawShapes(this.formes);
    });
  }

  boites = [
    { image: 'assets/images/boite4cotes.png', name: 'Boîte 4Cotes', forme:'4cotes' },
    { image: 'assets/images/boiteCercle.png', name: 'Boîte Cercle' , forme: 'cercle'},
    { image: 'assets/images/boiteTriangle.png', name: 'Boîte Triangle', forme: 'triangle' },
    { image: 'assets/images/boiteGone.png', name: 'Boîte Gone', forme: 'gone' },
  ];

  tableau = {
    image: 'assets/images/tableau.png', name: "Board" 
  };
  correct = {
    image: 'assets/images/correct.png', name: "correct"
  };
  incorrect = {
    image: 'assets/images/incorrect.png', name: "incorrect"
  };

  onMouseDown(event: MouseEvent) {
    const mousePos = this.getMousePos(event);
    let formeTrouvee = false; // Pour suivre si une forme a été trouvée sous le curseur
  
    this.formes.forEach((forme, index) => {
      if (this.isMouseInShape(mousePos, forme)) {
        this.currentDraggingIndex = index; // On sélectionne la forme
        console.log('Forme sélectionnée:', forme);
        formeTrouvee = true; // Une forme a été trouvée
      }
    });
  
    // Si aucune forme n'a été trouvée sous le curseur, désélectionner toute forme
    if (!formeTrouvee) {
      this.currentDraggingIndex = null;
      console.log('Aucune forme sélectionnée.');
    }
  
    this.clearCanvas();
    this.drawShapes(this.formes); // Redessiner toutes les formes après la sélection
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
      case 'Pentagone':
        const sides = forme.type === 'Hexagone' ? 6 : 5;
        return this.isPointInPolygon(mousePos, forme, sides);
      default:
        return false;
    }
  }
  isPointInPolygon(point: { x: number, y: number }, polygon: any, sides: number): boolean {
    const radius = polygon.cote / (2 * Math.sin(Math.PI / sides));
    const angle = (Math.PI * 2) / sides;

    const dx = point.x - polygon.x;
    const dy = point.y - polygon.y;
    if (dx * dx + dy * dy > radius * radius) {
      return false; 
    }

    let inside = false;
    for (let i = 0; i < sides; i++) {
      const x1 = polygon.x + radius * Math.cos(i * angle);
      const y1 = polygon.y + radius * Math.sin(i * angle);
      const x2 = polygon.x + radius * Math.cos((i + 1) * angle);
      const y2 = polygon.y + radius * Math.sin((i + 1) * angle);

      if ((y1 > point.y) !== (y2 > point.y) &&
          (point.x < (x2 - x1) * (point.y - y1) / (y2 - y1) + x1)) {
          inside = !inside;
      }
    }
    return inside;
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

  onBoiteClick(boite: any) {
    if (this.currentDraggingIndex !== null) {
        const forme = this.formes[this.currentDraggingIndex];

        // Logique pour vérifier si la forme correspond à la boîte
        if (
            (boite.forme === '4cotes' && (forme.type === 'Carre' || forme.type === 'Rectangle')) ||
            (boite.forme === 'cercle' && forme.type === 'Cercle') ||
            (boite.forme === 'triangle' && forme.type === 'Triangle') ||
            (boite.forme === 'gone' && (forme.type === 'Pentagone' || forme.type === 'Hexagone'))
        ) {
            console.log(`Forme déposée dans la boîte: ${boite.name}`);

            // Ajouter la forme dans la boîte correspondante
            this.formesTriees[boite.forme].push(forme);

            // Supprimer la forme du tableau des formes
            this.formes.splice(this.currentDraggingIndex!, 1);

            // Ajout de l'image de score correcte
            this.scoreImages.push(this.correct.image); // Ajout de l'image "correct"
            this.showCorrect = true;
            this.showIncorrect = false;
        // Vérifie si toutes les formes ont été classées
        if (this.formes.length === 0) {
          this.openWinDialog();  // Ouvre la boîte de dialogue pour la victoire
        }else {
        
          // Réinitialiser la sélection avant de redessiner
          this.currentDraggingIndex = null;
          
          // Rafraîchir correctement le canvas
          this.refreshCanvas();
        }
        } else {
          console.log(`La forme sélectionnée de couleur ${forme.couleur} ne correspond pas à la boîte: ${boite.name}`);
          
          // Incrémente le compteur de tentatives incorrectes
          this.incorrectAttempts++;
          
          // Vérifie si le nombre de tentatives incorrectes a atteint la limite
          if (this.incorrectAttempts >= this.maxAttempts) {
            this.endGame(); // Terminer le jeu
          } else {
            // Ajout de l'image de score incorrecte
            this.scoreImages.push(this.incorrect.image); // Ajout de l'image "incorrect"
            this.showCorrect = false;
            this.showIncorrect = true;
          }
        }
    } else {
        console.log('Aucune forme sélectionnée pour être déposée.');
    }
}

openWinDialog(): void {
  const dialogRef = this.dialog.open(JeuGagneComponent); // Ouvre le dialogue de victoire
  dialogRef.afterClosed().subscribe(() => {
    this.router.navigate(['/accueil']); // Redirige vers l'accueil après fermeture
  });
}
endGame() {
  const dialogRef = this.dialog.open(JeuPerduComponent, {
    width: '300px',
  });

  dialogRef.afterClosed().subscribe(() => {
    this.redirectToHome();
  });
}
redirectToHome() {
  this.router.navigate(['/accueil']); 
}
  
  refreshCanvas(): void {
    this.clearCanvas();
  
    // Redessiner les formes restantes sur le canvas
    this.drawShapes(this.formes);
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
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  drawSelectionBorder(forme: any): void {
    this.ctx.strokeStyle = 'black'; // Couleur de la bordure de sélection
    this.ctx.lineWidth = 3; // Épaisseur de la bordure
  
    switch (forme.type) {
      case 'Carre':
        this.ctx.strokeRect(forme.x - 5, forme.y - 5, forme.cote + 10, forme.cote + 10);
        break;
      case 'Cercle':
        this.ctx.beginPath();
        this.ctx.arc(forme.x, forme.y, forme.rayon + 5, 0, 2 * Math.PI);
        this.ctx.stroke();
        break;
      case 'Triangle':
        this.ctx.beginPath();
        this.ctx.moveTo(forme.x, forme.y);
        this.ctx.lineTo(forme.x + forme.base, forme.y);
        this.ctx.lineTo(forme.x + forme.base / 2, forme.y - forme.hauteur);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      case 'Rectangle':
        this.ctx.strokeRect(forme.x - 5, forme.y - 5, forme.longueur + 10, forme.largeur + 10);
        break;
      case 'Hexagone':
      case 'Pentagone':
        const sides = forme.type === 'Hexagone' ? 6 : 5;
        this.drawPolygonBorder(forme, sides);
        break;
    }
  }
  
  drawPolygonBorder(polygon: any, sides: number): void {
    const radius = polygon.cote / (2 * Math.sin(Math.PI / sides)) + 5; // Rayon augmenté pour le contour
    const angle = (Math.PI * 2) / sides;
  
    this.ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const x = polygon.x + radius * Math.cos(i * angle);
      const y = polygon.y + radius * Math.sin(i * angle);
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.closePath();
    this.ctx.stroke();
  }
  
  drawShapes(formes: any[]): void {
    formes.forEach((forme, index) => {
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
    // Si la forme est actuellement sélectionnée, dessiner un contour autour d'elle
    if (this.currentDraggingIndex === index) {
      this.drawSelectionBorder(forme);
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