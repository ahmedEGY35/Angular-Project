import { category } from "./category";

export class Cart{
  product:category;
  count:number;
  constructor(product:category){
    this.product=product;
    this.count = 1;
  }
  getTotal(){
    return this.product.Price *this.count;
  }
  addItem(){
    this.count++;
  }
  removeItem(){
    if(this.count>0)this.count--;
  }
}
