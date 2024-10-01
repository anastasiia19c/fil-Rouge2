import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 

@NgModule({
    declarations: [
        AppComponent, 
    ],
    imports: [
        BrowserModule, // Importez d'autres modules ici si nécessaire
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
