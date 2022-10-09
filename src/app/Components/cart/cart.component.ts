import { Component, OnInit } from '@angular/core';
import { CartitemService } from 'src/app/ServiceM/cartitem.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartitemService) { }

  ngOnInit(): void {
  }
  getCC():number{
    return this.cart.getProCount();
  }
}
