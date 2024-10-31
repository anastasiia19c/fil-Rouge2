import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsignesComponent } from '../pop-up/consignes/consignes.component';
import { AdminComponent } from '../pop-up/admin/admin.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class accueilComponent {
  constructor(private dialog: MatDialog) {}
  openPopup(): void {
    this.dialog.open(ConsignesComponent, {
      width: '50%',
      height: '557px',
    });
  }
  openPopupAdmin(): void {
    this.dialog.open(AdminComponent, {
      width: '80%',
      height: '80%',
    });
  }

}
