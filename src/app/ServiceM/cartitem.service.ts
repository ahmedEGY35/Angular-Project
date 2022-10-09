import { Injectable } from '@angular/core';
import { Cart } from '../Interfaces/Cart';
import { category } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {
  cartline:Array<Cart>=[];
  constructor() { }
  getProCount():number{
    // return this.cartline.map((x)=>x.count).reduce((acc,v)=>(acc+=v))
    console.log(this.cartline.map((x)=>x.count));
    return this.cartline.length;
  }
  addPro(product:category){
    let IA=false;
    let x=new Cart(product);
    for(let i=0;i<this.cartline.length;i++){
      if(this.cartline[i].product.id===product.id){
      this.cartline[i].count+=1;
      x.addItem;
      IA=true;
      }
      if(!IA){
        this.cartline.push(new Cart(product))
      }
    }
  }
}
