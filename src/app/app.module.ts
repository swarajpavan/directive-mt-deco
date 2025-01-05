import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ToggleshowDirective } from './shared/directives/toggleshow.directive';
import { DropdownliDirective } from './shared/directives/dropdownli.directive';
import { CsshighlighterDirective } from './shared/directives/csshighlighter.directive';
import { CssrendererDirective } from './shared/directives/cssrenderer.directive';
import { LowercaseDirective } from './shared/directives/lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleshowDirective,
    DropdownliDirective,
    CsshighlighterDirective,
    CssrendererDirective,
    LowercaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
