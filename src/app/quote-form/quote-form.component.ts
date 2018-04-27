import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  author: string;
  publisher: string;
  quote: string;
  newQuote: any;
  myDate: Date;
  
  @Output() addQuote = new EventEmitter();

  submitQuote() {
    this.myDate = new Date();
    this.newQuote = new Quotes(0,this.author,this.publisher,this.quote,0,this.myDate);
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
