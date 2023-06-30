import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input()item: Item = new Item()
  @Output()deleteItem:EventEmitter<Item> = new EventEmitter();
  constructor(){}
  ngOnInit(): void{

  }
  onDelete(item:Item){
    this.deleteItem.emit(item);
  }
  onToggle(item:Item){
    item.completed =! item.completed;
  }
}
