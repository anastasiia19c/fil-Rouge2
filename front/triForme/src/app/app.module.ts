import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';  
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsignesComponent } from './pop-up/consignes/consignes.component';
import { FormesComponent } from './categorie/formes/formes.component';
import { TaillesComponent } from './categorie/tailles/tailles.component';
import { CouleursComponent } from './categorie/couleurs/couleurs.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pop-up/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JeuPerduComponent } from './pop-up/jeu-perdu/jeu-perdu.component';
import { JeuGagneComponent } from './pop-up/jeu-gagne/jeu-gagne.component';




const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'triParCouleurs', component: CouleursComponent },
  { path: 'triParTailles', component: TaillesComponent },
  { path: 'triParFormes', component: FormesComponent },
  { path: 'parametres', component: AdminComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConsignesComponent,
    FormesComponent,
    TaillesComponent,
    CouleursComponent,
    AdminComponent,
    JeuPerduComponent,
    JeuGagneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
