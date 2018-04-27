import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-data',
  templateUrl: './quote-data.component.html',
  styleUrls: ['./quote-data.component.css']
})
export class QuoteDataComponent implements OnInit {

 @Input() quote:Quotes;

  quotes = [];

  addNewQuote(myQuote) {
    this.quotes.push(myQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
