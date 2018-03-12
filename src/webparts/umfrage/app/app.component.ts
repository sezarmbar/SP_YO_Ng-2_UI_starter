import { Component, Inject, Input, OnInit } from '@angular/core';

import { IWebPartContext } from '@microsoft/sp-webpart-base';

@Component({
  selector: 'spapp-root',

  template: `<a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>

  <ui-view></ui-view>`
  // ,
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spapp';
  public name: string = '';
  // public context: IWebPartContext;
  // constructor() {}
  public ngOnInit() {
    // this.context = window['webPartContext'];
    // this.name = this.context.pageContext.user.displayName;
  }
}
