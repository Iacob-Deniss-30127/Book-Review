import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
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
