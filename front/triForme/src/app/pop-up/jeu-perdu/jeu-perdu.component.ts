import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-jeu-perdu',
  templateUrl: './jeu-perdu.component.html',
  styleUrls: ['./jeu-perdu.component.css']
})
export class JeuPerduComponent {
  constructor(public dialogRef: MatDialogRef<JeuPerduComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
