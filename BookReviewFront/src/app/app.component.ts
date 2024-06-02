import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
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

