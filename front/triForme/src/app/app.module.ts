import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';  // Import RouterModule here
import { MatIconModule } from '@angular/material/icon'; // Importer MatIconModule
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsignesComponent } from './pop-up/consignes/consignes.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: AcceuilComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConsignesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
