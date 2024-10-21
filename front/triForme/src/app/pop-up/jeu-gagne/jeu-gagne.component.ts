import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-jeu-gagne',
  templateUrl: './jeu-gagne.component.html',
  styleUrls: ['./jeu-gagne.component.css']
})
export class JeuGagneComponent {
  constructor(public dialogRef: MatDialogRef<JeuGagneComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
