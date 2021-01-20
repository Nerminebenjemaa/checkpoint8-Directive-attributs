import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirDirective } from './directives/dir.directive';
import { MycompenentComponent } from './mycompenent/mycompenent.component';
import { FormsModule } from '@angular/forms';
import { HeighlightDirective } from './directives/heighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirDirective,
    MycompenentComponent,
    HeighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
