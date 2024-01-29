import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; 
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // ... egyéb komponensek
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ... egyéb modulok
  ],
  providers: [],
  bootstrap: [AppComponent],
})

@NgModule({
  declarations: [
    // Your components
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Other modules you might need
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
const routes: Routes = [
  // Define your routes here
];
