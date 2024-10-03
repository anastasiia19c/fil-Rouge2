import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-consignes',
  templateUrl: './consignes.component.html',
  styleUrls: ['./consignes.component.css']
})
export class ConsignesComponent {
  constructor(private dialogRef: MatDialogRef<ConsignesComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

}
