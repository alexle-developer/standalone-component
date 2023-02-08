import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Step 2: remove AppComponent from the declarations and bootstrap
// to eliminate error NG6008: Component AppComponent is standalone,
// and cannot be declared in an NgModule.Did you mean to import it instead?
//
// Now we have different error after completing Step 2.
// Error: src / app / app.component.html: 31: 1 - error NG8001: 'router-outlet' is not a known element:
// 1. If 'router-outlet' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
// 2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
