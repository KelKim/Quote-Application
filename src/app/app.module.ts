import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteDataComponent } from './quote-data/quote-data.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDisplayComponent,
    QuoteDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
