import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  title = 'Books';
  readonly APIUrl = "http://localhost:5032/api/Books/";

  constructor(private http:HttpClient){

  }

  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'Books/View').subscribe(data =>{
      this.books = data;
    })
  }

  ngOnInit(){
    this.refreshBooks();
  }

}
