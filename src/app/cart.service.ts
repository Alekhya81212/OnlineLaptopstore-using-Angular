import { Injectable } from '@angular/core';
import { ProductI } from './laptop-i';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:ProductI[]=[];

  addTocart(product:ProductI){

    this.items.push(product);
  }

getItems(){
  return this.items;
}

clearCart(){
  this.items=[];
  return this.items;
}


  constructor() { }
}
