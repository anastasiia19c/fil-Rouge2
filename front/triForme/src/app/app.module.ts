import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';  // Import RouterModule here
import { MatIconModule } from '@angular/material/icon'; // Importer MatIconModule


import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Définition des routes
const routes: Routes = [
  { path: '', component: AcceuilComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
