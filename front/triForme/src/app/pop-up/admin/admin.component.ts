import { Component } from '@angular/core';
import { FormeService } from 'src/app/services/forme.service';  
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nouvelleForme: any = {};
  formes: any[] = [];
  
  constructor(
    private formesService: FormeService,
    private dialogRef: MatDialogRef<AdminComponent>,
    private snackBar: MatSnackBar 
  ) {}

  onSubmit() {
    const compositionId = this.nouvelleForme.categorie;  

    this.formesService.ajouterForme(compositionId, this.nouvelleForme)
      .subscribe(response => {
        console.log('Forme ajoutée avec succès:', response);
        this.formes.push(this.nouvelleForme);  
        this.nouvelleForme = {};  
        
        this.snackBar.open('Forme ajoutée avec succès !', 'Fermer', {
          duration: 3000, 
        });
      }, error => {
        console.error('Erreur lors de l\'ajout de la forme:', error);
      });
  }

  close() {
    this.dialogRef.close();
  }
}
