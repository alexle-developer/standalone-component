import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';

if (environment.production) {
  enableProdMode();
}


// Step 3: replace platformBrowserDynamic.bootstrapModule(AppModule)
// with bootstrapApplication(AppComponent)

// Step 4: move const routes: Routes = []; from app-routing.module to main.ts
const routes: Routes = [];

// Step 5: add providers: [importProvidersFrom(RouterModule.forRoot(routes))]
// to bootstrapApplication(AppComponent)
//
// At this point of Step 5, the application compiled successfully and
// no run-time errors in the console.

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
  .catch(err => console.error(err));
