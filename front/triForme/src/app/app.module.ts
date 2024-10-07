import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';  // Import RouterModule here
import { MatIconModule } from '@angular/material/icon'; // Importer MatIconModule
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsignesComponent } from './pop-up/consignes/consignes.component';
import { FormesComponent } from './categorie/formes/formes.component';
import { TaillesComponent } from './categorie/tailles/tailles.component';
import { CouleursComponent } from './categorie/couleurs/couleurs.component';
import { HttpClientModule } from '@angular/common/http'; 


const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'triParCouleurs', component: CouleursComponent },
  { path: 'triParTailles', component: TaillesComponent },
  { path: 'triParFormes', component: FormesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConsignesComponent,
    FormesComponent,
    TaillesComponent,
    CouleursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
