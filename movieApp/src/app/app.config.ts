import { ApplicationConfig } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importáld be a RouterModule-t
import { AppRoutingModule } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [AppRoutingModule],
};
