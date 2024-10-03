import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsignesComponent } from '../pop-up/consignes/consignes.component';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  constructor(private dialog: MatDialog) {}
  openPopup(): void {
    this.dialog.open(ConsignesComponent, {
      width: '50%',
      height: '555px',
    });
  }

}
