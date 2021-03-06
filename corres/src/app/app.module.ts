import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WayInputComponent } from './components/way-input/way-input.component';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { TestComponent } from './component/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    WayInputComponent,
    MyHighlightDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
