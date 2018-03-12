import { aboutState, helloState } from './States';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

const INITIAL_STATES = [helloState, aboutState];
const INITIAL_COMPONENTS = [AppComponent, HelloComponent, AboutComponent];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
