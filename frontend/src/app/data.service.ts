import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  backend : string = "http://localhost:8080/";


  messageArray : string[] =[];

  getMessages(): void {
    this.messageArray;
  }

  sendQuery(query:string){
    this.http.post<queryResponse>( this.backend + "query", {query: query} ).subscribe(
      data => this.messageArray.push(data.response)
    )
  }

  
}

export interface queryRequest{
  query: string
}
export interface queryResponse{
  response: string
}