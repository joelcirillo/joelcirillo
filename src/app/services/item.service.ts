import { Injectable } from '@angular/core';
import { Item } from "../models/item";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item:Item[]=[];
  constructor() { }
  getItems(){
    this.item=[
      
      {
        id:0,
        title: 'manzana',
        price: 10.5,
        quantity:4,
        completed:false
      },
      {
        id:1,
        title: 'pan',
        price: 3.5,
        quantity:8,
        completed:true
      }
    ]
  }
  addItem(item:Item){
    this.item.unshift(item);
  }
}
