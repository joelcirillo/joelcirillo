import { Injectable } from '@angular/core';
import { Item } from "../models/item";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:3000/items'
  httpOptions={
    headers:{
      'Content-Type':'application/json'
    }
  }
  items:Item[]=[
    
  ];
  constructor(private http:HttpClient) { }
  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
    //return this.items

  }
  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions)
  }
}
